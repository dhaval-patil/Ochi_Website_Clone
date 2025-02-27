import React, { useState } from "react";
import { motion } from "framer-motion";
const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      data-scroll
      data-scroll-speed="-.2"
      className="z-[999] w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black"
    >
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
        hire great peo­ple.
      </h1>
      <div className="w-full  flex gap-35 border-t-[1px] pt-10 mt-20 border-[#a2c239]">
        <div>
          <h1 className="text-7xl">Our Approach</h1>
          <motion.div
            onHoverStart={() => setIsHovered(true)} // Trigger hover state
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.button
              whileHover={{ scale: 1.2 }}
              className="flex gap-10 items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white"
            >
              {" "}
              Read More
              <motion.div
                animate={{ scale: isHovered ? 3.5 : 1 }} // Scale child based on state
                transition={{ type: "spring", stiffness: 200 }}
                className="w-3 h-3 bg-zinc-100 rounded-full"
              ></motion.div>
            </motion.button>
          </motion.div>
        </div>
        <div className="overflow-hidden w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]">
        <img className=" h-full w-full" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="image" /></div>
      </div>
    </div>
  );
};

export default About;
