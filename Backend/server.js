const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const multer = require('multer');

const uploadRouter = require("./Router/uploadRouter");

const PORT = process.env.PORT || 3000;

/* Creating a in-memory-storage engine */
const storage = multer.memoryStorage();

/* Initialize the multer */
const upload = multer({storage:storage});

app.use("/upload" , upload.single('file') , uploadRouter)

app.get("/" , (req , res)=>{
  res.send("Server is Running");
})
 
app.listen(PORT , ()=>{
  console.log(`Server is Running fine on port ${PORT}`)
})


