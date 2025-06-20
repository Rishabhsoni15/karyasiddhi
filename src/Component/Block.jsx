import React from "react";

const Block = ({ icons, name, desc }) => {
  return (
    <div className="mx-4 ">
      <div className="bg-white relative  z-10 w-[100%] md:w-[270px] h-[33vh] md:h-[354px] mt-[30px] pl-[48px] pr-[32px] pt-[35px] pb-[28px] flex flex-col ">
        <img
          src={icons}
          className="text-[60px] w-[60px] h-[60px] mt-[15px] mb-[15px]  max-w-[100%] "
        ></img>
        <h4 className="text-[22px] leading-[30px] pt-[5px] pb-[22px] font-bold text-[#3f3836]  hover:text-redwala">
          {name}
        </h4>
        <p className="font-[500] leading-[34px] text-[#74706f] pr-[10px] tracking-[-0.3px]">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Block;
