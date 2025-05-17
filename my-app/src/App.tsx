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
        details='Explore North African cuisine this May. Highlighting recipes from Tunisia, and Morocco including slow cooked tagines, couscous, and a healthy blend of spices.'
        imageSrc="./src/assets/tagine.jpg"
        imageCaption=""

      >
      </LandingBox>
    </div>
  )
}

export default App
