
import React from 'react'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
const Types = () => {
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
          <div className='w-full lg:px-20 px-5 py-[80px] grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-10 '>
             <div data-aos="zoom-in" data-aos-deley="100"className='flex flex-col justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg' style={{ backgroundImage: `url(${banner1})` }}>
             <h1 className='text-themeyellow text-lg border rounded-lg border-themeyellow px-6 py-2'>60% OFF</h1>
             <h1 className='text-white font-semibold text-4xl text-end'>WIRELESS <br /> Devies</h1>
             <button className='bg-themeyellow hover:bg-themepurple text-black py-3 px-6 rounded-lg font-semibold'>Shop Now</button>
            </div>
            <div data-aos="zoom-in" data-aos-deley="100"className='flex flex-col justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg' style={{ backgroundImage: `url(${banner2})` }}>
             <h1 className='text-themeyellow text-lg border rounded-lg border-themeyellow px-6 py-2'>60% OFF</h1>
             <h1 className='text-white font-semibold text-4xl text-end'>WIRELESS <br /> Devies</h1>
             <button className='bg-themeyellow hover:bg-themepurple text-black py-3 px-6 rounded-lg font-semibold'>Shop Now</button>
            </div>
            <div data-aos="zoom-in" data-aos-deley="100"className='flex flex-col justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg' style={{ backgroundImage: `url(${banner3})` }}>
             <h1 className='text-themeyellow text-lg border rounded-lg border-themeyellow px-6 py-2'>60% OFF</h1>
             <h1 className='text-white font-semibold text-4xl text-end'>WIRELESS <br /> Devies</h1>
             <button className='bg-themeyellow hover:bg-themepurple text-black py-3 px-6 rounded-lg font-semibold'>Shop Now</button>
            </div>

         </div> 
        
       </>
  )
}

export default Types