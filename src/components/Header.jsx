import React, { useState } from 'react'
import { Link} from "react-scroll"
import {FaXmark,FaBars} from "react-icons/fa6";
import { useDarkMode } from './DarkModeContext';
import logo from '../../assets/images/logo.png'
import {FaPhoneAlt,FaUserCircle } from "react-icons/fa";


function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false); //false is initial state. 
  //“I want to keep track of whether the menu is open.
  // It starts off as closed (false).
  // I can use setIsMenuOpen(true) to open it, or setIsMenuOpen(false) to close it.”

  const {darkmode,toggleDarkMode} =useDarkMode();

  const togglemenu =()=>{
    setIsMenuOpen(!isMenuOpen)        //Toggle menu open/close
  }

  const closemenu =()=>{
    setIsMenuOpen(false)              //Force menu to close
  }


  const navItmes =[
    {
      link:'Home' , path:'home'
    },
    {
      link:'About' , path:'about'
    },
    {
      link:'Contact' , path:'contact'
    },
    {
      link:'Services' , path:'services'
    },
    {
      link:'Popular Areas' , path:'popularareas'
    },
  ]
  return (
   <nav  className={`${darkmode ? 'bg-black' : 'light bg-[#f3f3f3]'} flex justify-between items-center
   gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30`}>

      <div id='logo'>
      <img src={logo} alt="company logo"  className={`${darkmode ? 'w-[120px] invert lg:w-[150px]' : 'w-[120px] lg:w-[150px]'}`}/>
      </div>
        {/* what new we leant? link to and path */}

    <ul className='lg:flex justify-center items-center gap-8 hidden'>
      {
        navItmes.map(({link,path})=>(
          <Link key={path} to={path} spy={true} offset={-100} smooth={true}
          className={`${darkmode ? 'text-white text-[15px] font-semibold uppercase cursor-pointer px-3 py-2 rounded-lg  hover:bg-red-600 hover:text-white' :
             'text-black text-[15px] font-semibold uppercase cursor-pointer px-3 py-2 rounded-lg  hover:bg-red-600 hover:text-white'}`}>
              {link}</Link>
        ))
      }

    </ul>

    {/* mobile menu icon starts here */}

    <div className='flex justify-center items-center lg:hidden' onClick={togglemenu}>
      <div>
        {isMenuOpen? <FaXmark className='text-red-600 text-2xl cursor-pointer py
        dark:text-white'/> : <FaBars className='text-red-600 text-2xl cursor-pointer
        dark:text-white'/>}        
      </div>


    </div>
  
   <div className={`${isMenuOpen? 'flex' : 'hidden'}  w-full h-fit  bg-slate-800 
   absolute top-[80px] p-4 left-0 rounded-xl'`} onClick={closemenu}>
    <ul className='flex flex-col justify-center items-center gap-2 w-full '>

      {
        navItmes.map(({link,path})=>(
          <Link key={path} to={path} spy={true} offset={-100} smooth={true}  
          className={`${darkmode ? 'text-white text-[15px] font-semibold uppercase cursor-pointer px-3 py-2 rounded-lg hover:text-white hover:bg-red-700 ' : 
            'text-white text-[15px font-semibold uppercase cursor-pointer hover:bg-red-600 hover:text-white rounded-lg px-3 py-2  ]'}`}>{link}</Link>
        ))
      }
    </ul>
   </div>

      <div className='flex  justify-center items-center lg:gap-7 gap-4'>
        <div className='flex justify-between items-center lg:gap-7 gap-3'>
          <FaPhoneAlt className='size-5 text-red-700'/>
          <h1 className={`${darkmode ? 'text-sm lg:text-xl font-semibold text-white' : 
            'text-sm font-semibold text-black lg:text-xl'
          }`}  >
            98674 82978
          </h1>
        </div>
        <FaUserCircle className='size-5 text-red-700'/>
      </div>
      </nav>

  )
}

export default Header



