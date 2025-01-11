import React, { useEffect } from 'react'
import insta1 from '../assets/insta-1.jpg'
import insta2 from '../assets/insta-2.jpg'
import insta3 from '../assets/insta-3.jpg'
import insta4 from '../assets/insta-4.jpg'
import insta5 from '../assets/insta-5.jpg'
import insta6 from '../assets/insta-6.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
const Insta = () => {
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
    <div
      id="insta"
      className="w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4"
    >
      <h1
        data-aos="zoom-in"
        data-aos-deley="100"
        className="text-themepurple text-xl font-semibold capitalize"
      >
        our Instagram Shop
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-deley="200"
        className="text-black text-[42px] font-semibold leading-[50px] text-center capitalize"
      >
       Follow us on Instagram
      </h1>
      <div data-aos="zoom-in" data-aos-deley="300"className='w-full grid lg:grid-cols-6 grid-cols-1 justify-center items-center gap-6 mt-8'>
        <img src={insta1} alt="" srcset="" />
        <img src={insta2} alt="" srcset="" />
        <img src={insta3} alt="" srcset="" />
        <img src={insta4} alt="" srcset="" />
        <img src={insta5} alt="" srcset="" />
        <img src={insta6} alt="" srcset="" />
      </div>
      <button data-aos="zoom-in" data-aos-deley="400"  className='bg-themepurple hover:bg-themeyellow hover:text-black text-white py-3 px-8 rounded-lg font-semibold mt-8' >ELECTRICALSHOP</button>
      </div>
    
    
    
    </>
  )
}

export default Insta