import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoMdClose } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { IdFetch } from "../Component/IdFetch.jsx";

const EnterAnimation = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [post, setPost] = useState([]);

  useEffect(() => {
    IdFetch().then((id) => {
      fetch(
        `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/banner/get-all-banners/${id}?type=POPUP_BANNER`
      )
        .then((response) => response.json())
        .then((data) => setPost(data.data || []));
    });
  }, []);

  if (!isOpen || post.length === 0) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div
        className="relative sm:max-w-[560px] sm:max-h-[560px] max-w-[300px] max-h-[380px] h-full w-full"
        onClick={() => setIsOpen(false)} // Close popup on clicking anywhere inside the popup
      >
        {/* Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent closing when clicking the button itself
            setIsOpen(false);
          }}
          className="absolute md:-top-10 md:-right-10 top-0 -right-10  text-black bg-white p-3 z-50"
        >
          <IoMdClose className="text-md font-bold" />
        </button>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full h-full"
        >
          {post.map((item, index) => {
            const src = item?.bannerImage?.webView
              ? `https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${item.bannerImage.webView}`
              : null;
            return (
              src && (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`popup-banner-${index}`}
                    className="object-contain w-full h-full"
                    loading="lazy"
                  />
                </SwiperSlide>
              )
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default EnterAnimation;
