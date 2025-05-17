import NavBar from './components/Navbar'
import './App.css'
import "@fontsource/jura";
import LandingBox from './components/LandingBox';

function App() {


  return (

    <div className='font-[Jura]'>
      <NavBar></NavBar>
      <LandingBox
      
        title="Featured"
        details=''
        imageSrc=''
        imageCaption=""

      >
      </LandingBox>
    </div>
  )
}

export default App
