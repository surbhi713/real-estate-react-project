import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import {property} from "../components/export";
import { MdNoteAlt } from "react-icons/md";
import {
  FaHome,
  FaSearch,
  FaNotesMedical,
  FaCameraRetro,
} from "react-icons/fa";
import { useDarkMode } from '../components/DarkModeContext';


function Properties() {
  useEffect(()=>{
    Aos.init({
      easing:'ease-in-sine',
      delay:100,
      duration:800,
      offset:200
    })
  },[])
  const {darkmode, toggleDarkMode} = useDarkMode()
  
  return (
    
    <div className={`${darkmode ? 'dark: bg-black'  : 'light bg-transparent'} `}>
      <section id='properties' className='lg:w-[90%] w-full m-auto lg:px-20  px-6  py-20
      flex flex-col justify-center items-start gap-10  '>
        <div className='flex flex-col justify-center items-start gap-4'>
          <h1 className='font-semibold text-red-900 font-xl'>Properties</h1>
          <h1 className='font-semibold font-4xl'>Explore the latest</h1>
        </div>
      </section>
      
    </div>
  )
}

export default Properties