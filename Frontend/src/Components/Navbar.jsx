import React from 'react'

const Navbar = () => {

  const handleGithubLink = (e) => {
    window.open("https://github.com/Endev0ur/DropQR")
  }

  return (
    <div className='h-20 w-full bg-black/10 backdrop-xl pl-5 pr-5 xl:pl-30 xl:pr-30 flex justify-between items-center '>
      <h1 className='text-3xl font-bold'>DropQR</h1>
      <button className='border pl-10 pr-10 pt-2 pb-2 rounded-lg font-bold bg-black text-white cursor-pointer' onClick={handleGithubLink}>
        Github
      </button>
    </div>
  )
}

export default Navbar