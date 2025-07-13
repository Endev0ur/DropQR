import React from 'react'

const Hero = ({mode , setMode}) => {
  return (
    <div className={` w-full flex justify-center items-center ${mode?"bg-gray-800":"bg-white"} pt-10 pb-20 flex-col transition-colors duration-600`}>
      <h1 className={`text-5xl text-center font-bold text-violet-500`}>Share Files Instantly</h1>
      <br />
      <p className={`text-xl font-bold text-center transition-colors duration-600 ${mode?"text-white":"text-black"}`}>Upload a file and generate a <span className='text-blue-500'>QR Code</span> for instant sharing. </p>
      <p className={`text-xl font-bold text-center transition-colors duration-600 ${mode?"text-white":"text-black"}`}>Completely private and secure.</p>

      
    </div>
  )
}

export default Hero;