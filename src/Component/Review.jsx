import React, { useState } from "react";

function Review({ image, title, desc, name }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const maxLength = 100; // Customize as needed
  const isLong = desc.length > maxLength;
  const shortDesc = desc.slice(0, maxLength);

  return (
    <div className="bg-white relative max-w-[400px] w-full h-[100%]  px-4 hover:text-[#ef2917] transition-colors duration-300">
      <div className="bg-white border-[1px] border-white relative   !text-center">
        <p className="text-[16px]  font-[500] pt-[50px] pb-[25px] pr-[30px] pl-[30px] leading-[30px] text-[#74706f]">
          {isExpanded || !isLong ? desc : `${shortDesc}... `}
          {isLong && (
            <button
              className="inline-block text-[#ef2917]  ml-1"
              onClick={toggleReadMore}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </p>
      </div>

      <div className="flex justify-center gap-4 items-center pb-[50px] !pt-0">
        <img
          src={image}
          alt=""
          className="rounded-full w-[50px] h-[50px] object-cover block"
        />
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-[20px] text-[#3f3836] tracking-[-1.5px]">
            {name}
          </h3>
          <span className="text-[#ef2917] block font-semibold     text-[13px]">
            {title}
          </span>
        </div>
      </div>

      <div className="absolute top-0 left-5">
        <img
          src="/Images/quote-icon.png"
          alt="quote icon"
          className="w-[43px] h-[39px]"
        />
      </div>
    </div>
  );
}

export default Review;
