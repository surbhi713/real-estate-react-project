import React, { useEffect } from 'react'
import { DarkModeProvider } from './components/DarkModeContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Herosection from './sections/Herosection'
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  return (
    <div>
      <DarkModeProvider>
        <Header/>
        <Herosection/>
        <Footer/>
      </DarkModeProvider>

    </div>
  )
}

export default App