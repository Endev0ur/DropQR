import React from 'react'
import { Upload, Smartphone, Download , Lock } from 'lucide-react';


const FeatureList = ({mode , setMode}) => {
  return (
    <div className={`w-[100%] flex justify-around items-center ${mode?"bg-gray-800":"bg-white"} transition-colors duration-600 pb-10`}>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 '>
        <div className='w-full max-w-[300px] h-[220px] md:w-[260px] lg:w-[300px] shadow-sm shadow-gray-500 p-6 sm:p-8 md:p-10 flex justify-center items-center flex-col text-center rounded-xl bg-white mx-auto'>
          <Upload size={32} className="text-blue-500 mb-2" />
          <h3 className="font-semibold mb-3 mt-3">1. Upload File</h3>
          
          <p className="text-sm text-gray-500">Drag and drop or click to upload<br />any file up to 100MB</p>
        </div>

        <div className='w-full max-w-[300px] h-[220px] md:w-[260px] lg:w-[300px] shadow-sm shadow-gray-500 p-6 sm:p-8 md:p-10 flex justify-center items-center flex-col text-center rounded-xl bg-white mx-auto'>
          <Smartphone size={32} className="text-green-500 mb-2" />
          <h3 className="font-semibold mb-3 mt-3">2. Scan QR Code</h3>
          
          <p className="text-sm text-gray-500">Scan the QR Code <br />to Download the File</p>
        </div>

        <div className='w-full max-w-[300px] h-[220px] md:w-[260px] lg:w-[300px] shadow-sm shadow-gray-500 p-6 sm:p-8 md:p-10 flex justify-center items-center flex-col text-center rounded-xl bg-white mx-auto'>
          <Lock size={32} className="text-red-500 mb-2" />
          <h3 className="font-semibold mb-3 mt-3">3. Encrypt the file</h3>
          
          <p className="text-sm text-gray-500">Protect you file with password<br /><span className='text-black font-bold'>( *optional )</span></p>
        </div>

        <div className='w-full max-w-[300px] h-[220px] md:w-[260px] lg:w-[300px] shadow-sm shadow-gray-500 p-6 sm:p-8 md:p-10 flex justify-center items-center flex-col text-center rounded-xl bg-white mx-auto'>
          <Download size={32} className="text-violet-500 mb-2" />
          <h3 className="font-semibold mb-3 mt-3">4. Download</h3>
          
          <p className="text-sm text-gray-500">Files download directly from your device</p>
        </div>
      </div>
    </div>
  )
}

export default FeatureList;