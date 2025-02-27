import React, { useRef } from "react";
import {motion} from "framer-motion"


const Marquee = () => {
  const scrollRef = useRef(null);
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".05" className="w-full py-19 bg-[#004d43]  rounded-tl-3xl rounded-tr-3xl">
      <div className="text border-t-2 border-b-2 border-zinc-300 overflow-hidden flex  whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[22vw] leading-none font-[Founders Grotesk] uppercase font-bold -mt-9 -pt-4 mb-3 pr-20"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }} 
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[22vw] leading-none font-[Founders Grotesk] uppercase font-bold -mt-9 -pt-4 mb-3 pr-20"
        >
          We are ochi
        </motion.h1>
      </div>
      
    </div>
    
  );
};

export default Marquee;
