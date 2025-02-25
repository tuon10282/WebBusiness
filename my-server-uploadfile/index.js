const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3001;

// Cấu hình Express để phục vụ file tĩnh từ thư mục "public"
app.use(express.static(path.join(__dirname, 'public')));

// Đảm bảo thư mục upload tồn tại
const uploadDir = path.join(__dirname, 'upload');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Cấu hình multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); // Lưu vào thư mục upload
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Giữ nguyên tên file
    }
});

const upload = multer({ storage: storage });

const cors = require("cors")
app.use(cors())
app.get("/image/:id", cors(), (req, res) => {
    const id = req.params.id;
    console.log("Serving image:", id);
    res.sendFile(path.join(__dirname, "upload", id));
});



// Route upload file
app.post('/upload', upload.single('image'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        res.json({ message: 'File uploaded successfully', file: req.file });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
