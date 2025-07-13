import React from 'react'

const Footer = ({mode , setMode}) => {
  return ( 
    <div className={` w-full flex justify-center items-center pt-10 pb-10 flex-col ${mode ? "bg-gray-800":"bg-white"} transition-colors duration-600`}>
      <p className={`text-xl text-center ${mode?"text-white" : "text-black"}`}>© 2025 DropQR : QR File Share . All rights reserved.</p>
      <p className={`text-lg text-center ${mode?"text-white" : "text-gray-500"}`}>Developed by <span className={`font-bold ${mode?"text-violet-600" : "text-black"}`}>Shubham Rawat</span></p>
    </div>
  )
}

export default Footer;