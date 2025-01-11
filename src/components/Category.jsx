import React, { useEffect } from "react";
import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";
import cat4 from "../assets/cat4.jpg";
import cat5 from "../assets/cat5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Category = () => {
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
    <div
      id="category"
      className="w-full bg-gray-100 lg:px-20 px-5 pt-[130px] pb-[80px] flex lg:flex-row flex-col  justify-center  items-center gap-20"
    >
      <div
        data-aos="zoom-in"
        data-aos-deley="50"
        className="lg:w-[20%]  flex flex-col justify-center lg:items-start items-center gap-[20px]"
      >
        <h1 className="text-themepurple text-xl font-semibold text-center">
          Favorites item
        </h1>
        <h1 className="text-black font-semibold text-[42px] leading-[50px] lg:text-start text-center">
          Popular Category
        </h1>
        <button className="bg-themepurple hover:bg-themeyellow text-white py-3 px-8 rounded-lg font-semibold mt-[60px]">
          View All
        </button>
      </div>
      <div className="lg:w-[85%] w-full  grid lg:grid-cols-5 grid-cols-1 gap-10 justify-center items-start">
        <div
          data-aos="zoom-in"
          data-aos-deley="100"
          className=" flex flex-col justify-center items-center gap-6"
        >
          <img
            src={cat1}
            alt=""
            srcset=""
            className="rounded-full cursor-pointer"
          />
          <h1 className="text-black text-xl font-semibold  hover:text-themepurple cursor-pointer">
            Protable Speakers
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-deley="200"
          className=" flex flex-col justify-center items-center gap-6"
        >
          <img
            src={cat2}
            alt=""
            srcset=""
            className="rounded-full cursor-pointer"
          />
          <h1 className="text-black text-xl font-semibold  hover:text-themepurple cursor-pointer">
            Protable Speakers
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-deley="300"
          className=" flex flex-col justify-center items-center gap-6"
        >
          <img
            src={cat3}
            alt=""
            srcset=""
            className="rounded-full cursor-pointer"
          />
          <h1 className="text-black text-xl font-semibold  hover:text-themepurple cursor-pointer">
            Protable Speakers
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-deley="400"
          className=" flex flex-col justify-center items-center gap-6"
        >
          <img
            src={cat4}
            alt=""
            srcset=""
            className="rounded-full cursor-pointer"
          />
          <h1 className="text-black text-xl font-semibold  hover:text-themepurple cursor-pointer">
            Protable Speakers
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-deley="500"
          className=" flex flex-col justify-center items-center gap-6"
        >
          <img
            src={cat5}
            alt=""
            srcset=""
            className="rounded-full cursor-pointer"
          />
          <h1 className="text-black text-xl font-semibold  hover:text-themepurple cursor-pointer">
            Protable Speakers
          </h1>
        </div>
       
      </div>
    </div>
  );
};

export default Category;
