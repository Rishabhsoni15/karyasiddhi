import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import Button from "../Component/Button.jsx";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IdFetch } from "../Component/IdFetch.jsx";

function Banner() {
  const [banner, setBanner] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    IdFetch().then((id) => {
      fetch(
        `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/banner/get-all-banners/${id}?type=HOME_BANNER`
      )
        .then((response) => response.json())
        .then((data) => setBanner(data.data));
    });

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    const timer = setTimeout(() => setSwiperReady(true), 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <div className="w-full md:h-[810px] sm:h-[600px]  lg:h-[810px] relative z-0 overflow-hidden">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 2500 }}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="w-full h-full"
      >
        {banner.map((item) => (
          <SwiperSlide key={item._id} className="w-full">
            <div className="relative w-full h-full">
              <img
                src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${
                  isMobile
                    ? item.bannerImage.mobileView
                    : item.bannerImage.webView
                }`}
                alt="Carousel"
                className="w-full sm:h-full h-[80vh]  object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-24 xl:px-40 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-[4px] sm:w-[3px] md:w-[2.5px] h-[90%] sm:h-[75%] md:h-[86%] bg-redwala"></div>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <motion.p
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="text-base sm:text-lg md:text-xl font-semibold mb-4 flex items-center capitalize pl-4 sm:pl-5"
                    >
                      <img
                        src="./Images/logo small (1).png"
                        className="w-10 h-7 sm:w-12 sm:h-9 mr-2 sm:mr-3"
                        alt="karyasiddhi"
                      />
                      Karyasidhi
                    </motion.p>
                    <h3 className="text-5xl sm:text-5xl md:text-6xl lg:text-[90px] capitalize leading-tight sm:leading-[70px] lg:leading-[90px] w-full sm:w-[90%] lg:w-[670px] font-bold pt-2 sm:pt-4 pb-6 pl-4 sm:pl-6">
                      {`${item.title}`}
                    </h3>
                    <div className="pl-4 sm:pl-2 hidden sm:block">
                      <Button
                        item="book a seat"
                        buttonClass="mt-5 py-3 px-6 border-l-2 border-white hover:text-[#ff4332] bg-[#ff4332]"
                        curtainColor="white"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons - Hidden on sm and md */}
      <div
        ref={prevRef}
        className="hidden lg:flex absolute bottom-0 z-[9] h-[80px] w-[95px] bg-white items-center justify-center hover:bg-[#fff8f7] hover:text-[#ff4231] text-textg text-xl font-medium ml-[175px]"
      >
        <GoArrowLeft className="text-center" />
      </div>
      <div
        ref={nextRef}
        className="hidden lg:flex absolute bottom-0 z-[9] h-[80px] w-[95px] bg-white items-center justify-center hover:bg-[#fff8f7] hover:text-[#ff4231] text-textg text-xl font-medium ml-[270px]"
      >
        <GoArrowRight className="text-center" />
      </div>
    </div>
  );
}

export default Banner;
