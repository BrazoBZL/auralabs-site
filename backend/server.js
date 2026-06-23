const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'aura_labs_secret_key_change_in_production';
const STRIPE_SECRET = process.env.STRIPE_SECRET || 'sk_test_placeholder';

// Middleware
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:8003', 'http://localhost:3000', 'https://willing-earthy-overdress.ngrok-free.dev', 'https://auralabsbio.co', 'http://auralabsbio.co'],
  credentials: true
}));

// Database setup
const db = new sqlite3.Database(path.join(__dirname, 'aura_labs.db'), (err) => {
  if (err) console.error('Database connection error:', err);
  else console.log('Connected to SQLite database');
});

// Promisified database methods
const dbRun = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function(err) {
      if (err) reject(err);
      else resolve(this);
    });
  });
};

const dbGet = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
};

const dbAll = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

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
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      description TEXT,
      price REAL NOT NULL,
      sku TEXT UNIQUE,
      stock INTEGER DEFAULT 100,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS cart (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      product_id INTEGER NOT NULL,
      quantity INTEGER NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(user_id) REFERENCES users(id),
      FOREIGN KEY(product_id) REFERENCES products(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      order_number TEXT UNIQUE,
      total_amount REAL NOT NULL,
      status TEXT DEFAULT 'pending',
      stripe_payment_id TEXT,
      shipping_address TEXT,
      shipping_city TEXT,
      shipping_state TEXT,
      shipping_zip TEXT,
      order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(user_id) REFERENCES users(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS order_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER NOT NULL,
      product_id INTEGER NOT NULL,
      product_name TEXT NOT NULL,
      quantity INTEGER NOT NULL,
      price REAL NOT NULL,
      FOREIGN KEY(order_id) REFERENCES orders(id),
      FOREIGN KEY(product_id) REFERENCES products(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS blog_posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      content TEXT NOT NULL,
      excerpt TEXT,
      author TEXT DEFAULT 'Aura Labs',
      category TEXT,
      tags TEXT,
      meta_description TEXT,
      published BOOLEAN DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      published_at DATETIME
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS support_tickets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      email TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      status TEXT DEFAULT 'open',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(user_id) REFERENCES users(id)
    )
  `);
});

// ============ AUTH ENDPOINTS ============

app.post('/api/auth/signup', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const result = await dbRun(
      'INSERT INTO users (email, password, name) VALUES (?, ?, ?)',
      [email, hashedPassword, name]
    );
    
    const token = jwt.sign({ userId: result.lastID }, JWT_SECRET);
    res.json({ token, userId: result.lastID });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/auth/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await dbGet('SELECT * FROM users WHERE email = ?', [email]);
    
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ userId: user.id }, JWT_SECRET);
    res.json({ token, userId: user.id, name: user.name });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/user/:userId', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token' });
    
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await dbGet('SELECT id, name, email FROM users WHERE id = ?', [decoded.userId]);
    res.json(user);
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

// ============ PRODUCT ENDPOINTS ============

app.get('/api/products', async (req, res) => {
  try {
    const products = await dbAll('SELECT * FROM products ORDER BY category, name');
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const { name, category, description, price, sku } = req.body;
    const result = await dbRun(
      'INSERT INTO products (name, category, description, price, sku) VALUES (?, ?, ?, ?, ?)',
      [name, category, description, price, sku]
    );
    res.json({ id: result.lastID });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============ CART ENDPOINTS ============

app.post('/api/cart/add', async (req, res) => {
  try {
    const { user_id, product_id, quantity } = req.body;
    
    // Check if product exists
    const product = await dbGet('SELECT * FROM products WHERE id = ?', [product_id]);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    
    // Check if item already in cart
    const existing = await dbGet(
      'SELECT * FROM cart WHERE user_id = ? AND product_id = ?',
      [user_id, product_id]
    );
    
    if (existing) {
      await dbRun(
        'UPDATE cart SET quantity = quantity + ? WHERE user_id = ? AND product_id = ?',
        [quantity, user_id, product_id]
      );
    } else {
      await dbRun(
        'INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)',
        [user_id, product_id, quantity]
      );
    }
    
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/cart/:userId', async (req, res) => {
  try {
    const items = await dbAll(`
      SELECT c.*, p.name, p.price, p.category
      FROM cart c
      JOIN products p ON c.product_id = p.id
      WHERE c.user_id = ?
    `, [req.params.userId]);
    
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    res.json({ items, total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/cart/:userId/:productId', async (req, res) => {
  try {
    await dbRun(
      'DELETE FROM cart WHERE user_id = ? AND product_id = ?',
      [req.params.userId, req.params.productId]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============ ORDER ENDPOINTS ============

app.post('/api/orders/create', async (req, res) => {
  try {
    const { user_id, items, total, shipping_address, shipping_city, shipping_state, shipping_zip } = req.body;
    
    const orderNumber = `AU-${Date.now()}`;
    const result = await dbRun(
      `INSERT INTO orders (user_id, order_number, total_amount, shipping_address, shipping_city, shipping_state, shipping_zip)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [user_id, orderNumber, total, shipping_address, shipping_city, shipping_state, shipping_zip]
    );
    
    // Add order items
    for (const item of items) {
      await dbRun(
        `INSERT INTO order_items (order_id, product_id, product_name, quantity, price)
         VALUES (?, ?, ?, ?, ?)`,
        [result.lastID, item.product_id, item.name, item.quantity, item.price]
      );
    }
    
    // Clear cart
    await dbRun('DELETE FROM cart WHERE user_id = ?', [user_id]);
    
    res.json({ order_id: result.lastID, order_number: orderNumber });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/orders/:userId', async (req, res) => {
  try {
    const orders = await dbAll('SELECT * FROM orders WHERE user_id = ? ORDER BY order_date DESC', [req.params.userId]);
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/orders/:userId/:orderId', async (req, res) => {
  try {
    const order = await dbGet(
      'SELECT * FROM orders WHERE id = ? AND user_id = ?',
      [req.params.orderId, req.params.userId]
    );
    
    if (!order) return res.status(404).json({ error: 'Order not found' });
    
    const items = await dbAll(
      'SELECT * FROM order_items WHERE order_id = ?',
      [req.params.orderId]
    );
    
    res.json({ ...order, items });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============ BLOG ENDPOINTS ============

app.get('/api/blog/posts', async (req, res) => {
  try {
    const posts = await dbAll(
      'SELECT id, title, slug, excerpt, author, category, published_at, created_at FROM blog_posts WHERE published = 1 ORDER BY published_at DESC'
    );
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/blog/posts/:slug', async (req, res) => {
  try {
    const post = await dbGet(
      'SELECT * FROM blog_posts WHERE slug = ? AND published = 1',
      [req.params.slug]
    );
    
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/blog/posts', async (req, res) => {
  try {
    const { title, slug, content, excerpt, author, category, tags, meta_description, published } = req.body;
    
    const result = await dbRun(
      `INSERT INTO blog_posts (title, slug, content, excerpt, author, category, tags, meta_description, published, published_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`,
      [title, slug, content, excerpt, author || 'Aura Labs', category, tags, meta_description, published ? 1 : 0]
    );
    
    res.json({ id: result.lastID });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============ SEO ENDPOINTS ============

app.get('/sitemap.xml', async (req, res) => {
  try {
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    // Static pages
    const pages = ['/', '/catalog.html', '/account.html', '/blog'];
    pages.forEach(page => {
      sitemap += `  <url>\n    <loc>https://auralabsbio.co${page}</loc>\n    <changefreq>weekly</changefreq>\n  </url>\n`;
    });
    
    // Blog posts
    const posts = await dbAll('SELECT slug, updated_at FROM blog_posts WHERE published = 1');
    posts.forEach(post => {
      sitemap += `  <url>\n    <loc>https://auralabsbio.co/blog/${post.slug}</loc>\n    <lastmod>${post.updated_at}</lastmod>\n    <changefreq>monthly</changefreq>\n  </url>\n`;
    });
    
    sitemap += '</urlset>';
    
    res.type('application/xml');
    res.send(sitemap);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/robots.txt', (req, res) => {
  const robots = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /backend/

Sitemap: https://auralabsbio.co/sitemap.xml`;
  
  res.type('text/plain');
  res.send(robots);
});

// ============ SUPPORT ENDPOINTS ============

app.post('/api/support', async (req, res) => {
  try {
    const { user_id, email, subject, message } = req.body;
    
    await dbRun(
      'INSERT INTO support_tickets (user_id, email, subject, message) VALUES (?, ?, ?, ?)',
      [user_id || null, email, subject, message]
    );
    
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============ HEALTH CHECK ============

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// ============ ERROR HANDLING ============

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Aura Labs backend running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
