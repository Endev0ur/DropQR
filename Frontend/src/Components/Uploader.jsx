import React from 'react'
import { Upload } from 'lucide-react'

const Uploader = () => {
  return (
    <div className='h-[300px] bg-white'>
        <div className="w-full h-[300px] flex justify-center items-center">
        <div className="w-[500px] h-[250px] border-2 border-dashed border-gray-400 rounded-xl flex flex-col justify-center items-center text-center px-6">
          
          {/* Upload Icon */}
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 mb-4">
            <Upload size={24} className="text-gray-500" />
          </div>

          {/* Title */}
          <h3 className="font-semibold text-lg mb-1">Upload a file</h3>

          {/* Subtext */}
          <p className="text-sm text-gray-500 mb-3">
            Drag and drop a file here, or click to browse
          </p>

          {/* File input */}
          <label className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer">
            Choose File
            <input type="file" className="hidden" />
          </label>

          {/* Max file size info */}
          <p className="text-xs text-gray-400 mt-2"></p>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Uploader;