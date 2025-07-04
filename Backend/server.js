const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors");



const uploadRouter = require("./Router/uploadRouter");

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: `${process.env.VITE_FRONTEND_URL}`,
  credentials: true
}));
app.use("/upload" , uploadRouter)

app.get("/" , (req , res)=>{
  res.send("Server is Running");
})
 
app.listen(PORT , ()=>{
  console.log(`Server is Running fine on port ${PORT}`)
})


