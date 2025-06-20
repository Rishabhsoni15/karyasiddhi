import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Button from "../Component/Button.jsx";
import { FiArrowRight } from "react-icons/fi";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Ourcard = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isMobileView, setIsMobileView] = useState(false);

  const services = [
    {
      image: "/Images/explore-1.jpg",
      title: "Coworking Seat",
      desc: "Shared workspaces offering flexibility and collaboration.",
      price: "₹4,499/m",
    },
    {
      image: "/Images/explore-2.jpg",
      title: "Private Cabin",
      desc: "A quiet, exclusive workspace for focused.",
      price: "₹13,499/m",
    },
    {
      image: "/Images/explore-3.jpg",
      title: "Meeting Room",
      desc: "Professional meeting rooms available.",
      price: "₹999/hour",
    },
    {
      image: "/Images/explore-4.jpg",
      title: "One Day Pass",
      desc: "Flexible access to our workspace for a day. ",
      price: "₹349/day",
    },
    {
      image: "/Images/explore-4.jpg",
      title: "Weekly Pass",
      desc: "Enjoy a full week of workspace access.",
      price: "₹1,499/week",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Card = ({ service }) => {
    if (isMobileView) {
      // ----- Mobile / Tablet layout -----
      return (
        <div className="bg-white border border-[#f7eae8] mt-6 w-full overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-[377.92px] p-4 object-cover"
          />
          <div className="px-6 pt-4 pb-6">
            <h3 className="text-[20px] font-bold text-[#3f3836] tracking-[-1.5px]">
              {service.title}
            </h3>
            <p className="text-[14px] font-medium pt-2 leading-[26px] text-[#74706f] tracking-[-.3px]">
              {service.desc}
            </p>
            <div className="flex  justify-between  items-center mt-4">
              <span className="text-black font-semibold text-sm">
                Starts from
              </span>
              <p className="text-[24px] font-normal text-[#ff4231] tracking-[-.3px]">
                {service.price}
              </p>
            </div>
            <div className="mt-4">
              <Button
                item={
                  <span className="flex items-center gap-2">
                    More <FiArrowRight className="text-white text-xl" />
                  </span>
                }
                className="text-white"
                buttonClass="px-4 py-2 border-l-2 border-[#3f3836] mb-2"
              />
            </div>
          </div>
        </div>
      );
    }

    // ----- Desktop layout (unchanged) -----
    return (
      <div className="relative bg-white border border-[#f7eae8] transition-all duration-300 ease-out px-6 sm:px-[40px] h-auto sm:h-[332px] pt-6 sm:pt-[43px] pb-6 sm:pb-[37px] sm:pl-[280px] w-full mt-[30px]">
        <img
          src={service.image}
          alt=""
          className="absolute bottom-[20px] left-[20px] w-[100px] sm:w-auto sm:h-full object-cover"
        />
        <h3 className="text-[20px] sm:text-[24px] font-bold text-[#3f3836] tracking-[-1.5px]">
          {service.title}
        </h3>
        <p className="text-[14px] sm:text-[16px] font-medium pt-[5px] leading-[26px] sm:leading-[32px] text-[#74706f] tracking-[-.3px]">
          {service.desc}
        </p>
        <div className="flex justify-between  mt-5 items-center pb-[22px]">
          <span className="inline-block text-redwala text-sm sm:text-base">
            Starts from
          </span>
          <p className="text-lg sm:text-xl font-medium leading-[34px] text-[#ff4231] tracking-[-.3px]">
            {service.price}
          </p>
        </div>
        {/* Desktop button stays here, or remove it if only needed for mobile */}
        <Button
          item={
            <span className="flex items-center gap-2">
              More <FiArrowRight className="text-white text-xl" />
            </span>
          }
          className="text-white"
          buttonClass="px-4 py-2 border-l-2 border-[#3f3836] mb-2"
        />
      </div>
    );
  };

  return (
    <section className="flex flex-col justify-center bg-[#fbf0ee] pb-[80px] pt-[60px] relative z-[10]">
      <h3 className="text-center text-[26px] sm:text-[32px] lg:text-[44px] font-bold text-[#3f3836] tracking-[-1.2px] pb-[20px] px-4">
        Our Range of Services
      </h3>

      <div className="w-full max-w-[1195px] px-4 sm:px-[15px] mx-auto">
        {isMobileView ? (
          <div className="flex flex-col items-center">
            {services.map((service, idx) => (
              <div key={idx} className="w-full px-2 sm:px-4 lg:px-0">
                <Card service={service} />
              </div>
            ))}
          </div>
        ) : (
          <div className="relative">
            <div
              ref={prevRef}
              className="swiper-prev absolute top-1/2 -translate-y-1/2 left-2 sm:-left-[45px] z-20 flex items-center justify-center border-2 border-[#817a78] rounded-full h-[33px] w-[33px] cursor-pointer shadow"
            >
              <FaArrowLeft className="text-[#817a78] text-[14px]" />
            </div>

            <div
              ref={nextRef}
              className="swiper-next absolute top-1/2 -translate-y-1/2 right-2 sm:-right-[45px] z-20 flex items-center justify-center border-2 border-[#817a78] rounded-full h-[33px] w-[33px] cursor-pointer shadow"
            >
              <FaArrowRight className="text-[#817a78] text-[14px]" />
            </div>

            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{ delay: 3000 }}
              loop={true}
              spaceBetween={0}
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
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                },
              }}
            >
              {services.map((service, idx) => (
                <SwiperSlide
                  key={idx}
                  className="!w-full !ml-[10px] !mr-[0px] sm:!w-[570px]"
                >
                  <div className="px-2 sm:px-[15px]">
                    <Card service={service} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
};

export default Ourcard;
