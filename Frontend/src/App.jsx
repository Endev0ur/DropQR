
import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import FeatureList from './Components/FeatureList'
import Uploader from "./Components/Uploader"
import { useState } from 'react'

function App() {

  const [mode , setMode] = useState(false);

  return (
    <>
      <Navbar mode={mode} setMode={setMode}/>
      <Hero mode={mode} setMode={setMode} />
      <FeatureList mode={mode} setMode={setMode}></FeatureList>
      <Uploader mode={mode} setMode={setMode}></Uploader>
    </>
  )
}

export default App
