import React, { useEffect } from 'react'
import { DarkModeProvider } from './components/DarkModeContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Herosection from './sections/Herosection'
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './sections/About'
import PopularAreas from './sections/PopularAreas'
import Properties from './sections/Properties'
import Services from './sections/Services'
import Client from './sections/Client'
import Contact from './sections/Contact'


function App() {
  return (
    <div>
      <DarkModeProvider>
        <Header/>
        <Herosection/>
        <About/>
        <PopularAreas/>
        <Properties/>
        <Services/>
        <Client/>
        <Contact/>
        <Footer/>
      </DarkModeProvider>

    </div>
  )
}

export default App