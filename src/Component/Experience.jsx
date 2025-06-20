// import React, { useState, useEffect } from "react";
// import { IdFetch } from "./IdFetch";

// function Experience() {
//   const [gallery, setgallery] = useState([]);

//   useEffect(() => {
//     IdFetch().then((id) => {
//       fetch(
//         `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/gallery/get-all-galleries/${id}`
//       )
//         .then((res) => res.json())
//         .then((data) => {
//           setgallery(data.data);
//         });
//     });
//   }, []);

//   return (
//     <div className="bg-foocolor min-h-[570px] w-full  flex flex-col items-center justify-center px-4 md:px-0 ">
//       <h1 className="text-white text-2xl sm:text-3xl md:text-4xl mt-24 font-bold text-center">
//         The Karyasiddhi Experience
//       </h1>

//       <div className="flex md:flex-row flex-col md:gap-0 gap-4 justify-center mt-20 w-full">
//         {gallery.map((banner) => (
//           <div
//             className="relative group overflow-hidden  w-full sm:w-[300px] md:w-[380px]"
//             key={banner._id}
//           >
//             <img
//               className="w-full md:w-[380px] h-[50vh]  object-cover border-4  border-white sm:h-[45vh] md:h-[50vh] "
//               src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${banner.mediaDetails.images[0]}`}
//               alt=""
//             />

//             {/* Black overlay animation */}
//             <div className="absolute inset-0 bg-black/70 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 z-10"></div>

//             {/* Content inside overlay */}
//             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
//               <button className="relative px-6 py-2 font-semibold text-white bg-red-500 overflow-hidden group/button">
//                 <span className="relative z-10 transition-colors duration-500 group-hover/button:text-red-500">
//                   Explore More
//                 </span>
//                 <span className="absolute inset-0 bg-white scale-x-0 group-hover/button:scale-x-100 origin-left transition-transform duration-500 z-0"></span>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Experience;

// import React from "react";
// import { useEffect, useState } from "react";
// import Button from "./Button";
// import { IdFetch } from "./IdFetch";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// function Experience() {
//   const [gallery, setGallery] = useState([]);
//   const [isMobileView, setIsMobileView] = useState(false);

//   useEffect(() => {
//     IdFetch().then((id) => {
//       fetch(
//         `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/gallery/get-all-galleries/${id}`
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           setGallery(data.data);
//         });
//     });
//   }, []);

//   useEffect(() => {
//     const checkScreen = () => {
//       setIsMobileView(window.innerWidth < 1024); // md & below = mobile/tab
//     };
//     checkScreen();
//     window.addEventListener("resize", checkScreen);
//     return () => window.removeEventListener("resize", checkScreen);
//   }, []);

//   return (
//     <div className="bg-[#3f3836] text-white w-full flex flex-col">
//       <h3 className="font-bold md:text-[44px] text-[30px] tracking-[-1.5px] flex justify-center items-center h-80 text-center px-4">
//         The Karyasiddhi Experience
//       </h3>

