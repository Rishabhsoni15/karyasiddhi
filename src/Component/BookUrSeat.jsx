import React from "react";
import Button from "./Button";
import { IoChevronDownSharp } from "react-icons/io5";
import { useState } from "react";
function BookUrSeat({ heading }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <div className="pb-[49px]">
        <h3 className="text-[44px] font-bold ml-6  text-[#3f3836] tracking-[-1.5] leading-1.2">
          {heading}
        </h3>
      </div>
      <div className="mx-[10px] !text-background">
        <form className="flex flex-wrap md:flex-row flex-col ">
          <div className="flex-1/2 md:max-w-[50%] relative w-full px-4 font-semibold  ">
            <div className="mx-[-10px] mt-[10px]">
              <input
                type="text"
                placeholder="Name"
                className="w-full leading-[68px] pl-[30px] bg-[#fbf0ee] text-[14px] fontsemibold  focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="flex-1/2 md:max-w-[50%] relative w-full px-4  ">
            <div className="mx-[-10px] mt-[10px]">
              <input
                type="text"
                placeholder="Company/business Name"
                className="w-full leading-[68px] pl-[30px] bg-[#fbf0ee] text-[14px] font-semibold "
                required
              />
            </div>
          </div>
          <div className="flex-1/2 md:max-w-[50%] relative w-full px-4  ">
            <div className="mx-[-10px] mt-[10px]">
              <input
                type="text"
                placeholder="Business category"
                className="w-full leading-[68px] pl-[30px] bg-[#fbf0ee] text-[14px] font-semibold "
                required
              />
            </div>
          </div>
          <div className="flex-1/2 md:max-w-[50%] relative w-full px-4 ] ">
            <div className="mx-[-10px] mt-[10px]">
              <input
                type="text"
                placeholder="Contact number"
                className="w-full leading-[68px] pl-[30px] bg-[#fbf0ee] text-[14px] font-semibold "
                required
              />
            </div>
          </div>
          <div className="flex-1/2 md:max-w-[50%] relative w-full px-4  ">
            <div className="mx-[-10px] mt-[10px]">
              <input
                type="number"
                placeholder="Email Addess"
                className="w-full leading-[68px] pl-[30px] bg-[#fbf0ee] text-[14px] font-semibold "
                required
              />
            </div>
          </div>
          <div className="flex-1/2 md:max-w-[50%] relative w-full px-4 ">
            <div className="mx-[-10px] mt-[10px]">
              <input
                type="email"
                placeholder="Select a service"
                className="w-full leading-[68px] pl-[30px] bg-[#fbf0ee] text-[14px] font-semibold "
                required
              />
            </div>
          </div>
          <div className="flex-1/2 md:max-w-[50%] relative w-full px-4">
            <div className="mx-[-10px] mt-[10px]">
              <select
                id="num-seats"
                name="strings.stringSix"
                required
                className="w-full bg-[#fbf0ee] leading-[68px] pl-[30px] text-[14px] text-[#827b79] font-semibold  rounded-none appearance-none focus:outline-none  "
              >
                <option value="" disabled selected>
                  Select number of seats
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3-5">3–5</option>
                <option value="6-9">6–9</option>
                <option value="10-15">10–15</option>
                <option value="16-20">16–20</option>
              </select>

              {/* Custom dropdown arrow */}
              <div className="pointer-events-none absolute top-1/2 right-4 transform -translate-y-1/2">
                <IoChevronDownSharp
                  className={`absolute right-4 top-1/2 transform transition-transform duration-300 ${
                    isOpen ? "-rotate-180" : "rotate-0"
                  }  pointer-events-none`}
                />
              </div>
            </div>
          </div>
          <div className="flex-1/2 md:max-w-[50%] relative w-full px-4">
            <div className="mx-[-10px] mt-[10px]">
              <select
                id="num-seats"
                name="strings.stringSix"
                required
                className="w-full bg-[#fbf0ee] leading-[68px] pl-[30px] text-[14px] text-[#827b79] font-semibold  rounded-none appearance-none focus:outline-none  "
              >
                <option value="" disabled selected>
                  Select a preferred location
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3-5">3–5</option>
                <option value="6-9">6–9</option>
                <option value="10-15">10–15</option>
                <option value="16-20">16–20</option>
              </select>

              {/* Custom dropdown arrow */}
              <div className="pointer-events-none absolute top-1/2 right-4 transform -translate-y-1/2">
                <IoChevronDownSharp
                  className={`absolute right-4 top-1/2 transform transition-transform duration-300 ${
                    isOpen ? "-rotate-180" : "rotate-0"
                  }  pointer-events-none`}
                />
              </div>
            </div>
          </div>
          <div className="flex-1 max-w-full relative px-4 ">
            <div className="-ml-[10px] -mr-[10px]  mt-[10px]">
              <textarea
                name="remarks"
                placeholder="Message"
                rows="10"
                cols="30"
                className="bg-[#fbf0ee] w-full h-[190px] pl-[30px] text-[14px] font-semibold  pt-[10px] focus:outline-none "
                required
              ></textarea>
              <Button
                buttonClass="mt-[10px] h-full py-5 px-4 border-l-2 border-[#3f3836] text-white"
                item="send message"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default BookUrSeat;
