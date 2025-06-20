import React from "react";
import Accordion1 from "./Accordion1";

function Faqs() {
  return (
    <div className=" relative mb-[150px] sm:mb-[80px] lg:mb-[120px]">
      <div className="bg-white flex flex-col px-4 md:flex-row  md:relative transition-all duration-300 ease-in-out">
        {/* Image Section */}
        <div className="w-full md:w-1/2  md:ml-[170px] md:mr-[-100px] md:mb-[100px]  md:-mt-[100px] transition-all duration-300 ease-in-out">
          <img
            src="/Images/benefits-thumb.jpg"
            alt="faq"
            className="object-cover w-full h-auto  transition-all duration-300 ease-in-out"
          />
        </div>

        {/* FAQ Section */}
        <div className="w-full md:w-1/2 h-auto md:h-[840px] mb-28 pl-4 sm:pl-6 md:pl-[100px] pt-[40px] sm:pt-[60px] md:pt-[91px] pb-[40px] sm:pb-[60px] md:pb-[100px] bg-[#ff4230] relative z-0 transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-start text-white bg-[#ff4230] w-full md:w-[80%] relative">
            <h1 className="text-[28px] sm:text-[32px] md:text-[44px] font-bold tracking-[-1.5px] pb-2 leading-[1.2] border-b-2 border-[#dadadc] w-full transition-all duration-300 ease-in-out">
              FAQ
            </h1>
            <p className="leading-[26px] sm:leading-[28px] md:leading-[34px] text-[16px] sm:text-[18px] md:text-[20px] pb-6 sm:pb-10 pt-2 font-semibold tracking-[-0.3px]">
              Frequently Asked Questions
            </p>
            <div className="w-full pr-4 overflow-hidden sm:pr-0 md:pr-6 lg:pr-8">
              <Accordion1 />
            </div>
          </div>

          {/* Grid Pattern */}
          <img
            src="/Images/grid.png"
            alt="pattern"
            className="absolute top-0 right-0 -z-10 w-[80%] sm:w-[60%] md:w-[50%] h-auto object-cover pointer-events-none opacity-50"
          />
        </div>
      </div>

      {/* Ball Image */}
      <div className="ml-10 mr-10 md:mx-10 -mt-0 md:-mt-48 mb-20 relative transition-all duration-300 ease-in-out">
        <img
          src="/Images/benefits-dot.png"
          alt="dot animation"
          className="absolute h-40 w-40 sm:h-16 sm:w-16 md:h-40 md:w-40 -translate-y-[80%] animate-moveBall"
        />
      </div>
    </div>
  );
}

export default Faqs;
