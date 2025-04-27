// import React, { useEffect } from 'react'
// import Aos from 'aos'
// import 'aos/dist/aos.css';
// import {property} from "../components/export.js"
// import { MdSpaceDashboard } from "react-icons/md";
// import {FaBath,FaVideo,FaBed,FaShareAlt,FaCircle,FaPlus,FaMapMarkerAlt,FaCamera} from "react-icons/fa";
// import { useDarkMode } from '../components/DarkModeContext';
// import prop1 from "../../assets/images/prop1.webp"


// function Properties() {
//   useEffect(()=>{
//     Aos.init({
//       easing:'ease-in-sine',
//       delay:100,
//       duration:800,
//       offset:200
//     })
//   },[])
//   const {darkmode, toggleDarkMode} = useDarkMode()
  
//   return (
    

//         {/* properties grid start from here */}

//         <div id='gridbox' className=' w-full grid lg:grid-cols-3 grid-cols-1
//         justify-center items-center gap-8'>
//           {
//             property.map((items,index)=>{
//               <div id='image-container' 
//               key={index} className='bg-yellow-50 dark:bg-gray-800 rounded-xl w-full'>
//                 <div id='image-box' className='h-[250px] bg-cover bg-center
//                 p-4 rounded-xl flex flex-col justify-between items-end'
//                  style={{backgroundImage:`url(${items.images})`}}>
                  
//                  </div>
//               </div>
//             })
//           }
//         </div>
//       </section>
      
//     </div>
//   )
// }

// export default Properties



import React, { useEffect } from "react";
import {property} from '../components/export.js';
import AOS from "aos";
import 'aos/dist/aos.css';
import { MdSpaceDashboard } from "react-icons/md";
import {FaBath,FaVideo,FaBed,FaShareAlt,FaCircle,FaPlus,FaMapMarkerAlt,FaCamera} from "react-icons/fa";
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
        
        {/* properties grid start from here */}
        <div id="grid-box" className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center
        items-start gap-8">
        {
        property.map((item,index)=>{
          return(
            <div id="image_container" data-aos="zoom-in" data-aos-delay="200"
             key={index} className="dark:bg-gray-800 rounded-xl
             w-full">
              
            <div id="image-box" className="bg-cover bg-center h-[250px] rounded-xl
              p-4 flex flex-col justify-between items-end" 
              style={{backgroundImage:`url(${item.images})`}}> 
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