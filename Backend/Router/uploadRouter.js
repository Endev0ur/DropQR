const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const QRCode = require('qrcode'); 

const fileStore = {};

router.post("/generate" , async (req , res)=>{

  if(!req.file){
    res.status(401).json({
      message:"File not uploaded",
      success : false,
    })
  }


  // Step 1: Save file in memory
  const id = uuidv4();
  fileStore[id] = {
    buffer: req.file.buffer,
    name: req.file.originalname
  };

  // Step 2: Create a download URL
  const downloadUrl = `${req.protocol}://${req.get('host')}/upload/download/${id}`;

  // Step 3: Generate QR code from download URL
  const qrCode = await QRCode.toDataURL(downloadUrl); // base64 PNG image

  // Step 4: Return response
  res.json({
    message: "File uploaded successfully",
    downloadUrl,
    qrCode, // base64 image that you can render directly in frontend
    success:true,
  });
})

router.get('/download/:id', (req, res) => {
  const file = fileStore[req.params.id];
  if (!file) return res.status(404).send("File not found or already downloaded");

  res.setHeader("Content-Disposition", `attachment; filename=\"${file.name}\"`);
  res.send(file.buffer);

  delete fileStore[req.params.id]; // auto-delete after download
});

module.exports = router; 