import React from "react";
import Block from "./Block";
import Button from "../Component/Button.jsx";

const blocksData = [
  {
    icons: "Images/hotspot.png",
    name: "High speed internet",
    desc: "Stay connected with reliable, high-speed internet.",
  },
  {
    icons: "/Images/workspace.png",
    name: "Individual Seating",
    desc: "Private seating for a productive work environment.",
  },
  {
    icons: "/Images/office-chair.png",
    name: "Ergonomic Chairs",
    desc: "Chairs designed to reduce strain during long hours.",
  },
  {
    icons: "/Images/air-conditioner.svg",
    name: "Air Conditioners",
    desc: "Temperature-controlled environment for maximum comfort.",
  },
  {
    icons: "/Images/tray.png",
    name: "Fully Equipped Kitchen",
    desc: "Prepare meals, snacks, and drinks in our kitchen.",
  },
  {
    icons: "/Images/round-table.png",
    name: "Separate Lunch Area",
    desc: "A designated space to enjoy your meals comfortably.",
  },
  {
    icons: "/Images/coffee-cup.svg",
    name: "No Limit Tea & Coffee",
    desc: "Unlimited tea and coffee to keep you refreshed.",
  },
  {
    icons: "/Images/glass-of-water.svg",
    name: "Free and Full-Time Water",
    desc: "Access fresh water anytime to stay hydrated.",
  },
  {
    icons: "/Images/parking.png",
    name: "Huge Parking Space",
    desc: "Convenient, spacious parking for easy arrival.",
  },
  {
    icons: "Images/confrence.png",
    name: "Conference / Meeting Rooms",
    desc: "Professional meeting rooms for meetings and discussions.",
  },
  {
    icons: "Images/presentation.svg",
    name: "Big Screen for Presentations",
    desc: "Large display for effective presentations.",
  },
  {
    icons: "Images/multifunction-printer.svg",
    name: "Printer and Scanner",
    desc: "Quick access to printers and scanners for documents.",
  },
  {
    icons: "Images/locker.svg",
    name: "Individual Lockers",
    desc: "Secure lockers for personal storage and safety.",
  },
  {
    icons: "Images/camera.png",
    name: "Full Security Cameras",
    desc: "24/7 surveillance for a safe working environment.",
  },
  {
    icons: "Images/cleaning.svg",
    name: "Hygienic Workspace",
    desc: "Clean workspace for a hygienic working experience.",
  },
  {
    icons: "Images/toilet.svg",
    name: "Hygienic Washrooms",
    desc: "Clean washrooms for comfort and convenience.",
  },
  {
    icons: "Images/charge.svg",
    name: "Free Power Supply",
    desc: "Uninterrupted power supply for consistent charging.",
  },
];

const Cards = () => {
  return (
    <div
      className="w-full mt-48 p-4 sm:p-6 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(/Images/block2.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        backgroundPosition: "top left",
      }}
    >
      <div className="bg-[#faedeb]/90 w-full h-full absolute top-0 left-0 z-0"></div>

      <div className="relative z-10 max-w-7xl  mx-auto">
        <div className="flex flex-wrap justify-center  mt-6 md:mt-10">
          {/* Title Block: full width */}
          <div className="w-full ml-6   md:w-[270px] flex mx-2">
            <h3 className="text-[32px]   sm:text-[36px] md:text-[44px] text-[#3f3836] tracking-[-1.5px] font-bold leading-tight pt-5">
              What we are offering at our Coworking Space.
            </h3>
          </div>

          {/* Service Cards */}
          {blocksData.map((block, i) => (
            <Block
              key={i}
              icons={block.icons}
              name={block.name}
              desc={block.desc}
            />
          ))}

          {/* Final CTA Block */}
          <div className=" md:w-[570px] h-[355px] p-4 sm:p-10 md:p-14  ml-[16px] justify-center mr-[16px] sm:ml-3 sm:mr-3 border-4 border-[#3f3836] mt-[30px]   sm:text-start  flex flex-col sm:items-start">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl px-2 ">
              Experience the Vibe – Schedule Your Visit to Our Co-Work Space!
            </h1>
            <div className="mt-6 sm:mt-10 pl-3 md:pl-3">
              <Button
                item="book a seat"
                buttonClass=" py-5  px-4 border-l-2 border-background text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
