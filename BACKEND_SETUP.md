# Aura Labs Backend Setup & API Documentation

## Quick Start

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Start the Backend Server
```bash
node server.js
```

Server runs on: `http://localhost:5000`

### 3. Seed Sample Data (Optional)
```bash
node seed-posts.js
```

This creates 3 sample blog posts for testing.

---

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  name TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

### Products Table
```sql
CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  price REAL NOT NULL,
  sku TEXT UNIQUE,
  stock INTEGER DEFAULT 100,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

### Cart Table
```sql
CREATE TABLE cart (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(product_id) REFERENCES products(id)
)
```

### Orders Table
```sql
CREATE TABLE orders (
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
```

### Order Items Table
```sql
CREATE TABLE order_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  product_name TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  price REAL NOT NULL,
  FOREIGN KEY(order_id) REFERENCES orders(id),
  FOREIGN KEY(product_id) REFERENCES products(id)
)
```

### Blog Posts Table
```sql
CREATE TABLE blog_posts (
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
```

---

## API Endpoints

### Authentication

#### Sign Up
```
POST /api/auth/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword",
  "name": "User Name"
}

Response: { token: "jwt_token", userId: 1 }
```

#### Sign In
```
POST /api/auth/signin
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword"
}

Response: { token: "jwt_token", userId: 1, name: "User Name" }
```

#### Get User
```
GET /api/user/:userId
Authorization: Bearer {token}

Response: { id: 1, name: "User Name", email: "user@example.com" }
```

---

### Products

#### Get All Products
```
GET /api/products

Response: [
  {
    id: 1,
    name: "BPC-157",
    category: "Healing & Recovery",
    description: "...",
    price: 49.99,
    sku: "BPC157",
    stock: 50,
    created_at: "2026-06-23T..."
  },
  ...
]
```

#### Add Product
```
POST /api/products
Content-Type: application/json

{
  "name": "New Compound",
  "category": "Category",
  "description": "Description",
  "price": 99.99,
  "sku": "SKU123"
}

Response: { id: 2 }
```

---

### Cart

#### Add to Cart
```
POST /api/cart/add
Content-Type: application/json

{
  "user_id": 1,
  "product_id": 1,
  "quantity": 2
}

Response: { success: true }
```

#### Get Cart
```
GET /api/cart/:userId

Response: {
  items: [
    {
      id: 1,
      user_id: 1,
      product_id: 1,
      quantity: 2,
      name: "BPC-157",
      price: 49.99,
      category: "Healing & Recovery"
    }
  ],
  total: 99.98
}
```

#### Remove from Cart
```
DELETE /api/cart/:userId/:productId

Response: { success: true }
```

---

### Orders

#### Create Order
```
POST /api/orders/create
Content-Type: application/json

{
  "user_id": 1,
  "items": [
    { product_id: 1, name: "BPC-157", quantity: 2, price: 49.99 }
  ],
  "total": 109.98,
  "shipping_address": "123 Main St",
  "shipping_city": "San Francisco",
  "shipping_state": "CA",
  "shipping_zip": "94102"
}

Response: { order_id: 1, order_number: "AU-1687574800000" }
```

#### Get Orders
```
GET /api/orders/:userId

Response: [
  {
    id: 1,
    user_id: 1,
    order_number: "AU-1687574800000",
    total_amount: 109.98,
    status: "pending",
    shipping_address: "123 Main St",
    order_date: "2026-06-23T..."
  }
]
```

#### Get Order Details
```
GET /api/orders/:userId/:orderId

Response: {
  id: 1,
  user_id: 1,
  order_number: "AU-1687574800000",
  total_amount: 109.98,
  status: "pending",
  items: [
    {
      id: 1,
      order_id: 1,
      product_id: 1,
      product_name: "BPC-157",
      quantity: 2,
      price: 49.99
    }
  ]
}
```

---

### Blog

#### Get Published Posts
```
GET /api/blog/posts

Response: [
  {
    id: 1,
    title: "Post Title",
    slug: "post-slug",
    excerpt: "Post excerpt...",
    author: "Aura Labs",
    category: "Guides",
    published_at: "2026-06-23T...",
    created_at: "2026-06-23T..."
  }
]
```

#### Get Single Post
```
GET /api/blog/posts/:slug

Response: {
  id: 1,
  title: "Post Title",
  slug: "post-slug",
  content: "<h2>Full HTML content...</h2>",
  excerpt: "Post excerpt...",
  author: "Aura Labs",
  category: "Guides",
  tags: "peptides, research",
  meta_description: "...",
  published_at: "2026-06-23T...",
  created_at: "2026-06-23T...",
  updated_at: "2026-06-23T..."
}
```

#### Create Post
```
POST /api/blog/posts
Content-Type: application/json

{
  "title": "New Post Title",
  "slug": "new-post-slug",
  "content": "<h2>HTML content...</h2>",
  "excerpt": "Short excerpt...",
  "author": "Author Name",
  "category": "Research",
  "tags": "peptides, research",
  "meta_description": "SEO description",
  "published": true
}

Response: { id: 4 }
```

---

### SEO

#### Get Sitemap
```
GET /sitemap.xml

Response: XML sitemap with all pages and blog posts
```

#### Get Robots.txt
```
GET /robots.txt

Response: Standard robots.txt with sitemap reference
```

---

### Support

#### Submit Support Ticket
```
POST /api/support
Content-Type: application/json

{
  "user_id": 1,
  "email": "user@example.com",
  "subject": "Question about ordering",
  "message": "I have a question..."
}

Response: { success: true }
```

---

### Health Check

```
GET /api/health

Response: { status: "ok", timestamp: "2026-06-23T14:15:30.000Z" }
```

---

## Environment Variables

Create a `.env` file in the `backend` directory:

```
PORT=5000
JWT_SECRET=your_secret_key_here
NODE_ENV=development
STRIPE_SECRET=sk_test_placeholder
```

---

## Deployment Notes

### Production Checklist
1. Change `JWT_SECRET` to a strong random string
2. Add `STRIPE_SECRET` for payment processing
3. Update CORS origins to production domain
4. Use environment variables for sensitive data
5. Enable HTTPS in production
6. Set `NODE_ENV=production`
7. Use a production database (consider PostgreSQL)

### Database Backup
```bash
# Backup SQLite database
cp backend/aura_labs.db backend/aura_labs.db.backup

# Or migrate to PostgreSQL for production
```

---

## Extending the Backend

### Adding New API Routes
```javascript
app.post('/api/custom-endpoint', async (req, res) => {
  try {
    // Your logic here
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
```

### Adding New Database Tables
Add to the `db.serialize()` section in `server.js`:

```javascript
db.run(`
  CREATE TABLE IF NOT EXISTS my_table (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    field TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);
```

---

## Integration with Frontend

The frontend (checkout.html, blog.html) makes CORS requests to the backend. Ensure CORS is properly configured:

```javascript
app.use(cors({
  origin: ['http://localhost:8003', 'https://auralabsbio.co'],
  credentials: true
}));
```

---

## Support

For questions about the API, submit a support ticket via `/api/support` or email research@auralabsbio.com
