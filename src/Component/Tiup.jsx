// import {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   Autoplay,
// } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

// function Tiup() {
//   return (
//     <>
//       <div className="bg-white text-black flex  items-start justify-start h-[40vh]">
//         <h1 className=" text-5xl font-bold  w-[25%]  p-10 ml-44  text-background">
//           Clients we have worked with.
//         </h1>
//         <div className="flex overflow-hidden mt-12 w-[75%] gap-10 flex-col">
//           <Swiper
//             className="w-[70%]"
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={0} // Changed to 4 for 4px gap
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             loop={true}
//             breakpoints={{
//               320: {
//                 slidesPerView: 1,
//               },
//               500: {
//                 slidesPerView: 1,
//               },
//               768: {
//                 slidesPerView: 3,
//               },
//               1024: {
//                 slidesPerView: 3,
//               },
//               1280: {
//                 slidesPerView: 3,
//               },
//               1536: {
//                 slidesPerView: 3,
//               },
//             }}
//           >
//             {/* Row 1 - swipe left */}
//             <div className="flex justify-center  ">
//               <SwiperSlide className="">
//                 <img
//                   src="/Images/comp1.png"
//                   alt="Logo1"
//                   className="h-16 w-auto
//                   swipe-left delay-0"
//                 />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img
//                   src="/Images/comp2.png"
//                   alt="Logo2"
//                   className="h-16 w-auto swipe-left delay-1"
//                 />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img
//                   src="/Images/comp3.png"
//                   alt="Logo2"
//                   className="h-16 w-auto swipe-left delay-1"
//                 />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img
//                   src="/Images/comp1.png"
//                   alt="Logo1"
//                   className="h-16 w-auto
//                   swipe-left delay-0"
//                 />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img
//                   src="/Images/comp2.png"
//                   alt="Logo2"
//                   className="h-16 w-auto swipe-left delay-1"
//                 />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img
//                   src="/Images/comp3.png"
//                   alt="Logo2"
//                   className="h-16 w-auto swipe-left delay-1"
//                 />
//               </SwiperSlide>
//             </div>
//           </Swiper>
//           {/* Row 2 */}
//           <Swiper
//             className="w-[70%]"
//             modules={[Navigation, Pagination, Autoplay]}
//             spaceBetween={0} // Changed to 4 for 4px gap
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//               reverseDirection: true,
//             }}
//             loop={true}
//             breakpoints={{
//               320: {
//                 slidesPerView: 1,
//               },
//               500: {
//                 slidesPerView: 1,
//               },
//               768: {
//                 slidesPerView: 3,
//               },
//               1024: {
//                 slidesPerView: 3,
//               },
//               1280: {
//                 slidesPerView: 3,
//               },
//               1536: {
//                 slidesPerView: 3,
//               },
//             }}
//           >
//             {/* Row 2 - swipe right */}
//             <div className="flex justify-center  ">
//               <SwiperSlide>
//                 <img
//                   src="/Images/comp1.png"
//                   alt="Logo1"
//                   className="h-16 w-auto
//                   swipe-right delay-0"
//                 />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img
//                   src="/Images/comp2.png"
//                   alt="Logo2"
//                   className="h-16 w-auto swipe-right delay-1"
//                 />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img
//                   src="/Images/comp3.png"
//                   alt="Logo2"
//                   className="h-16 w-auto swipe-right delay-1"
//                 />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img
//                   src="/Images/comp1.png"
//                   alt="Logo1"
//                   className="h-16 w-auto
//                 swipe-right  delay-1"
//                 />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img
//                   src="/Images/comp2.png"
//                   alt="Logo2"
//                   className="h-16 w-auto swipe-right delay-1"
//                 />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <img
//                   src="/Images/comp3.png"
//                   alt="Logo2"
//                   className="h-16 w-auto swipe-right delay-1"
//                 />
//               </SwiperSlide>
//             </div>
//           </Swiper>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Tiup;

// import React from 'react'
// import logo1 from '../assets/logo1.png'
// import logo2 from '../assets/logo2.png'
// import logo3 from '../assets/logo3.png'
// import './Company.css'

// const Company = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between w-full px-10 py-20 overflow-hidden">
//       {/* Left Text */}
//       <div className="mb-8 md:mb-0 md:w-1/3 mx-30 lg:mr-70 lg:ml-50">
//         <h2 className="text-2xl md:text-5xl font-bold text-[#333]">Clients we have worked with.</h2>
//       </div>

//       {/* Right Logos */}
//       <div className="md:w-2/3 flex flex-col gap-6">
//         {/* Row 1 - swipe left */}
//         <div className="flex justify-center gap-10 fixed-logos-row">
//           <img src={logo1} alt="Logo1" className="h-12 w-auto swipe-left delay-1" />
//           <img src={logo2} alt="Logo2" className="h-12 w-auto swipe-left delay-1" />
//           <img src={logo3} alt="Logo3" className="h-12 w-auto swipe-left delay-1" />
//         </div>

//         {/* Row 2 - swipe right */}
//         <div className="flex justify-center gap-10 fixed-logos-row">
//           <img src={logo1} alt="Logo4" className="h-12 w-auto swipe-right delay-1" />
//           <img src={logo2} alt="Logo5" className="h-12 w-auto swipe-right delay-1" />
//           <img src={logo3} alt="Logo6" className="h-12 w-auto swipe-right delay-2" />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Company
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { IdFetch } from "./IdFetch";

function Tiup() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    IdFetch().then((id) => {
      fetch(
        `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/association/get-all-associations/${id}` // Adjusted endpoint to fetch logos
      )
        .then((response) => response.json())
        .then((data) => {
          setLogos(data.data);
          console.log("Banner Data:", data.data);
        });
    });
  }, []);
  return (
    <div className="bg-white text-black flex flex-col lg:flex-row  items-start  mx-[10%] py-10 justify-between">
      {/* Left Heading */}
      <h1 className=" text-[25px] flex items-center justify-center ml-24 md:ml-0 mb-16   text-center w-[170.11px] h-[93.6px] sm:h-full sm:text-[44px] font-bold sm:w-full lg:w-[30%] text-[#343a40] leading-13">
        Clients we have worked with.
      </h1>

      {/* Right Logo Swipers */}
      <div className="flex flex-col gap-6 w-full lg:w-2/3">
        {/* Row 1 - Auto Left Swipe */}
        <Swiper
          className="w-full"
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
          }}
        >
          {logos.map((item, index) => (
            <SwiperSlide key={`row1-${index}`}>
              <img
                src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${item.logo}`}
                alt=""
                className="h-16 w-auto mx-auto"
              />
            </SwiperSlide>
          ))}
          {logos.map((item, index) => (
            <SwiperSlide key={`row1-${index}`}>
              <img
                src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${item.logo}`}
                alt=""
                className="h-16 w-auto mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Row 2 - Auto Right Swipe */}
        <Swiper
          className="w-full"
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
          }}
        >
          {logos.map((item, index) => (
            <SwiperSlide key={`row2-${index}`}>
              <img
                src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${item.logo}`}
                alt=""
                className="h-16 w-auto mx-auto"
              />
            </SwiperSlide>
          ))}
          {logos.map((item, index) => (
            <SwiperSlide key={`row2-${index}`}>
              <img
                src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${item.logo}`}
                alt=""
                className="h-16 w-auto mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Tiup;
