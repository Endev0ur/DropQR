import React , {useState} from 'react'
import { Upload } from 'lucide-react'
import axios from 'axios';
import Footer from './Footer'

const Uploader = () => {

  const [file , setFile] = useState(null);
  const [isThere , setIsThere] = useState(false);
  const [qrCode , setQrCode] = useState("");
  const [isQR , setIsQR] = useState(false);
  const [withPassword , setWithPassword] = useState(false);
  const [password , setPassword] = useState(null);

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

    if(withPassword && password){
      formData.append("password" , password);
    }

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

  const handleWithPassword = (e) => {
    setWithPassword((prev)=>!prev);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }



  return (
    <div className='h-[300px] bg-white'>
      {!isQR ? (
        <> 
        <div className="w-full mt-10 flex justify-center items-center flex-col">
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

          <div className='mt-5'>
            <div className='flex justify-center items-center'>
              <p className='font-bold text-gray-600'>Encrpt with Password : </p>
              <div className={`ml-3 h-7 w-17 border flex items-center cursor-pointer rounded-2xl shadow-md shadow-black transform transition-transform duration-400 ease-in-out ${withPassword ? "bg-white" : "bg-black"}`} onClick={handleWithPassword}>
                <div  className={`h-6 w-8 border text-xs flex justify-center items-center rounded-full shadow-md transform transition-transform duration-300 ease-in-out
                   ${withPassword ? 'translate-x-8 bg-black' : 'translate-x-0.5 bg-white'}`}>
                  {withPassword ? (<p className='font-bold text-white'>ON</p>):(<p className='font-bold text-black'>OFF</p>)}
                </div>
              </div>
            </div>
            {withPassword && <div>
              <input 
                type="text" 
                className=' mt-3 w-[250px] h-[40px] pl-5 pr-5 text-lg rounded-lg outline-none bg-gray-300'
                placeholder='Enter Your Password' 
                name='password'
                value={password}
                onChange={handlePassword}/>
            </div>}
          </div>

      </div>
      {isThere && <div className=' flex text-center item-center justify-center'>
        <button className='pt-2 pb-2 pl-10 pr-10 rounded-md bg-lime-500 font-bold text-white cursor-pointer mt-5' onClick={handleGenerateQR}>Generate</button>  
      </div>}
      </>) : (
        <>
          <div className="w-full h-[300px] bg-white mt-10 border-t-1 border-t-gray-400 flex justify-center items-center flex-col">
            <img src={qrCode} alt="QR Code" />
            <button className='text-white cursor-pointer pt-2 pb-2 pl-10 pr-10 rounded-lg bg-red-500 font-bold' onClick={handleGoBack}>Go Back</button>
          </div>
        </>
      )}

      <hr className='mt-5 text-gray-500' />

      <Footer></Footer>
      
    </div>
  )
}

export default Uploader;