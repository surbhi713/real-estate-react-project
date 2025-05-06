import React, { use, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useDarkMode } from '../components/DarkModeContext';


function Contact() {
  useEffect(()=>{
    AOS.init({
      delay:100,
      duration:800,
      offset:200,
      easing:'ease-in-sine'
    })
  },[])

  const{darkmode,toggleDarkMode} =useDarkMode();
  return (
    <div className={`${darkmode? 'dark:bg-black' : 'light bg-transparent'}`}>
      <section id='main_div' className={`${darkmode?'bg-gray-800 text-red-900' : 'light bg-amber-100'}
      'lg:w-[50%] w-full h-fit m-auto flex  justify-center items-start
      py-20 px-6 lg:px-36 gap-10 lg:grid-cols-2 grid-cols-1'`}>
        <div data-aos="zoom-in" id="contact" className='flex flex-col bg-white w-full items-start rounded-xl
        justify-center p-10 gap-4'>
          <h1 className='text-3xl  font-semibold dark:text-white '>Send us a message today</h1>
          <input type="text" name="" placeholder='Enter your full name here' id="" className='
          w-full rounded-xl px-6 py-3 border-2 border-gray-300'/>
          <input type="text" name="" id="" placeholder='Enter your valid email-id' className='
          w-full rounded-xl px-6 py-3 border-2 border-gray-300'/>
          <input type="text" name="" id="" placeholder='Enter your valid mobile number ' className='
          w-full rounded-xl px-6 py-3 border-2 border-gray-300' />
          <textarea name="" id="" rows={5} cols={3} placeholder='Enter your message here' className='
          w-full rounded-xl px-6 py-3 border-2 border-gray-300'></textarea>
          <button className='bg-red-600 rounded-xl px-8  cursor-pointer py-3 text-white font-semibold
           justify-center w-full text-md dark:hover-bg-red-700 hover:bg-black'>Send Email</button>
        </div>

        <div id='reach-us' className='flex flex-col justify-center items-start gap-8  lg:p-20 p-6'>
            <h1 data-aos="zoom-in" data-aos-delay="200"
             className='text-2xl font-semibold text-red-900'>REACH US</h1>
            <h1 data-aos="zoom-in" data-aos-delay="400" 
            className={`${darkmode? 'text-4xl text-white font-semibold leading-10' : 
              'light text-black text-4xl font-semibold leading-10'}`}
            >Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Fugiat, eos!</h1>
            <p data-aos="zoom-in" data-aos-delay="600"   className={`${darkmode? 
            'text-justify text-xl text-amber-500 flex flex-wrap' : 
            'text-justify text-xltext-gray-800 flex flex-wrap'}`}
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ducimus, excepturi qui beatae nobis impedit perferendis obcaecati doloremque ullam sequi dolorum assumenda quas. Iusto saepe minima itaque perferendis animi error!</p>
            <button data-aos="zoom-in" data-aos-delay="800" className='bg-red-600 text-xl rounded-xl px-8  cursor-pointer py-3 text-white font-semibold
           justify-center w-full text-md dark:hover-bg-red-700 hover:bg-black'>Reach Us</button>
        </div>
      </section>
    </div>
  )}



export default Contact