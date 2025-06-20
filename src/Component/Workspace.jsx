import React from "react";
import Button from "../Component/Button.jsx";

function Workspace() {
  return (
    <div
      className="relative pt-[106px] pb-[220px] w-[100%] h-[100%] trusted-area"
      style={{
        backgroundImage: `url(/Images/trusted-bg.jpg)`,
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="w-[100%] pr-[15px] pl-[15px] mr-auto ml-auto h-[50px] md:h-[330.6px] max-w-[960px]">
        <div className="flex flex-wrap -mr-[15px] -ml-[15px]">
          <div className="flex-[75%] max-width-[65%] relative w-[100%] ">
            <div className="text-center flex items-center flex-col">
              <h3 className="md:text-6xl text-[26px] w-full pb-[44px] font-bold md:leading-[4.7rem]   text-white">
                A Workspace designed for <br />
                Comfort, Built for Focus
                <br /> and Creativity.
              </h3>
              <Button
                item="Book A seat"
                className=" text-white  text-[14px]"
                buttonClass="  w-[180.86px] h-[68px]   border-white  px-[40px] border-l-2 border-background"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workspace;
