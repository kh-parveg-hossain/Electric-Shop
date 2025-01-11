import React, { useEffect, Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from "../assets/headset.jpg";
import earbuds from "../assets/earbuds.jpg";
import dslr from "../assets/dslr.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrowsL: false,
  };
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
      {/* <div id="hero"className='w-full flex justify-center items-center lg:h-[700px] h-[600px]'>
    </div> */}
      <Slider {...settings}>
        <div id="hero">
          <div
            className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${dslr})` }}
          >
            <h1 data-aos="zoom-in" data-aos-deley="50"
            className="text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl"> Get upto Discounts 80% off</h1>
            <h1 data-aos="zoom-in" data-aos-deley="100"className="text-white lg:text-[120px] text-[60px]
            font-bold uppercase lg:leading-[120px] loding-[70px]">DSLR 360 <br />Camera</h1>
          <h1 data-aos="zoom-in" data-aos-deley="100"className="text-white text-2xl font-bold uppercase lg:leading-[120px] loding-[70px]">100% trusted <span className="text-themeyellow font-semibold">Electronics Gadgets</span></h1>
          <button data-aos="zoom-in" data-aos-deley="200"className="bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold">ONLINE COLLECTION</button>
          </div>
        </div>
        <div>
          <div
            className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${earbuds})` }}
          >
            <h1 data-aos="zoom-in" data-aos-deley="50"
            className="text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl"> Get upto Discounts 80% off</h1>
            <h1 data-aos="zoom-in" data-aos-deley="100"className="text-white lg:text-[120px] text-[60px]
            font-bold uppercase lg:leading-[120px] loding-[70px]">WIRELESS <br />EARBUDS</h1>
          <h1 data-aos="zoom-in" data-aos-deley="100"className="text-white text-2xl font-bold uppercase lg:leading-[120px] loding-[70px]">100% trusted <span className="text-themeyellow font-semibold">Electronics Gadgets</span></h1>
          <button data-aos="zoom-in" data-aos-deley="200"className="bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold">ONLINE COLLECTION</button>
          </div>
        </div>
        <div>
          <div
            className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${headset})` }}
          >
            <h1 data-aos="zoom-in" data-aos-deley="50"
            className="text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl"> Get upto Discounts 80% off</h1>
            <h1 data-aos="zoom-in" data-aos-deley="100"className="text-white lg:text-[120px] text-[60px]
            font-bold uppercase lg:leading-[120px] loding-[70px]">WIRELESS<br />HEADSET</h1>
          <h1 data-aos="zoom-in" data-aos-deley="100"className="text-white text-2xl font-bold uppercase lg:leading-[120px] loding-[70px]">100% trusted <span className="text-themeyellow font-semibold">Electronics Gadgets</span></h1>
          <button data-aos="zoom-in" data-aos-deley="200"className="bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold">ONLINE COLLECTION</button>
          </div>
        </div>
        
       
      </Slider>
    </>
  );
};

export default Hero;
