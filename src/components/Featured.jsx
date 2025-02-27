import React, { useState } from "react";
import { motion, useAnimate, useAnimation } from "framer-motion";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] pb-15 border-zinc-700 ">
        <h1 className="text-7xl font-[Neue_Montreal] tracking-tight">
          Featured Project
        </h1>
      </div>
      <div className="px-20">
        <div className="cards flex w-full gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh] "
          >
            <h1 className="absolute flex text-[#CDEA68] overflow-hidden right-0 translate-x-1/2 -translate-y-1/2 top-1/2  z-[9] text-8xl  leading-none tracking-tight font-[Founders Grotesk] font-bold">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block "
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full  rounded-2xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png"
                alt="card 1"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh] "
          >
            <h1 className="absolute flex text-[#CDEA68] overflow-hidden right-full translate-x-1/2 -translate-y-1/2 top-1/2  z-[9] text-8xl  leading-none tracking-tight font-[Founders Grotesk] font-bold">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block "
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full  rounded-2xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-663x551.png"
                alt="card 2"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
