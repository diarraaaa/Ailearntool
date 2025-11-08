import { useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Home from './homepage/Home'
import SignUp from './auth/signup'
import SignIn from './auth/signin'
import Profile from './profile/profile'
import Try from './otherpages/try'

function App() {
  const [theme, setTheme] = useState('light')
  const [banner, setBanner] = useState('banner.png')

  useEffect(()=>{
    document.documentElement.setAttribute("data-theme",theme);
  },[theme])

  function changeTheme(){
    setTheme(theme==="light"?"dark":"light");
    setBanner(banner==="banner.png"?"bannerblack.png":"banner.png")
  }

  return (
    <Router>
      <Navbar theme={theme} changetheme={changeTheme}/>
      <Routes>
        <Route path="/" element={<Home banner={banner}/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/try" element={<Try/>}/>
      </Routes>
    </Router>
  )
}

export default App
