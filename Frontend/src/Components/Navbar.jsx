import React from 'react'
import { Lightbulb } from 'lucide-react';

const Navbar = ({mode , setMode}) => {

  const handleGithubLink = (e) => {
    window.open("https://github.com/Endev0ur/DropQR")
  }

  const handleChangeMode = (e) => {
    setMode((prev)=>!prev);
  }

  return (
    <div className='h-20 w-full bg-gradient-to-l from-blue-500 via-red-500 to-violet-500 backdrop-xl pl-5 pr-5 xl:pl-30 xl:pr-30 flex justify-between items-center sticky'>
      <h1 className='text-3xl font-bold text-white'>DropQR</h1>
      <div className='flex justify-center items-center'>
        <button className={`pl-5 pr-5 xl:pl-10 xl:pr-10 pt-2 pb-2 rounded-xl transition-colors duration-600 font-bold border-2  ${mode?"border-white":"border-black"} text-white cursor-pointer`} onClick={handleGithubLink}>
          Github
        </button>
        <button className={` pt-2 pb-2 pr-4 pl-4 rounded-xl ml-2 lg:ml-4 ${mode?"bg-white":"bg-black"} cursor-pointer`}onClick={handleChangeMode}>
          <Lightbulb size={20}  color={`${mode?"black":"white"}`}/>
        </button>
      </div>
      
    </div>
  )
}

export default Navbar