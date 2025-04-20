import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import heroimg from '../../assets/images/hero1.webp'
import Aos from 'aos';

function Herosection() {
  useEffect(()=>{
    Aos.init({
      offset:200,
      delay:100,
      easing:'ease-in-sine',
      duration:800,
    })
  },[])
  const {darkmode, toggleDarkMode} =useDarkMode()
  return (
    <div>
       <div className={`${darkmode ? 'dark-bg-color' : 'light-bg-color'}`}>
       <section id='hero' className='w-[95%] h-[600px] m-auto bg-cover bg-center 
       rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20'
        style={{backgroundImage:`url(${heroimg})`}} ></section>
       </div>
    </div>
  )
}

export default Herosection