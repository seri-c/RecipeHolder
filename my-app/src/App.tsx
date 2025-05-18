import NavBar from './components/Navbar'
import './App.css'
import "@fontsource/jura";
import LandingBox from './components/LandingBox';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { setProfile, selectProfile } from './app/features/login/authenticate';

function App() {

  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();


  const handleLogin = () => {

    dispatch(setProfile({
      username: "cseri",
      name: 'Christelle',
      email: 'christelleseri9@gmail.com',
      avatar: '',
    }));

  };

  return (

    <div className='font-[Jura]'>
      <NavBar></NavBar>
      <LandingBox

        title="Featured"
        details='Explore North African cuisine this May. Highlighting recipes from Tunisia, and Morocco including slow cooked tagines, couscous, and a healthy blend of spices.'
        imageSrc="./src/assets/tagine.jpg"
        imageCaption="Chickpea Tagine"

      >
      </LandingBox>
      <button onClick={handleLogin}>Login</button>
      <h2>{profile.username}</h2>
    </div>
  )
}

export default App
