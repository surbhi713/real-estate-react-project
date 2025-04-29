import React, { useEffect } from "react";
import {property} from '../components/export.js';
import AOS from "aos";
import 'aos/dist/aos.css';
import { MdSpaceDashboard } from "react-icons/md";
import {FaBath,FaVideo,FaBed,FaShareAlt,FaCircle,FaPlus,FaMapMarkerAlt,FaCamera, FaMdb, FaUserClock, FaUserCircle, FaHeart} from "react-icons/fa";
import { useDarkMode } from '../components/DarkModeContext';


function Properties() {
  useEffect(()=>{
    AOS.init({
      delay:100,
      duration:800,
      offset:200,
      easing:"ease-in-sine",
    })
  },[])

  const {darkmode,toggleDarkMode} = useDarkMode();

  return (
    <div className={`${darkmode ? 'dark: bg-black' : 'light: bg-transparent'}
    rounded-xl m-auto`}>
      <section id="properties" className=" lg:w-[90%] w-full flex flex-col 
      justify-center items-start gap-10 m-auto lg:px-20 px-6 py-20 ">
        <div className=" flex flex-col justify-center items-start gap-4 ">
          <h1 data-aos="zoom-in" className="font-semibold text-red-900 text-xl
           dark:text-white">PROPERTIES</h1>
          <h1 data-aos="zoom-in" className="font-semibold text-black text-4xl dark:text-white ">EXPLORE THE MOST</h1>
        </div>
        
        {/* properties grid start from here(images) */}
        <div id="grid-box" className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center
        items-start gap-8">
        {
        property.map((item,index)=>{
          return(
            <div id="image_container" data-aos="zoom-in" data-aos-delay="200"
             key={index} className="dark:bg-gray-800 rounded-xl
             w-full">
              
            <div id="image-box" className="bg-cover bg-center h-[250px] rounded-xl
              p-4 flex flex-col justify-between items-start" 
              style={{backgroundImage:`url(${item.images})`}}> 
              <div id="top" className="w-full flex justify-between items-end">
                
                {/* buttons featured,sales and active */}
              <div>
                <button className="bg-red-600 text-white py-1 px-3 rounded-full
                text-[13px] font-semibold transform hover:scale-110
                 hover:bg-black hover:text-white transition-transform duration-300">Featured</button>
              </div>

              <div className="flex justify-between items-center gap-3">
                <button className="bg-red-600 text-white py-1 px-3 rounded-full
                text-[13px] font-semibold transform hover:scale-110
                 hover:bg-black hover:text-white m-auto transition-transform duration-300">Sales</button>

              <button className="bg-red-600 text-white py-1 px-3 rounded-full
                text-[13px] font-semibold transform hover:scale-110
                 hover:bg-black hover:text-white m-auto transition-transform duration-300">Active </button>
              </div>
              
              </div>

              {/* address */}
              <div id="bottom" className="flex justify-center items-end w-full">
                <div className="flex justify-start items-center gap-2">
                  <FaMapMarkerAlt className="size-4 text-white"/>
                  <h1 className="text-white">
                    {item.address}
                  </h1>
                </div>
                
                <div className="flex justify-center items-end gap-4 m-auto">
                  <FaVideo className="size-4 text-white"/>
                  <FaCamera className="size-4 text-white"/>
                </div>

              </div>
            
            </div>

            {/* about and icons */}
            <div className=" px-6 py-3 flex flex-col justify-center  items-start">
              <h1 className="font-semibold font-xl dark:text-white">{item.name}</h1>
              <h1 className="text-2xl font-bold text-red-600 dark:text-white">{item.price}</h1>
              <p className="dark:text-white">{item.about}</p>

            <div id="icons" className="flex justify-center items-start gap-2">
            <div className="flex justify-center items-start gap-2 mt-2">
                <FaBath className="size-5 text-red-900"/>
                <h1 className="dark:text-white">{item.bath}</h1>
              </div>
              <div className="flex justify-center items-start gap-2  mt-2">
                <FaBed className="size-5 text-red-900"/>
                <h1 className="dark:text-white">{item.bed}</h1>
              </div>
              <div className="flex justify-center items-start gap-2  mt-2">
                <MdSpaceDashboard className="size-5 text-red-900"/>
                <h1 className="dark:text-white">{item.area}</h1>
              </div>

            </div>
             
             {/* owner and icons */}

             <div className="h-[1px] bg-gray-800 w-full mt-8"></div>
             <div id="owner_info" className="flex justify-between items-center w-full mt-2">
             <div className="flex justify-center gap-2 items-center">
              <FaUserCircle className="size-5 text-red-400"/>
              <h1 className="dark:text-white">{item.owner}</h1>
             </div>

             <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer
             transform hover:scale-110 transition-transform duration-300">
              <FaHeart className="size-4 text-red-400"/>
             </div>
             <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer
             transform hover:scale-110 transition-transform duration-300">
              <FaShareAlt className="size-4 text-red-400"/>
             </div>
             <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer
             transform hover:scale-110 transition-transform duration-300">
              <FaPlus className="size-4 text-red-400"/>
             </div>
             </div>
             
            </div>
          </div>
          )
          
        })
        }
         
        </div>

      </section>
    </div>
  )
}

export default Properties