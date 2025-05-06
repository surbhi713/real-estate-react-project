import React, { useEffect } from 'react'
import { useDarkMode } from '../components/DarkModeContext'
import heroimg from '../../assets/images/hero1.webp'
import Aos from 'aos';
import 'aos/dist/aos.css';


function Herosection() {
  useEffect(()=>{
    Aos.init({
      offset:200,
      delay:100,
      easing:'ease-in-sine',
      duration:800,
    })
  },[])
  const {darkmode, toggleDarkMode} = useDarkMode();
  return (
    <div className={`${darkmode ? 'bg-black' : 'light bg-transparent'}`}>
      {/* heroimg section */}

       <div className={`${darkmode ? ' bg-black' : 'light bg-transparent'}`}>
       <section id='hero' className='w-[95%] h-[600px] m-auto bg-cover bg-center 
       rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20'
        style={{backgroundImage:`url(${heroimg})`}} >
        <h1 data-aos="zoom-in" className='text-6xl text-white font-semibold lg:pr[500px]
        pr-0 lg:leading[70px] leading-[60px]'>Find Your Next Home In Las Vegas</h1>
        <p data-aos="zoom-in" className='text-xl text-white lg:pr-[500px] pr-0 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat autem magni neque nam, tempore commodi aperiam exercitationem quisquam
        ipsum? Quasi eveniet fugiat deleniti quibusdam consectetur eum. Minima nam eum autem!</p>
        </section>
       </div>

        {/* form starts here  */}
        <div className={`${darkmode ? 'bg-black' : 'bg-transparent'}  z-10 `}>
          <div data-aos="zoom-in" id="form" className={`${darkmode?'bg-gray-800 ' :
           'light bg-white'} grid lg:grid-cols-4 grid-cols-1 mt-14
          p-8 m-auto lg:w-[70%] w-full justify-center items-center gap-6 rounded-xl 
          `}>
            
           {/* grid lg:grid-cols-4 grid-cols-1  */}
          
         <div className='w-full'>
          
            <h1 className={`${darkmode ? 'text-white font-semibold' : 'text-black font-semibold'}`}>LOCATION</h1>
            <input type="text" placeholder='Enter an address, state, city or pincode' className='text-black bg-white p-2 
            w-full mt-2 border-b-[1px] rounded-xl border-[#c9c7c1]' />
         </div>

         <div className='w-full'>
            <h1 className={`${darkmode ? 'text-white font-semibold' : 'text-black font-semibold'}`}>TYPE</h1>
            <select name="selectOption" id="selectOption" className='bg-white p-2 border-b-[1px] w-full mt-2
            border-[#c9c7c1] text-gray-500 text-md rounded-xl' defaultValue="">
              <option value="" disabled selected>Select Property</option>
              <option value="option1">Rentals1</option>
              <option value="option2">Rentals2</option>
              <option value="option3">Rentals3</option>
              </select>
         </div>

        <div className='w-full'>
            <h1 className={`${darkmode ? 'text-white font-semibold' : 'text-black font-semibold'}`}>Category</h1>
            <select name="categoryoption" id="categoryoption" className='bg-white p-2 border-b-[1px] w-full
            mt-2 border-[#c9c7c1] text-gray-500 text-md rounded-xl' defaultValue="">
              <option value="" disabled selected>Select Category</option>
              <option value="option1">Apartments</option>
              <option value="option2">Duples</option>
              <option value="option3">Twin Rooms</option>
              <option value="option4">Condos</option>
              <option value="option5">Delux</option>

            </select>
        </div>

        <div className='w-full'>
          <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black
          hover:text-white text-lg p-4 rounded-xl w-full text-white font-semibold cursor-pointer transform
          hover:scale-110 transition-transform duration-300'>
            Submit
          </button>
        </div>
        </div>
       </div>

    </div>
  )
}

export default Herosection