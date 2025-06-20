import React, { useState, useEffect } from "react";
import { FaAngleDown, FaEnvelopeOpenText } from "react-icons/fa";
import { FiMenu, FiX, FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import Button from "../Component/Button.jsx";
import { GoChevronDown } from "react-icons/go";
import { IoMdArrowDropup } from "react-icons/io";
import { Link } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 105); // Change to control when it appears
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`font-md transition-all overflow-hidden duration-300 bg-white shadow-md z-[100] 
      }`}
    >
      {/* LOGO  */}

      {/* TOP BLACK BAR*/}
      {!isScrolled && (
        <div className="bg-[#403937]  h-[48px] text-white text-[13px] font-semibold hidden md:flex justify-start lg:ml-[360px] items-center px-[60px] lg:px-15 lg:text-s py-3 gap-4">
          <a
            href="#"
            className="flex items-center gap-2 border-r   border-gray-500 h-[48px] pr-4"
          >
            <FaEnvelopeOpenText className="text-redwala text-[18px] " />
            hello@karyasiddhico.work
          </a>
          <a
            href="#"
            className="flex items-center gap-2 border-r  border-gray-500 h-[48px] pr-4"
          >
            <FiPhoneCall className="text-redwala text-[18px]" />
            +91 9669231006
          </a>
          <a
            href="#"
            className="hidden  items-center gap-2 w-[461px]    xl:inline-flex"
          >
            <IoLocationOutline className="text-redwala text-[18px]" />
            MIG 60, Sector 02, Shankar Nagar, Raipur, Chhattisgarh, 492001
          </a>
        </div>
      )}

      {/* MAIN WHITE NAVBAR  */}
      <div className=" top-[49px] sm:h-[105px] h-[70px]  l-0 r-0  w-full pl-[15px] pr-[15px]  flex  -mx-[15px]  font-sans">
        <div className="relative w-full ">
          <div className="flex ">
            <div className="relative lg:-mt-[50px] lg:h-[155px] min-h-[70px] md:h-[105px]  left-0 bg-[#fbf0ee]  sm:min-w-[360px] min-w-[205px]  flex justify-center items-center">
              <img
                src="/Images/logok.png"
                alt="logo"
                className="w-[300px]  object-contain"
              />
            </div>
            <div className="block w-[691px]  mt-10">
              <ul className="hidden md:hidden pl-[37px]  font-sans lg:flex text-sm lg:mx-5  text-background uppercase">
                <li className="inline-block relative">
                  <Link
                    to="/"
                    className="relative mr-[10px] w-[45px] cursor-pointer active-home"
                  >
                    Home
                  </Link>
                </li>

                <li className="relative group inline-block">
                  <Link
                    to="/service"
                    className="nav-arrow  mr-[10px] cursor-pointer inline-flex items-center whitespace-nowrap "
                  >
                    Our Services
                    <GoChevronDown className=" text-sm" />
                  </Link>

                  {/* Submenu */}
                  <ul className="absolute left-5 top-[100%] mt-10 w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white  shadow-md border-t-4 border-[#ff4332]">
                    <li>
                      <a
                        href="/service-details/coworking-seat"
                        className="block px-[24px] h-13 py-[10px] pt-4 hover:text-white hover:bg-[#403937] border-t border-[#fa2d37]"
                      >
                        Coworking Seat
                      </a>
                    </li>
                    <li>
                      <a
                        href="/service-details/private-cabin"
                        className="block px-[24px] py-[10px] pt-4 hover:text-white h-13 hover:bg-[#403937] border-t border-[#fa2d37]"
                      >
                        Private Cabin
                      </a>
                    </li>
                    <li>
                      <a
                        href="/service-details/meeting-room"
                        className="block px-[24px] py-[10px] pt-4 hover:text-white h-13 hover:bg-[#403937] border-t border-[#fa2d37]"
                      >
                        Meeting Room
                      </a>
                    </li>
                    <li>
                      <a
                        href="/service-details/one-day-pass"
                        className="block px-[24px] py-[10px] pt-4 hover:text-white h-13 hover:bg-[#403937] border-t border-[#fa2d37]"
                      >
                        One Day Pass
                      </a>
                    </li>
                    <li>
                      <a
                        href="/service-details/weekly-pass"
                        className="block px-[24px] py-[10px] pt-4 hover:text-white h-13 hover:bg-[#403937] border-t border-[#fa2d37]"
                      >
                        Weekly Pass
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="inline-block relative group">
                  <Link
                    to="/locations"
                    className="nav-arrow mr-[10px]  cursor-pointer inline-flex items-center w-auto whitespace-nowrap "
                  >
                    Locations
                    <GoChevronDown className="text-sm" />
                  </Link>

                  {/* Submenu */}
                  <ul className="absolute left-0 mt-10 top-full w-[200px] opacity-0 invisible group-hover:visible group-hover:opacity-100 bg-white  border-t-4 border-[#fa2d37] shadow-lg transition-all duration-300 ease-out">
                    <li>
                      <a
                        href="/locationdetails/Raipur"
                        className="block px-[24px] h-13 py-[10px] pt-4 hover:text-white hover:bg-[#403937] border-t border-[#fa2d37]"
                      >
                        Raipur
                      </a>
                    </li>
                    <li>
                      <a
                        href="/locationdetails/Surat"
                        className="block px-[24px] h-13 py-[10px] pt-4 hover:text-white hover:bg-[#403937] border-t border-[#fa2d37]"
                      >
                        Surat
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="inline-block relative">
                  <Link
                    to="/gallery"
                    className="nav-arrow mr-[10px]  cursor-pointer w-[66px]"
                  >
                    Gallery
                  </Link>
                </li>
                <li className="inline-block relative">
                  <Link
                    to="/blogs"
                    className="nav-arrow mr-[10px]  cursor-pointer w-[50px]"
                  >
                    Blogs
                  </Link>
                </li>
                <li className="inline-block relative">
                  <Link
                    to="/contact"
                    className="nav-arrow  cursor-pointer inline-block whitespace-nowrap"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            {/* Hamburger Icon for Mobile */}
            <div
              className=" lg:hidden flex items-center justify-center text-3xl text-gray-800 ml-auto"
              onClick={() => setOpen(!open)}
            >
              {open ? <FiX /> : <FiMenu />}
            </div>
          </div>
        </div>
        <Button
          item="Book your seat"
          className=" text-white  lg:text-md"
          buttonClass="lg:-ml-52  min-w-[200px] my-[25px] mr-[15px] py-4  hidden lg:block border-l-2 border-background"
        />
      </div>
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-md transition-all duration-1000 z-50 ${
          isScrolled
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className=" top-[49px] sm:h-[105px] h-[70px]  l-0 r-0 z-99 w-full pl-[15px] pr-[15px]  flex  -mx-[15px]  font-sans">
          <div className="relative w-full ">
            <div className="flex ">
              <div className="relative lg:-mt-[50px] lg:h-[155px] min-h-[70px] md:h-[105px] h-[20px]  left-0 bg-[#fbf0ee]  sm:min-w-[360px] min-w-[205px]  flex justify-center items-center">
                <img
                  src="/Images/logok.png"
                  alt="logo"
                  className="md:w-[300px] md:h-full   md:mt-10 mt-0   object-contain"
                />
              </div>
              <div className="block md:w-[691px] w-full mt-10">
                <ul className="hidden md:hidden pl-[37px]  font-sans lg:flex text-sm lg:mx-5  text-gray-800 uppercase">
                  <li className="inline-block relative">
                    <Link
                      to="/"
                      className="relative mr-[10px] w-[45px] cursor-pointer active-home2"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="relative group inline-block">
                    <Link
                      to="/service"
                      className="nav-arrow  mr-[10px] cursor-pointer inline-flex items-center whitespace-nowrap "
                    >
                      Our Services
                      <GoChevronDown className=" text-sm" />
                    </Link>

                    {/* Submenu */}
                    <ul className="absolute left-5 top-[100%] mt-10 w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white z-[9] shadow-md border-t-4 border-[#ff4332]">
                      <li>
                        <a
                          href="/service-details/coworking-seat"
                          className="block px-[24px] h-13 py-[10px] pt-4 hover:text-white hover:bg-[#403937] border-t border-[#fa2d37]"
                        >
                          Coworking Seat
                        </a>
                      </li>
                      <li>
                        <a
                          href="/service-details/private-cabin"
                          className="block px-[24px] py-[10px] pt-4 hover:text-white h-13 hover:bg-[#403937] border-t border-[#fa2d37]"
                        >
                          Private Cabin
                        </a>
                      </li>
                      <li>
                        <a
                          href="/service-details/meeting-room"
                          className="block px-[24px] py-[10px] pt-4 hover:text-white h-13 hover:bg-[#403937] border-t border-[#fa2d37]"
                        >
                          Meeting Room
                        </a>
                      </li>
                      <li>
                        <a
                          href="/service-details/one-day-pass"
                          className="block px-[24px] py-[10px] pt-4 hover:text-white h-13 hover:bg-[#403937] border-t border-[#fa2d37]"
                        >
                          One Day Pass
                        </a>
                      </li>
                      <li>
                        <a
                          href="/service-details/weekly-pass"
                          className="block px-[24px] py-[10px] pt-4 hover:text-white h-13 hover:bg-[#403937] border-t border-[#fa2d37]"
                        >
                          Weekly Pass
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="inline-block relative group">
                    <Link
                      to="/locations"
                      className="nav-arrow mr-[10px]  cursor-pointer inline-flex items-center w-auto whitespace-nowrap "
                    >
                      Locations
                      <GoChevronDown className="text-sm" />
                    </Link>

                    {/* Submenu */}
                    <ul className="absolute left-0 mt-10 top-full w-[200px] opacity-0 invisible group-hover:visible group-hover:opacity-100 bg-white z-50 border-t-4 border-[#fa2d37] shadow-lg transition-all duration-300 ease-out">
                      <li>
                        <a
                          href="/locationdetails/Raipur"
                          className="block px-[24px] h-13 py-[10px] pt-4 hover:text-white hover:bg-[#403937] border-t border-[#fa2d37]"
                        >
                          Raipur
                        </a>
                      </li>
                      <li>
                        <a
                          href="/locationdetails/Surat"
                          className="block px-[24px] h-13 py-[10px] pt-4 hover:text-white hover:bg-[#403937] border-t border-[#fa2d37]"
                        >
                          Surat
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="inline-block relative">
                    <Link
                      to="/gallery"
                      className="nav-arrow mr-[10px]  cursor-pointer w-[66px]"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li className="inline-block relative">
                    <Link
                      to="/blogs"
                      className="nav-arrow mr-[10px]  cursor-pointer w-[50px]"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li className="inline-block relative">
                    <Link
                      to="/contact"
                      className="nav-arrow  cursor-pointer inline-block whitespace-nowrap"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Hamburger Icon for Mobile */}
              <div
                className="lg:hidden text-3xl text-[#817a78] flex py-5  md:py-10 h-full "
                onClick={() => setOpen(!open)}
              >
                {open ? <FiX /> : <FiMenu />}
              </div>
            </div>
          </div>
          <Button
            item="Book your seat"
            className=" text-white  lg:text-md"
            buttonClass="lg:-ml-50  min-w-[200px]  my-[25px] border-background   hidden lg:block border-l-2"
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {/* Fullscreen Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 bg-white z-50 h-screen w-4/5 sm:w-3/5 md:w-2/5 transition-transform duration-300 ease-in-out transform translate-x-0 shadow-xl">
          {/* Close Icon */}
          <div
            className="flex justify-end p-4 text-2xl text-gray-800"
            onClick={() => setOpen(false)}
          ></div>

          {/* Menu Items */}
          <ul className="flex flex-col px-6 space-y-6   text-md">
            <li className="inline-block border-b-[1px] relative">
              <Link
                to="/"
                className="relative mr-[10px] w-[45px] cursor-pointer "
              >
                Home
              </Link>
            </li>
            <li className="inline-block border-b-[1px] relative">
              <Link
                to="/service"
                className="cursor-pointer hover:underline flex items-center gap-2 "
              >
                Our Services
                <GoChevronDown className="text-xs" />
              </Link>
            </li>
            <li className="inline-block border-b-[1px] relative ">
              <Link
                to="/locations"
                className="cursor-pointer hover:underline flex items-center gap-2 "
              >
                Locations
                <GoChevronDown className="text-xs right-0 " />
              </Link>
            </li>
            <li className="inline-block border-b-[1px] relative">
              <Link to="/gallery" className="cursor-pointer ">
                Gallery
              </Link>
            </li>
            <li className="inline-block border-b-[1px] relative">
              <Link to="/blogs" className="cursor-pointer ">
                Blogs
              </Link>
            </li>
            <li className="inline-block border-b-[1px]  relative">
              <Link href="/contact" className="cursor-pointer ">
                Contact Us
              </Link>
            </li>
          </ul>
          <a
            href="mailto:hello@karyasiddhico.work"
            className="flex items-center gap-2  mx-5 text-black mt-16 mb-1 pr-3"
          >
            <FaEnvelopeOpenText className=" text-black" />
            hello@karyasiddhico.work
          </a>
          <a
            href="tel:9669231006"
            className="flex items-center gap-2 text-black mx-5 mt-7  00 pr-3"
          >
            <FiPhoneCall className="text-black " />
            +91 88892 51000
          </a>
        </div>
      )}
      <div className="fixed bottom-0 left-0 w-[100%] h-[48px] z-50  shadow-xl sm:hidden flex items-center justify-center">
        <Button
          item="Book your seat"
          className="text-white text-center"
          buttonClass="w-full h-[60px] border-l-2 border-background  py-3  "
        />
      </div>
    </nav>
  );
}

export default NavBar;
