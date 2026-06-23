const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'aura_labs_secret_key_change_in_production';

// Middleware
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:8003', 'http://localhost:3000', 'https://willing-earthy-overdress.ngrok-free.dev'],
  credentials: true
}));

// Database setup
const db = new sqlite3.Database(path.join(__dirname, 'aura_labs.db'), (err) => {
  if (err) console.error('Database connection error:', err);
  else console.log('Connected to SQLite database');
});

// Create tables if they don't exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      compound_name TEXT NOT NULL,
      quantity TEXT,
      order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(user_id) REFERENCES users(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS support_tickets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      status TEXT DEFAULT 'open',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

// Email setup (using test service for now)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'noreply@auralabs.io',
    pass: process.env.EMAIL_PASS || 'password'
  }
});

// Routes

// Sign up
app.post('/api/auth/signup', async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.run(
      'INSERT INTO users (email, password, name) VALUES (?, ?, ?)',
      [email, hashedPassword, name || ''],
      function(err) {
        if (err) {
          return res.status(400).json({ error: 'Email already registered' });
        }

        const token = jwt.sign({ userId: this.lastID, email }, JWT_SECRET, { expiresIn: '7d' });
        res.json({ success: true, token, userId: this.lastID, email });
      }
    );
  } catch (error) {
    res.status(500).json({ error: 'Signup failed' });
  }
});

// Sign in
app.post('/api/auth/signin', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' });
  }

  db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
    if (err || !user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    try {
      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }

      const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
      res.json({ success: true, token, userId: user.id, email: user.email, name: user.name });
    } catch (error) {
      res.status(500).json({ error: 'Sign in failed' });
    }
  });
});

// Get user account details
app.get('/api/user/:userId', (req, res) => {
  const { userId } = req.params;
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    jwt.verify(token, JWT_SECRET);

    db.get('SELECT id, email, name, created_at FROM users WHERE id = ?', [userId], (err, user) => {
      if (err || !user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json(user);
    });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

// Get user orders
app.get('/api/user/:userId/orders', (req, res) => {
  const { userId } = req.params;
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    jwt.verify(token, JWT_SECRET);

    db.all('SELECT * FROM orders WHERE user_id = ? ORDER BY order_date DESC', [userId], (err, orders) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to fetch orders' });
      }

      res.json(orders || []);
    });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});

// Contact Support
app.post('/api/support', (req, res) => {
  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).json({ error: 'All fields required' });
  }

  db.run(
    'INSERT INTO support_tickets (email, subject, message) VALUES (?, ?, ?)',
    [email, subject, message],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to submit ticket' });
      }

      // Send confirmation email (optional)
      const mailOptions = {
        from: process.env.EMAIL_USER || 'noreply@auralabs.io',
        to: email,
        subject: 'Support Request Received',
        text: `Thank you for contacting Aura Labs. We received your request and will respond within 24 hours.\n\nTicket ID: ${this.lastID}`
      };

      transporter.sendMail(mailOptions, (err) => {
        if (err) console.error('Email send error:', err);
      });

      res.json({ success: true, ticketId: this.lastID });
    }
  );
});

// Password reset request
app.post('/api/auth/reset-request', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email required' });
  }

  db.get('SELECT id FROM users WHERE email = ?', [email], (err, user) => {
    if (err || !user) {
      // Return success to prevent email enumeration
      return res.json({ success: true, message: 'If email exists, reset link sent' });
    }

    // Generate temporary reset token
    const resetToken = jwt.sign({ userId: user.id, type: 'reset' }, JWT_SECRET, { expiresIn: '1h' });

    // In production, send this via email
    res.json({ success: true, message: 'Reset link sent to email (dev: token=' + resetToken + ')' });
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Aura Labs backend running on http://localhost:${PORT}`);
});
