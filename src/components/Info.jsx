import React from "react";
import cat from "/src/catzzz.jpg";

export default function Info() {
  return (
    <div className="flex flex-col justify-between items-center">
      <img
        src={cat}
        className="w-[317px] h-[317px] rounded-t-[10px] object-contain"
      ></img>
      <h1 className="text-[25px] text-white font-bold leading-[30px] mt-[21px]">
        Meow Miu
      </h1>
      <p className="text-xs leading-[15px] font-normal text-[#F3BF99] mt-[6px] mb-[9px]">
        Frontend Developer
      </p>
      <p className="text-[10px] leading-[15px] font-normal text-[#F5F5F5] mb-[15px]">
        meowmiu.website
      </p>
      <div className="w-full flex justify-between gap-[17px]  px-[35px]">
        <button className="w-[115px] h-[34px] flex justify-center items-center text-sm text-black bg-white rounded-md font-medium">
          <i className="fa-solid fa-envelope mr-[10px]"></i>Email
        </button>
        <button className="w-[115px] h-[34px] flex justify-center items-center text-sm text-white bg-[#5093E2] rounded-md font-medium">
          <i className="fa-brands fa-linkedin mr-[10px]"></i>LinkedIn
        </button>
      </div>
    </div>
  );
}
