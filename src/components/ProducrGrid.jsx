import React, { useEffect } from 'react'
import { FaStar,FaRegHeart } from 'react-icons/fa';
import{MdAddShoppingCart,MdOutlineRemoveRedEye} from 'react-icons/md'
import AOS from "aos";
import "aos/dist/aos.css";
import {products} from '../export.js'
import { useCount } from './store';
const ProducrGrid = () => {
  const{increment } = useCount();
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
    <div id="products" className='w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4'>
        <h1 data-aos="zoom-in" data-aos-deley="100" className='text-themepurple text-xl  font-semibold'>Browse Our Products</h1>
        <h1 data-aos="zoom-in" data-aos-deley="200" className='text-black text-[42px] leading-[50px]  font-semibold text-center'>Trending Products</h1>
       <div data-aos="zoom-in" data-aos-deley="300" className='w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10 mt-10'>
       {
  products.map((item, index) => (
    <div
      id="product-box"
      key={index}
      className="flex flex-col justify-center items-center gap-2 bg-white p-4 rounded-lg cursor-pointer relative"
    >
      <img src={item.img} alt="" className="" />
      <div id='icons'className='flex  justify-center items-center gap-3 absolute top-[20px]'>
        <div className='bg-themepurple hover:bg-themeyellow hover:text-black rounded-full p-3 text-white  '>
        <button className=' rounded-full p-1 text-white  ' onClick={increment}> <MdOutlineRemoveRedEye/></button>
        </div>
        <div className='bg-themepurple hover:bg-themeyellow hover:text-black rounded-full p-3 text-white  '>
        <button className=' rounded-full p-1 text-white  ' onClick={increment}> <FaRegHeart/></button>
        </div>
        <div className='bg-themepurple hover:bg-themeyellow hover:text-black rounded-full p-3 text-white  '>
          <button className=' rounded-full p-1 text-white  ' onClick={increment}><MdAddShoppingCart/></button>
        </div>
      </div>
      <h1 className='text-lg text-gray-400 font-semibold'>{item.category}</h1>
      <h1 className='text-xl text-black font-semibold'>{item.name}</h1>
      <h1 className='text-lg text-themepurple font-semibold'>{item.price}</h1>
      <div className='w-full mt-2'>
        <hr />
        <div className='flex justify-between items-center mt-3 gap-6'>
          <div className='flex justify-center items-center gap-1'>
            <FaStar className='text-themepurple'/>
            <FaStar className='text-themepurple'/>
            <FaStar className='text-themepurple'/>
            <FaStar className='text-themepurple'/>
            <FaStar className='text-themepurple'/>
            </div>
            <button className='bg-green-500 text-white px-4 py-2 rounded-lg text-[13px] font-semibold'>Sale 14%</button>
        </div>

      </div>
    </div>
  ))
}

       </div>
       <button data-aos="zoom-in" data-aos-deley="400"  className='bg-themepurple hover:bg-themeyellow hover:text-black text-white py-3 px-8 rounded-lg font-semibold mt-8' >VIEW MORE</button>
    </div>
    </>
  )
}

export default ProducrGrid