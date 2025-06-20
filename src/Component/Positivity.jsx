import React from "react";
import Button from "./Button";
import { FiArrowRight } from "react-icons/fi";

function Productivity() {
  return (
    <div className="relative w-full min-h-[918.26px] pb-[80px] sm:pb-[100px] lg:pb-[120px] pt-[80px] sm:pt-[100px] lg:pt-[111px] bg-white overflow-hidden transition-all duration-300">
      {/* Ball Animation */}
      <div className="z-0 absolute animate-movelineBall pointer-events-none top-28 sm:top-20 left-56 sm:left-8 w-32 sm:w-40 transition-all duration-300">
        <img src="/Images/we-know-line.png" alt="Ball Decoration" />
      </div>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row w-full relative gap-10 md:gap-0">
        {/* LEFT SECTION */}
        <div className="w-full md:w-[42%] px-4 sm:px-6 md:ml-[140px] transition-all duration-300">
          <h1 className="font-bold text-[28px] sm:text-[36px] lg:text-[44px] text-[#3f3836] tracking-[-1.5px] leading-tight lg:leading-[56px]">
            Coworking where Positivity meets Productivity
          </h1>
          <p className="text-[#736f6e] pt-6 sm:pt-[30px] pb-10 text-[16px] font-semibold leading-[28px] sm:leading-[32px] tracking-[-0.3px]">
            At Karyasiddhi Co-Working Space, we believe workspaces should
            inspire. It’s not just about working—it’s about sparking creativity,
            fostering collaboration, and fueling motivation. Our space blends
            focus, comfort, and productivity, with moments to relax and recharge
            through play, celebrations, and events. Here, you can work for hours
            without discomfort, as we prioritize both comfort and creativity for
            long-term success.
          </p>
          <img
            src="/Images/Positivity.jpg"
            alt="Space"
            className="w-full h-auto object-contain pt-4"
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full md:w-[42%] flex flex-col gap-1 md:gap-1 px-4 sm:px-6 transition-all duration-300">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-0 md:gap-2">
            {/* Text Block */}
            <div className="bg-[#ff4332] text-white w-full md:w-1/2 p-6 md:p-[53px] relative z-10 transition-all duration-300">
              <h1 className="text-[20px] sm:text-[22px] lg:text-[24px] leading-[30px] pb-4 font-bold">
                Where positivity meets productivity.
              </h1>
              <Button
                item={
                  <span className="flex items-center gap-2">
                    More <FiArrowRight className="text-white text-xl" />
                  </span>
                }
                className="text-white"
                buttonClass="bg-background border-l-2 border-white px-4 py-2 hover:text-redwala border-[#3f3836] transition-all duration-300"
                curtainColor="white"
              />
            </div>

            {/* Image Block */}
            <div className="w-full md:w-1/2">
              <img
                src="/Images/weknow.jpg"
                alt="Work Event"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Logo */}
          <div className="relative flex justify-center items-center ">
            <img
              src="/Images/logo small.png"
              alt="Small Logo"
              className="absolute w-[70px] sm:w-[90px] lg:w-[100px] h-[70px] sm:h-[80px] lg:h-[90px] bg-white top-[-10px] md:top-1/2 md:translate-y-[-50%] translate-y-[-35%] left-1/2 translate-x-[-50%] z-20 object-contain p-2 transition-all duration-300"
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-0 md:gap-2">
            {/* Image Block */}
            <div className="w-full md:w-1/2">
              <img
                src="Images/weknow2.jpg"
                alt="Play Area"
                className="w-full h-full  object-cover"
              />
            </div>

            {/* Text Block */}
            <div className="bg-[#3f3836] text-white  w-full md:w-1/2 p-6 md:p-[53px] relative z-10 transition-all duration-300">
              <h1 className="text-[20px] sm:text-[22px] lg:text-[24px] leading-[30px] pb-4 font-bold">
                A happy space to work, play, and collaborate.
              </h1>
              <Button
                item={
                  <span className="flex items-center gap-2">
                    More <FiArrowRight className="text-white text-xl" />
                  </span>
                }
                className="text-white"
                buttonClass="bg-[#3F3836] border-l-2 border-white px-4 py-2 border-[#3f3836] transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productivity;
