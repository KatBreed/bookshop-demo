const multer = require('multer');
const path = require('path');

// Configure storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, 'uploads');
        console.log('Upload destination:', uploadPath);
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        console.log('Incoming file original name:', file.originalname);
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// File filter (only allows images)
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed!'), false);
    }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
