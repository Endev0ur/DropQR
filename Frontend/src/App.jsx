
import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import FeatureList from './Components/FeatureList'
import Uploader from "./Components/Uploader"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureList></FeatureList>
      <Uploader></Uploader>
    </>
  )
}

export default App
