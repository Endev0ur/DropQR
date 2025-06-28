import React from 'react'

const Hero = () => {
  return (
    <div className='h-[250px] w-full flex justify-center items-center bg-white pt-10 flex-col'>
      <h1 className='text-5xl font-bold text-violet-500'>Share Files Instantly</h1>
      <br />
      <p className='text-xl font-bold'>Upload a file and generate a <span className='text-blue-500'>QR Code</span> for instant sharing. </p>
      <p className='text-xl font-bold'>Completely private and secure.</p>

      
    </div>
  )
}

export default Hero;