const express = require('express');
const { sequelize, Book } = require('./models');
const path = require('path');
const upload = require('./upload'); // Import multer config
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(express.json()); // To parse JSON request bodies

app.use(cors({
  origin: "http://localhost:3000", // Adjust according to frontend port
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

// ✅ Ensure the 'uploads' folder exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// ✅ Serve static files (uploaded images)
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded images

// ✅ API Route to upload images
app.post('/upload', upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    const filePath = `/uploads/${req.file.originalname}`;
    res.json({ filename: req.file.originalname});
});

// ✅ API Route to uploaded files
app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public/uploads.html'));
});

app.get('/uploads/list', (req, res) => {
  fs.readdir(uploadDir, (err, files) => {
      if (err) {
          return res.status(500).json({ error: 'Unable to list files' });
      }
      res.json(files);
  });
});

// ✅ API Route to fetch books
app.get('/books', async (req, res) => {
  try {
      const books = await Book.findAll();
      const booksWithImagePaths = books.map(book => ({
        ...book.toJSON(),
        image: book.image ? `http://localhost:5000/uploads/${book.image}` : null    
    }));    
      res.json(booksWithImagePaths);
  } catch (error) {
      console.error('❌ Error fetching books:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ✅ API Route to add a book
app.post('/books', async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        console.error('❌ Error adding book:', error);
        res.status(400).json({ error: error.message });
    }
});

// ✅ API Route to Admin page
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public/admin.html'));
  });  

// ✅ Start Server
app.listen(5000, async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connected successfully!');
        await sequelize.sync();
        console.log('✅ Tables synchronized!');
    } catch (error) {
        console.error('❌ Database connection failed:', error);
    }
    console.log('✅ Server running on http://localhost:5000');
});
