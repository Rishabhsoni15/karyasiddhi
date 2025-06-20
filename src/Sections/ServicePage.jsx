// ServicesPage.jsx
import React, { useState, useEffect } from "react";
import Card from "../Component/Ourcard";
import NavBar from "../component/NavBar";
import ExtraSection from "../Component/ExtraSection";
import Footer1 from "../Component/Footer1";
import WhatsappButton from "../Component/WhatsappButton";
import Button from "../Component/Button";
import OurServices from "./OurServices";

// Responsive viewType utility
function getViewType() {
  const width = window.innerWidth;
  if (width < 640) return "mobile";
  if (width >= 640 && width < 1024) return "tablet";
  return "desktop";
}

function ServicePage() {
  const [viewType, setViewType] = useState(getViewType());

  useEffect(() => {
    const handleResize = () => {
      setViewType(getViewType());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative bg-[#fbefed] text-black min-h-screen overflow-hidden">
      <NavBar />
      <WhatsappButton />
      <ExtraSection
        mode="breadcrumb"
        breadcrumbLinks={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
        ]}
      />
      {/* Background Pattern on the Right */}
      <div className="h-[100%] w-[100%] bg-CoBg">
        <section className="relative bg-[#fbefed] text-black  overflow-hidden">
          {/* Pattern only inside this section */}
          <div className="absolute top-0 left-0 z-0 w-auto opacity-70 h-auto pointer-events-none">
            <img
              src="/Images/ReviewImg.png"
              alt="Pattern"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Service Cards on top of background */}
          <div className="relative z-10 flex flex-col pt-[111px] pb-[120px] lg:flex-row lg:flex-wrap gap-6 sm:px-[15px] max-w-[1195px] mx-auto  ">
            <div className="w-full  lg:w-[100%]">
              <OurServices />
            </div>
          </div>
        </section>
        <div className="bg-[#ff4332] w-full h-full md:h-[486px] pt-[111px] pb-[111px]  z-10 relative">
          <div className="w-[100%] pr-[15px] pl-[15px] mx-auto  text-white xl:max-w-[1200px] z-1 lg:max-w-[1000px] md:max-w-[720px]  max-w-[540px]  px-4 items-center flex flex-wrap ">
            <div className="flex md:flex-row flex-col gap-5 md:items-center items-start flex-wrap -mr-[15px] md:-ml-[15px]">
              <div className="relative flex-[33.333%] max-w-[400px] w-full pr-[15px] pl-[15px] ">
                <h3 className=" text-white text-[36px] lg:text-[44px] font-bold z-1 leading-[1.2] tracking-[-1.5] ">
                  Find Your Focused Workspace—Book Your Seat Today
                </h3>
              </div>
              <div className="flex-[41.6667px] md:ml-24 ml-0 max-w-[520px] relative w-full pr-[15px] pl-[15px] ">
                <p className="md:pl-[10px]  text-white font-medium leading-[34px]  text-[16px]">
                  Experience a productive, professional environment tailored to
                  your needs. Book a free visit today and enjoy exclusive offers
                  when you secure your spot!
                </p>
              </div>
              <div className="flex-[25%] max-w-[100%] md:max-w-[25%] relative pr-[15px] pl-[15px]">
                <div className="!text-right  ">
                  <Button
                    item="Schedule Your Visit"
                    curtainColor="white"
                    buttonClass="bg-background textwhite md:mt-0  mt-5 px-7 md:px-4 leading-[68px] border-l-2 border-white hover:text-[#ff4231]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute md:block hidden bottom-0 right-0 z-[-1]">
            <img src="/Images/cta-dot-2.png" alt="" />
          </div>
          <div className="absolute top-0 md:block hidden left-[400px] z-[-1] linear animate-moveBall">
            <img src="/Images/cta-dot.png" alt="" className=" max-w-full  " />
          </div>
        </div>
      </div>
      <Footer1 />
    </div>
  );
}

export default ServicePage;
