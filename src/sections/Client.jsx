import React, { useEffect } from 'react'
import {client} from '../components/export.js'
import AOS from "aos";
import 'aos/dist/aos.css';
import {FaStar} from "react-icons/fa";
import { useDarkMode } from '../components/DarkModeContext';
import Aos from 'aos';

function Client() {
  useEffect(()=>{
    AOS.init({
      delay:100,
      duration:800,
      offset:200,
      easing:"ease-in-sine"
    })
  },[])

  const {darkmode, toggleDarkMode} = useDarkMode();
  return (
    <div className={`${darkmode ? 'bg-black' : 'light bg-transparent'}`}>
      <section id='testimonial' className='lg:w-[95%]
    w-full rounded-xl h-fit m-auto items-start justify-center flex flex-col bg-center bg-cover
    lg:px-20 px-6 py-20 gap-20 '>
        <div className='flex flex-col justify-center items-start gap-4'>
        <h1 data-aos="zoom-in" className={`${darkmode? 'text-white text-xl font-semibold' 
          :'text-xl text-red-900 font-semibold'}`}>OUR CLIENTS</h1>
        <h1 data-aos="zoom-in" className={`${darkmode ? 'text-4xl font-semibold text-white'
          : 'text-4xl font-semibold text-black dark:text-white'
        }`}>What Our Clients Says <br /> About Us</h1>
        </div>

        <div id='client-box' className='grid lg:grid-cols-3 grid-cols-1
        justify-center items-center gap-8 w-full'>
          {
            client.map((items,index)=>(
              <div data-aos="zoom-in" data-aos-delay="200" key={index} className={`${darkmode? 'bg-black ' : 
                'bg-white'}
                rounded-xl  justify-center
               items-start gap-6 cursor-pointer flex flex-col p-12 hover:bg-zinc-900
               `}>
                <div className='flex justify-start items-center w-full gap-4 '>
                <img src={items.image} alt="" className='w-[50%] transform hover:scale-110
                transition-transform duration-300'/>
                <div className='justify-center items-start gap-1 flex flex-col '>
                  <h1 className={`${darkmode ? 'text-white'  : 'text-black'} text-xl font-semibold`} >
                    {items.name}</h1>
                  <h1 className={`${darkmode ? 'text-white' : 'text-slate-600'}`}>{items.text}</h1>
                </div>
                </div>

              <p className={`${darkmode ? 'text-white' : 'text-slate-600'} text-md text-justify`}>
                {items.feedback}</p>
                <div className='justify-start items-start flex gap-2 w-full'>
                    <FaStar className='size-4 text-yellow-400'/>
                    <FaStar className='size-4 text-yellow-400'/>
                    <FaStar className='size-4 text-yellow-400'/>
                    <FaStar className='size-4 text-yellow-400'/>
                    <FaStar className='size-4 text-yellow-400'/>

                </div>
               </div>
            ))
          }

        </div>

      </section>
      


    </div>
  )
}

export default Client