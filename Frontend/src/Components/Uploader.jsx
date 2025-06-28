import React , {useState} from 'react'
import { Upload } from 'lucide-react'
import axios from 'axios';

const Uploader = () => {

  const [file , setFile] = useState(null);
  const [isThere , setIsThere] = useState(false);
  const [qrCode , setQrCode] = useState("");
  const [isQR , setIsQR] = useState(false);

  const handleFileChange = (e) => {
    e.preventDefault();

    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setIsThere(true);

    console.log(selectedFile);
  }

  const handleGenerateQR = async (e) => {

    const formData = new FormData();
    formData.append("file" , file);

    console.log("Formdata is : " , formData);

    let url = `${import.meta.env.VITE_BACKEND_URL}/upload/generate`;
    const response = await axios.post(url , formData , {
      headers:{
        'Content-Type' : 'multipart/form-data'
      }
    });

    console.log(response);
    const result = response.data;
    console.log(result);
    setQrCode(result.qrCode)
    setIsQR(true);


  }

  const handleGoBack = (e) => {
    setIsQR(false);
  }



  return (
    <div className='h-[300px] bg-white'>
      {!isQR ? (
        <> 
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
            <input type="file" className="hidden" onChange={handleFileChange}/>
          </label>

          {/* Max file size info */}
          {isThere && <p className="text-sm font-bold text-black mt-2">{file.name}</p>}
        </div>
      </div>
      {isThere && <div className=' flex text-center item-center justify-center'>
        <button className='pt-2 pb-2 pl-10 pr-10 rounded-md bg-lime-500 font-bold text-white cursor-pointer' onClick={handleGenerateQR}>Generate</button>  
      </div>}
      </>) : (
        <>
          <div className="w-full h-[300px] bg-white border-t-1 border-t-gray-400 flex justify-center items-center flex-col">
            <img src={qrCode} alt="QR Code" />
            <button className='text-white cursor-pointer pt-2 pb-2 pl-10 pr-10 rounded-lg bg-red-500 font-bold' onClick={handleGoBack}>Go Back</button>
          </div>
        </>
      )}
      
    </div>
  )
}

export default Uploader;