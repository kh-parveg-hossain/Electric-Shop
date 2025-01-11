import React, { useEffect } from 'react'
import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'
import client3 from '../assets/client3.png'
import client4 from '../assets/client4.png'
import client5 from '../assets/client5.png'
import client6 from '../assets/client6.png'
import google from '../assets/google.jpg'
import apple from '../assets/apple.jpg'
import pay1 from '../assets/pay-1.jpg'
import pay2 from '../assets/pay-2.jpg'
import pay3 from '../assets/pay-3.jpg'
import pay4 from '../assets/pay-4.jpg'

import {Link} from 'react-scroll'
import {FaArrowUp} from 'react-icons/fa'
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);
  AOS.refresh();
  return (
    <>
    <div id="contact" className="w-full flex justify-center items-center">
      {/* 1st start */}
     <div data-aos="zoom-in" data-aos-deley="100" className="w-full bg-themepurple lg:px-20 px-10 py-8 grid  lg:grid-cols-6 grid-cols-2 justify-center items-center gap-10  ">
     <img src={client1} alt="" srcset="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100'/>
     <img src={client2} alt="" srcset="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100'/>
     <img src={client3} alt="" srcset="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100'/>
     <img src={client4} alt="" srcset="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100'/>
     <img src={client5} alt="" srcset="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100'/>
     <img src={client6} alt="" srcset="" className='w-[130px] opacity-70 cursor-pointer hover:opacity-100'/>
     </div>
     </div>
      {/* 1st end */}

      {/* 2nd start */}
      <div className='w-full lg:px-20 px-5 py-[60px] bg-gray-100 grid lg:grid-cols-[auto,auto,auto,auto,auto] grid-cols-1 justify-between items-start lg:gap-20 gap-10'>
        <div data-aos="zoom-in" data-aos-deley="200" className='flex flex-col justify-center items-start gap-10 grow '>
          <div className='flex flex-col justify-center items-start gap-4'>
            <h1 className='text-themepurple text-4xl font-bold underline italic'>Electra Shop</h1>
           <p className='text-gray-500 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, .</p>
          </div>
          <div className='flex flex-col justify-center items-start gap-4'>
            <h1 className='text-black text-xl font-bold capitalize'>download our app</h1>
            <div className='flex justify-center items-center gap-4'>
              <img src={google} alt="" />
              <img src={apple} alt="" />
            </div>
          </div>
        </div>
          <div data-aos="zoom-in" data-aos-deley="300" >
           <h1 className='text-black text-xl font-semibold capitalize'>Usefull Links</h1>
           <ul className='mt-8 flex flex-col justify-center items-start gap-2'>
            <li className='text-gray-500 hover:text-black cursor-pointer'>Home</li>
            <li className='text-gray-500 hover:text-black cursor-pointer'>About</li>
            <li className='text-gray-500 hover:text-black cursor-pointer'>Servics</li>
            <li className='text-gray-500 hover:text-black cursor-pointer'>Blog</li>
            <li className='text-gray-500 hover:text-black cursor-pointer'>Contact</li>
           </ul>
          </div>
          <div data-aos="zoom-in" data-aos-deley="300" className=''>
           <h1 className='text-black text-xl font-semibold capitalize'>Information</h1>
           <ul className='mt-8 flex flex-col justify-center items-start gap-2'>
            <li className='text-gray-500 hover:text-black cursor-pointer'>Return Policy</li>
            <li className='text-gray-500 hover:text-black cursor-pointer'>Return Policy</li>
            <li className='text-gray-500 hover:text-black cursor-pointer'>Return Policy</li>
            <li className='text-gray-500 hover:text-black cursor-pointer'>Return Policy</li>
            <li className='text-gray-500 hover:text-black cursor-pointer'>Return Policy</li>
           </ul>
          </div>
          <div data-aos="zoom-in" data-aos-deley="300" className=''>
           <h1 className='text-black text-xl font-semibold capitalize'>Top Category</h1>
           <ul className='mt-8 flex flex-col justify-center items-start gap-2'>
            <li className='text-gray-500 hover:text-black cursor-pointer'>Wireless headphone</li>
            <li className='text-gray-500 hover:text-black cursor-pointer'>Bluetooth speakers
            </li>
            <li className='text-gray-500 hover:text-black cursor-pointer'>
            Portable devices</li>
            <li className='text-gray-500 hover:text-black cursor-pointer'>Monio live camera</li>
            <li className='text-gray-500 hover:text-black cursor-pointer'>Movie projector T6</li>
           </ul>
          </div>
          <div data-aos="zoom-in" data-aos-deley="300" className=''>
           <h1 className='text-black text-xl font-semibold capitalize'>Contact Info</h1>
           <ul className='mt-8 flex flex-col justify-center items-start gap-2'>
            <li className='text-gray-500 hover:text-black cursor-pointer'>Phone: +1 234 567 890</li>
            <li className='text-gray-500 hover:text-black cursor-pointer'>Email: info@domain.com</li>
            <li className='text-gray-500 hover:text-black cursor-pointer col-2'>401 Broadway, 24th floor,
            orchard view, london, UK</li>
           
           </ul>
          </div>
      </div>
      {/* 2nd end */}

      {/* 3rd start */}
      <div className='w-full lg:px-20 px-5 py-[40px] bg-gray-100'>
        <hr className='border-gray-300 border-t py-3'/>
        <div className='w-full flex justify-center items-center lg:flex-row flex-col lg:gap-4 gap-10'>
          <div className='lg:w-[20%] w-full flex justify-center items-center gap-4'>
          <img src={pay1} alt="" className='w-[50px] cursor-pointer rounded-lg'/>
          <img src={pay2} alt="" className='w-[50px] cursor-pointer rounded-lg'/>
          <img src={pay3} alt="" className='w-[50px] cursor-pointer rounded-lg'/>
          <img src={pay4} alt="" className='w-[50px] cursor-pointer rounded-lg'/>
          </div>
          <div className='lg:w-[60%] w-full flex justify-center items-center lg:flex-row flex-col gap-4 flex-grow'>
            <h1 className='text-black text-2xl font-semibold'>Subscribe  Newsletter</h1>
            <div>
            <input type="email" placeholder="Enter Email Address" className="lg:w-auto w-full px-6 py-3 rounded-l-lg capitalize" />
            <button className='bg-themeyellow lg:w-auto w-full text-white hover:bg-themeyellow hover:text-black px-6 py-3 rounded-r-lg '>Submit</button>

            </div>
          </div>
          <div className='lg:w-[20%] w-full'>
          <p className='text-gray-500 lg:text-end text-center'>© 2024 Power by Debug Entity</p>
          </div>
        </div>
         

      </div>
      {/* 3rd end */}
      {/* scroll to top */}
      <div id= "icon-box" className='bg-themepurple text-white p-3 rounded-full hover:bg-themeyellow hover:text-black  fixed lg:bottom-6 right-6 bottom-6 '>
        <Link to="hero" spy={true} smooth={true} offset={-100} ><FaArrowUp className='w-[35px] h-[35px] cursor-pointer'/></Link>

      </div>
       
    
    </>
  )
}

export default Footer