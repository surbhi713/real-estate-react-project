import Aos from 'aos'
import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import 'aos/dist/aos.css';
import area1 from "../../assets/images/area1.jpg"
import area2 from "../../assets/images/area2.jpg"
import area3 from "../../assets/images/area3.jpg"


function PopularAreas() {
  useEffect(()=>{
      Aos.init({
        offset:200,
        easing:"ease-in-sine",
        duration:800,
        delay:100,
      })
    },[])

  const {darkmode, toggleDarkmode} = useDarkMode()

  return (
  
    <div id='popularareas' className={`${darkmode?' bg-black' : 'light bg-transparent'} `}>
      <section className={`${darkmode? 'bg-gray-800' : 'light bg-amber-100'}
      lg:w-[90%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col 
      items-center lg:px-20 px-6 py-20 gap-20}`}>

        <div id='top' className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center 
        gap-8 items-center'>
          <div>
          <h1 data-aos="zoom-in" className='text-red-500 text-xl font-semibold dark:text-white'>Popular Areas</h1>
          <h1 data-aos="zoom-in" className={`${darkmode ? 'text-white text-4xl font-semibold leading-10 mt-4' :
           'text-black text-4xl font-semibold leading-10 mt-4'}`}>
            Explore Most <br /> Popular Areas</h1>
          </div>
          <div className='grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center 
          gap-6 '>
          <div data-aos="zoom-in" data-aos-delay="400" style={{backgroundImage:`url(${area1})`}} 
          className='h-[400px] bg-cover bg-center rounded-xl' ></div>
          <div data-aos="zoom-in" data-aos-delay="400" style={{backgroundImage:`url(${area1})`}} 
          className='h-[400px] bg-cover bg-center rounded-xl' ></div>
          <div data-aos="zoom-in" data-aos-delay="400" style={{backgroundImage:`url(${area1})`}} 
          className='h-[400px] bg-cover bg-center rounded-xl' ></div>
          </div>
        </div>
        <div id='bottom ' className='w-full grid lg:grid-cols-3 grid-cols-1 lg:justify-center
        justify-start items-start gap-6'>
          <div data-aos="slide-up" data-aos-delay="200" className='flex justify-center lg:items-center gap-8 w-full'>
            <h1 className={`${darkmode ? 'text-7xl text-white font-semibold' :
              'text-7xl text-black font-semibold'}`}>5k</h1>
            <h1 className={`${darkmode ? 'text-white' : 'text-black'}`}>ACTIVE <br />LISTINGS</h1>
          </div>
          <div data-aos="slide-up" data-aos-delay="200" className='flex justify-center lg:items-center gap-8 w-full'>
            <h1 className={`${darkmode ? 'text-7xl text-white font-semibold' :
              'text-7xl text-black font-semibold'}`}>5k</h1>
            <h1 className={`${darkmode ? 'text-white' : 'text-black'}`}>ACTIVE <br />LISTINGS</h1>
          </div><div data-aos="slide-up" data-aos-delay="200" className='flex justify-center lg:items-center gap-8 w-full'>
            <h1 className={`${darkmode ? 'text-7xl text-white font-semibold' :
              'text-7xl text-black font-semibold'}`}>5k</h1>
            <h1 className={`${darkmode ? 'text-white' : 'text-black'}`}>ACTIVE <br />LISTINGS</h1>
          </div>
        </div> 
      </section>
    </div>
  )
}

export default PopularAreas