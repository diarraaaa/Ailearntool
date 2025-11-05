import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import {Section1,Section2 }from './Sections'

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
    <>
      <Navbar changetheme={changeTheme}/>
      <Section1 banner={banner}/>
      <Section2/>
    </>
  )
}

export default App
