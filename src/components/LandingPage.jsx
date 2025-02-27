import React, { useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";
const LandingPage = () => {
 
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.8.5"
      className=" w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center">
                {index == 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "18vh" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[9vw] h-[6vw] mr-5 overflow-hidden rounded-md relative top-[6px] bg-red-500"
                  >
                    <img
                      className="w-full h-full bg-cover"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1
                  key={index}
                  className='flex items-center uppercase text-[9vw] leading-[7vw] tracking-tighter font-["Founders Grotesk"] h-full font-semibold'
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              key={index}
              className="text-md font-light tracking-tight leading-none"
            >
              {item}
            </p>
          );
        })}

        <div  className="relative overflow-hidden px-5 py-2 border-[1px] hover:bg-white hover:ease-linear hover:duration-300 hover:text-black border-zinc-600 font-light text-sm rounded-full uppercase">
          {/* Expanding Circle */}
          
          <span className="relative z-10">Start the project</span>
        </div>
        <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-600 font-light text-sm rounded-full">
          <span className="rotate-[45deg]">
            <FaArrowUpLong />
          </span>
        </div>
        <div className="start"></div>
      </div>
    </div>
  );
};

export default LandingPage;
