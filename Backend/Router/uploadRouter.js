const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const QRCode = require('qrcode');
const multer = require('multer');

const fileStore = {};

/* */
const storage = multer.memoryStorage();

/* */
const upload = multer({ storage });

/* POST /upload/generate */
router.post("/generate", upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      message: "File not uploaded",
      success: false,
    });
  }

  const id = uuidv4();
  fileStore[id] = {
    buffer: req.file.buffer,
    name: req.file.originalname,
    password: req.body.password || null,
  };

  const downloadUrl = `${req.protocol}://${req.get('host')}/upload/download/${id}`;
  const qrCode = await QRCode.toDataURL(downloadUrl);

  res.json({
    message: "File uploaded successfully",
    downloadUrl,
    qrCode,
    success: true,
  });
});

/* GET /upload/download/:id */

router.get('/download/:id', (req, res) => {
  const file = fileStore[req.params.id];
  if (!file) return res.status(404).send("❌ File not found or already downloaded.");

  if (file.password) {
    return res.send(`
      <html>
        <head>
          <title>Password Required</title>
        </head>
        <body style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh; font-family:sans-serif; background-color:gray;">
          <h2>🔐 This file is password protected</h2>
          <form method="POST" action="/upload/download/${req.params.id}">
            <input 
              type="text"
              name="password" 
              placeholder="Enter Password" 
              required 
              style="padding:10px; margin-top:10px; font-size:15px; border-radius:10px; outline:none; border:0;" 
            />
            <button 
              type="submit" 
              style="margin-top:10px; padding:10px 20px; font-weight:bold; font-size:15px; cursor:pointer; border-radius:10px; border:0;"
            >
            Download
            </button>
          </form>
        </body>
      </html>
    `);
  }

  res.setHeader("Content-Disposition", `attachment; filename="${file.name}"`);
  res.send(file.buffer);

  // delete fileStore[req.params.id];
});


/* POST /upload/download/:id (form submission with password) */

router.post('/download/:id', (req, res) => {
  const file = fileStore[req.params.id];
  if (!file) return res.status(404).send("❌ File not found or already downloaded.");

  const enteredPassword = req.body.password;
  if (file.password !== enteredPassword) {
    return res.send(`
      <html>
        <head>
          <title>Wrong Password</title>
        </head>
        <body style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;color:red;">
          <h2>❌ Incorrect Password</h2>
          <a href="/upload/download/${req.params.id}" style="margin-top:20px;color:blue;">Try Again</a>
        </body>
      </html>
    `);
  }

  res.setHeader("Content-Disposition", `attachment; filename="${file.name}"`);
  res.send(file.buffer);

  // delete fileStore[req.params.id];
});

module.exports = router;
