import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen flex items-center px-32 gap-5 bg-zinc-100">
      <div  data-scroll data-scroll-speed=".4" className="cardcontainer h-[50vh] w-1/2">
        <div className="relative card rounded-xl w-full h-full flex items-center justify-center  bg-[#004D43]">
            <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10">&copy; 2019-2022</button>
        </div>
      </div>
      <div data-scroll data-scroll-speed=".4" className="cardcontainer flex gap-5 h-[50vh] w-1/2">
        <div className="relative flex items-center justify-center card rounded-xl w-1/2 h-full  bg-[#072a26]">
        <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10">&copy; 2019-2022</button>
        </div>
        <div className="relative flex items-center justify-center card rounded-xl w-1/2 h-full  bg-[#072a26]">
        <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10">&copy; 2019-2022</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
