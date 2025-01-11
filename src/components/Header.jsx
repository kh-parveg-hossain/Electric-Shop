import React, { useEffect, useState } from 'react';
import { FaSearch, FaHeart, FaShoppingCart, FaMapMarkerAlt } from 'react-icons/fa'; // Note: 
import { IoPerson } from 'react-icons/io5';
import { Link } from 'react-scroll';
import { FaBars, FaXmark, FaPhoneVolume, FaP, FaS } from 'react-icons/fa6';
import { useCount } from './store';
import { MdEmail } from 'react-icons/md';
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const {count}=useCount()
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'About', path: 'about' },
    { link: 'Products', path: 'products' },
    { link: 'Testimonials', path: 'testimonials' },
    { link: 'Contact', path: 'contact' },
  ]

  return (
    <>
      <div className="w-full px-16 py-2 bg-themeyellow lg:flex hidden justify-between items-center gap-6" >
        <h1 className="text-sm font-semibold flex justify-center items-center gap-2 cursor-pointer">
          <FaPhoneVolume /> <span>+91 1234567890</span>
        </h1>
        <h1 className="text-sm font-semibold flex justify-center items-center gap-2">
          <FaMapMarkerAlt /> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quia?</span>
        </h1>
        <h1 className="text-sm font-semibold flex justify-center items-center gap-2 cursor-pointer">
          <MdEmail /> <span>electrashop@company.com</span>
        </h1>
      </div>
      <nav className='w-full bg-gray-100 flex justify-between items-center gap-1 lg:px-16 px-6 py-5 stricky top-0 z-50 '>
        <h1 className="text-themepurple font-semibold lg:text-[30px] text-3xl underline italic">Electra shop</h1>
        <ul className="lg:flex hidden justify-center items-center gap-10">
       { navItems.map(({link,path})=>(
          <Link key={path} to={path} spy={true} smooth={true} offset={-100} duration={500} className="text-black font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-themepurple hover:text-white ">
            {link}
          </Link>

        ))
        }
        </ul>
        <div id="header-icons" className='lg:flex hidden justify-center items-center gap-6 text-black'>
          <FaSearch className='w-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer ' />
          <input type="text" placeholder='Search'className='bg-transparent border-b-2 border-themepurple outline-none'/>
          <IoPerson className='w-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer ' />
          <FaHeart className='w-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer ' />
          <div className='relative'>
            <FaShoppingCart className='w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer' />
            <div className='absolute w-[20px] h-[20px] top-[-10px] left-3 bg-themepurple text-white rounded-full flex justify-center items-center text-[10px] font-semibold'> {count}</div>
          </div>


        </div>
        {/*mobile menu */}
         <div className='flex justify-center items-center lg:hidden mt-3 'onclick={toggleMenu}>
        <div>
          {isMenuOpen ? <FaXmark className='text-themepurple cursor-pointer' /> : <FaBars  className='text-themepurple cursor-pointer' /> }
        </div>
         </div>
      </nav>
    </>
  );
};

export default Header;
