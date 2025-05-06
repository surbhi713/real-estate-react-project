import React, { useEffect } from 'react'
import {service} from '../components/export.js'
import AOS from "aos";
import 'aos/dist/aos.css';
import { useDarkMode } from '../components/DarkModeContext';
// import {MdNoteAlt,FaCameraRetro,FaSearch,FaNotesMedical,FaHome,GoLaw,} from "react-icons";



function Services() {
  useEffect(()=>{
    AOS.init({
      delay:100,
      duration:800,
      easing:'ease-in-sine',
      offset:200,
    })
  },[])

  const {darkmode,toggleDarkMode} = useDarkMode();
  
  return (
    <div className={`${darkmode? 'bg-black' : 'light bg-transparent rounded-xl'} pb-200`}>
      <section id="services" className={`${darkmode? 'dark:bg-gray-800' : 'light bg-white'}
      lg:px-20 px-6 py-20 gap-10 flex flex-col justify-center items-start lg:w-[95%] w-full 
      m-auto rounded-xl h-fit`}>
        <div className='flex flex-col justify-center items-start gap-4'>
          <h1 data-aos="zoom-in" className='text-xl text-red-500 font-semibold dark:text-white'>
            OUR SERVICES</h1>
          <h1 data-aos="zoom-in" className={`${darkmode ? 'leading-7 font-semibold text-white text-4xl' :
            'leading-7 font-semibold text-4xl text-black'}`}>
          Top Real Estate <br /><br /> Services Available</h1>
        </div>
    {/* service-box */}

      <div id='service-box' className='grid lg:grid-cols-3 grid-cols-1 justify-center
      items-center gap-8 lg:m-auto m-auto'>
        {
          service.map((item,index)=>(
            <div data-aos='zoom-in' key={index} className='justify-center items-center flex flex-col bg-white
            dark:bg-black h-[350px]  px-8 py-16 gap-4 rounded-xl border-b-[5px]
            border-red-600 hover:bg-red-300 cursor-pointer'>
              <div className='p-6 rounded-full bg-red-200'>
                <item.icon className='text-red-600 size-10 transition-transform duration-300 transform hover:scale-110'/>
              </div>
              <h1 className='text-black text-3xl font-semibold dark:text-white'>{item.title}</h1>
              <p className='text-lg text-slate-700 dark:text-white'>{item.desc}</p>
              <button className='p-0 border-b-2 border-red-600 font-semibold 
              dark:text-white'>Read More</button>
            </div>
          ))
        }
      </div>

      </section>
    </div>
  )
}

export default Services




//  className='leading-7 font-semibold text-4xl dark:text-white'