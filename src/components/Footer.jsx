import React from 'react'
import { useDarkMode } from './DarkModeContext'
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaBuilding,FaFax,FaMobile,FaMoon,FaSun,
  FaArrowUp} from 'react-icons/fa'
import {Link} from'react-scroll'
import {IoMdMail} from 'react-icons/io'
import prop7 from '../../assets/images/prop7.jpg'
import prop8 from '../../assets/images/prop8.jpg'



function Footer() {

  const{darkmode,toggleDarkMode} =useDarkMode();


  return (
    <>
    <footer className={`${darkmode? 'dark:bg-black' : 'light bg-gray-800'}  w-full
    py-20 lg:px-20 px-10 mt-10 grid lg:grid-cols-3  grid-cols-1 lg:gap-20 gap-10 justify-center items-start `}>
      <div className='flex flex-col justify-center items-start gap-4'>
        <h1 className='text-white font-semibold text-2xl '>About Us</h1>
        <p className='text-slate-400 text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque voluptatibus architecto repudiandae voluptates sit inventore, molestiae vitae distinctio tempora eos nihil debitis nobis possimus sunt modi neque quae optio ut.</p>
        <div id='social-icons' className='flex justify-cenetr items-start gap-4 mt-4'>
          <div className='p-3 bg-white rounded-xl cursor-pointer transform  hover:bg-red-600
          transition-transform duration-300 hover:scale-110'>
            <FaFacebook className='size-5'/>
          </div>

          <div className='p-3 bg-white rounded-xl cursor-pointer transform  hover:bg-red-600
          transition-transform duration-300 hover:scale-110'>
            <FaInstagram className='size-5'/>
          </div>
          
          <div className='p-3 bg-white rounded-xl cursor-pointer transform  hover:bg-red-600
          transition-transform duration-300 hover:scale-110'>
            <FaYoutube className='size-5'/>
          </div>
          
          <div className='p-3 bg-white rounded-xl cursor-pointer transform  hover:bg-red-600
          transition-transform duration-300 hover:scale-110'>
            <FaTwitter className='size-5'/>
          </div>
  
        </div>

        <h1 className='text-white mt-10 text-lg'>Copyrights Real Estate, All Rights Reserverd</h1>
      </div>

      <div className='flex flex-col justify-center items-start gap-6 '>
        <h1 className='text-white text-2xl font-semibold'>
          Contact Us
        </h1>

        <div className='flex gap-5 '>
          <FaFax className='size-5 text-white'/>
          <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='flex gap-5 '>
          <FaMobile className='size-5 text-white'/>
        <p className='text-white'>+91 9678056473</p>
        </div>

        <div className='flex gap-5' >
          <FaBuilding className='size-5 text-white'/>
          <p className='text-white'>Near Yes bank, Hauz khas, Delhi</p>
        </div>

        <div className='flex gap-5' >
          <IoMdMail className='size-5 text-white'/>
          <p className='text-white'>surbhi8004@gmail.com</p>
        </div>

      </div>

      <div id='latest-properties' className='flex flex-col justify-center items-start gap-6'>
        <h1 className='text-white font-semibold text-2xl gap-6'>Latest properties</h1>
        <div className='flex flex-col justify-center items-center gap-4'>
          <img src={prop7} alt="" className='rounded-lg w-[120px] transform hover:scale-110
          cursor-pointer transition-transform duration-300'/>
          <div>
          <h1 className='text-white font-semibold'>Villa With Amazing View</h1>
          <p className='text-white font-semibold'>$289.79</p>
          </div>
         </div>

         <div>
         <img src={prop8} alt="" className='rounded-lg w-[120px] transform hover:scale-110
          cursor-pointer transition-transform duration-300'/>
         <div>
         <h1 className='text-white font-semibold'>Smart View From Beach</h1>
         <p className='text-white font-semibold'>$235.90</p>
        </div>
      </div>
     </div>

    </footer>

    {/* slide to top */}

    <div id="icon-box " className='bg-red-600 rounded-full p-4 hover:bg-black cursor-pointer fixed
     hover:text-white lg:bottom-12 bottom-6 right-6'>
      
      <Link to='hero' spy={true} offset={-100} smooth={true}>
        <FaArrowUp className='size-6 text-white'/>
      </Link>
      </div>

      {/* darkmode toggle */}
      <div>
        <button onClick={toggleDarkMode} className='p-4 flex items-center rounded-full 
        bg-orange-500 fixed lg:top-52 right-6 top-6'>
          {darkmode? <FaMoon className='text-black size-5'/>:
          <FaSun className='size-5 text-black'/>}
        </button>

      </div>
    </>
      )
}

export default Footer