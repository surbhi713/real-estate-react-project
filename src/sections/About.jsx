import Aos from 'aos'
import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import about from "../../assets/images/about.jpg";


function About() {
  useEffect(()=>{
    Aos.init({
      offset:200,
      easing:"ease-in-sine",
      duration:800,
      delay:100,
    })
  },[])
  const {darkmode, toggleDarkMode} = useDarkMode()

  return (
    <section id='about' className={`${darkmode? 'dark: bg-black' : 'light bg-transparent'} w-full m-auto
    justify-center items-center gap-10 lg:40px px-10 py-20 grid lg:grid-cols-2 grid-cols-1`}>      
    <div>
      <img data-aos="zoom-in"src={about} alt="About img" className='
      rounded-2xl lg:w-[500px] lg:h[600px]'/>
    </div>

    <div className='flex flex-col justify-center items-start gap-8' >
      <h1 data-aos="zoom-in" className='text-pink-900 font font-serif text-xl font-semibold
       dark:text-white'>WHO WE ARE</h1>
      <h1 data-aos="zoom=in" data-aos-delay="200" className='text-4xl font-semibold
       text-black leading-10 dark:text-white
      '> Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
      <p data-aos="zoom=in" data-aos-delay="200" className='text-xl font-semibold
       text-gray-800 leading-10 dark:text-white text-justify' >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate 
        aliquid consequatur quae, est, ea quasi nulla eos fugiat illum tempore
        necessitatibus! Ipsam beatae corrupti quaerat quisquam velit dicta, eum nihil.</p>
        <button className='bg-red-600 dark:bg-red-700 hover:text-white hover:bg-black dark:hover:bg-white
      dark:hover:text-black p-4 text-lg rounded-xl text-white cursor-pointer
      transfrom hover:scale-110 transition-transform duration-300font-semibold'>READ MORE</button>
     </div>
     
       </section >
  
     
 
  )
}

export default About