//       {isMobileView ? (
//         <Swiper
//           modules={[Autoplay]}
//           autoplay={{ delay: 2500 }}
//           loop={true}
//           spaceBetween={20}
//           slidesPerView={1}
//           className="w-full px-4 pb-12"
//         >
//           {gallery.map((banner) => (
//             <SwiperSlide key={banner.id}>
//               <div className="relative overflow-hidden group ">
//                 <img
//                   src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${banner.mediaDetails.images[0]}`}
//                   alt=""
//                   className="w-full aspect-square object-cover border-4 border-white "
//                 />
//                 <div className="absolute inset-0 bg-black/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-10 rounded-md"></div>
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
//                   <Button
//                     item={banner.title}
//                     className="text-[14px]"
//                     curtainColor="white"
//                     buttonClass="w-auto h-[80px] px-6 pointer border-l-2 border-white hover:text-red-500"
//                   />
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       ) : (
//         <div className="border-white h-full p-0 w-full flex flex-col md:flex-row flex-wrap justify-center">
//           {gallery.map((banner) => (
//             <div
//               key={banner.id}
//               className="relative border-3 overflow-hidden group"
//             >
//               <img
//                 src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${banner.mediaDetails.images[0]}`}
//                 alt=""
//                 className="w-[380px] object-cover border-2 border-white h-[375px]"
//               />
//               <div className="absolute inset-0 bg-black/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-10"></div>
//               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
//                 <Button
//                   className="font-[500px] text-[14px]"
//                   curtainColor="white"
//                   item={banner.title}
//                   buttonClass="w-auto h-[116px] px-10 pointer border-l-2 border-white hover:text-red-500"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

import React from "react";
import { useEffect, useState } from "react";
import Button from "../Component/Button";
import { IdFetch } from "./IdFetch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";

function Experience() {
  const [gallery, setGallery] = useState([]);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    // Fetch gallery data
    IdFetch().then((id) => {
      fetch(
        `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/gallery/get-all-galleries/${id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setGallery(data.data);
        })
        .catch((error) => {
          console.error("Error fetching gallery:", error);
        });
    });

    // Handle window resize
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#3f3836] text-white  flex flex-col w-full">
      <h3 className="font-bold text-[30px] px-5 md:text-[44px]  tracking-[-1.5px] flex justify-center items-center h-80 text-center">
        The Karyasiddhi Experience
      </h3>

      <div className=" h-full p-0 w-full mx-auto flex flex-col md:flex-row">
        {isLargeScreen ? (
          // Static grid for screens >= 1200px (4 images, 25% width each)
          <div className="flex w-full">
            {gallery.slice(0, 4).map((banner) => (
              <div
                key={banner.id}
                className="relative border-3 overflow-hidden group"
                style={{ width: "25%" }}
              >
                <img
                  src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${banner.mediaDetails.images[0]}`}
                  alt={banner.title || "Gallery image"}
                  className="w-full h-[375px] border-2 border-white  object-cover"
                  onError={(e) => {
                    console.error("Image failed to load:", e.target.src);
                    e.target.src =
                      "https://via.placeholder.com/439x375?text=Image+Not+Found";
                  }}
                />
                <div className="absolute inset-0 bg-black/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <Link
                    to={`/gallery?title=${encodeURIComponent(banner.title)}`}
                  >
                    <Button
                      className="font-[500px] text-[14px]"
                      curtainColor="white"
                      item={banner.title}
                      buttonClass="w-auto h-[116px] px-10 pointer border-l-2 border-white hover:text-red-500"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Swiper for screens < 1200px
          <Swiper
            modules={[Autoplay, Navigation, Pagination, FreeMode]}
            freeMode={true}
            speed={600}
            loop={true}
            allowSlidePrev={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // Small gap for better visibility
            slidesPerView={1} // Default to 1 slide for small screens
            breakpoints={{
              535: {
                slidesPerView: 1,
              },
              767: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            style={{ width: "100%" }} // Ensure Swiper takes full width
          >
            {gallery.map((banner) => (
              <SwiperSlide key={banner.id} style={{ height: "auto" }}>
                <div className="relative  overflow-hidden group w-full">
                  <img
                    src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${banner.mediaDetails.images[0]}`}
                    alt={banner.title || "Gallery image"}
                    className="w-full h-[375px] border-4 border-white object-cover"
                    onError={(e) => {
                      console.error("Image failed to load:", e.target.src);
                      e.target.src =
                        "https://via.placeholder.com/439x375?text=Image+Not+Found";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    <Link
                      to={`/gallery?title=${encodeURIComponent(banner.title)}`}
                    >
                      <Button
                        className="font-[500px] text-[14px]"
                        curtainColor="white"
                        item={banner.title}
                        buttonClass="w-auto h-[116px] px-10 pointer border-l-2 border-white hover:text-red-500"
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default Experience;
