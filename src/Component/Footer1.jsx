import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer1() {
  return (
    <div className="bg-foocolor relative w-full min-h-[600px] md:h-full h-[1320px] flex flex-col items-center justify-start  px-4">
      {/* Background Overlay Image */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-[24vw] object-cover opacity-5 brightness-[2]"
          src="/Images/block2.png"
          alt=""
        />
      </div>
      {/* Footer Logo in Center */}
      <a href="https://www.karyasiddhico.work/"></a>
      <img
        className="absolute bottom-0 w-64 md:w-80 left-1/2
      -translate-x-1/2 opacity-10 brightness-[2] z-0"
        src="/Images/footer-logo1.png"
        alt=""
      />
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1200px] flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 mt-8">
        {/* Brand Column */}
        <div className="flex flex-col items-start">
          <img
            className="w-44 md:w-80"
            src="/Images/Flogo.png"
            alt="Footer Logo"
          />
          <p className="text-greywala font-semibold mt-4 text-[15px] md:ml-7 leading-7 w-full max-w-xs">
            Karyasiddhi is a dynamic co-working space that fosters productivity,
            creativity, and relaxation—where inspiration and focus come together
            for your success.
          </p>
          <a
            href="mailto:hello@karyasiddhico.work"
            className="text-redwala mt-6 text-md font-semibold md:ml-6 leading-7"
          >
            hello@karyasiddhico.work
          </a>
          <a
            href="tel:9669231006"
            className="text-redwala  text-md font-semibold md:ml-6 leading-7"
          >
            +91 9669231006
          </a>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:mt-12 sm:flex-row gap-10 sm:gap-20">
          {/* Important Links */}
          <div className="flex flex-col text-sm md:text-md text-greywala font-semibold gap-3">
            <h1 className="text-white text-[18px]  mb-4">Important Links</h1>
            <Link to="/" className="hover:text-redwala text-[15px]">
              Home
            </Link>
            <Link to="/locations" className="hover:text-redwala  text-[15px]">
              Locations
            </Link>
            <Link to="/gallery" className="hover:text-redwala  text-[15px]">
              Gallery
            </Link>
            <Link to="/blogs" className="hover:text-redwala  text-[15px]">
              Blogs
            </Link>
            <Link to="#" className="hover:text-redwala  text-[15px]">
              Career
            </Link>
            <Link to="/contact" className="hover:text-redwala  text-[15px]">
              Contact us
            </Link>
          </div>

          {/* Services */}
          <div className="flex flex-col text-sm md:text-md text-greywala font-semibold gap-3">
            <h1 className="text-white text-[18px] mb-4">Our Services</h1>
            <a className="hover:text-redwala  text-lg" href="#">
              Coworking Seat
            </a>
            <a className="hover:text-redwala  text-[15px]" href="#">
              Private office (Cabin)
            </a>
            <a className="hover:text-redwala text-[15px]" href="#">
              Meeting Room (Per Hour)
            </a>
            <a className="hover:text-redwala  text-[15px]" href="#">
              One Day Pass
            </a>
            <a className="hover:text-redwala  text-[15px]" href="#">
              Weekly Pass
            </a>
          </div>

          {/* Policies */}
          <div className="flex flex-col text-sm md:text-md text-greywala font-semibold gap-3">
            <h1 className="text-white text-[18px] mb-4">Policies</h1>
            <a className="hover:text-redwala    text-[15px]" href="#">
              Privacy policy
            </a>
            <a className="hover:text-redwala  text-[15px]" href="#">
              Terms & Condition
            </a>
            <a className="hover:text-redwala  text-[15px]" href="#">
              Return & refund policy
            </a>
          </div>
        </div>
      </div>
      {/* Divider */}
      <hr className="w-full border-t border-greywala/10 mt-6 md:mt-24 max-w-[1200px] z-10" />
      {/* Bottom Bar */}
      <div className="relative z-10 flex flex-col mt-5 md:mt-12 md:flex-row justify-between items-center w-full max-w-[1200px] px-2 text-center md:text-left gap-6 pb-8">
        <h1 className="text-greywala text-sm">
          Copyright © 2025 by{" "}
          <span className="text-white hover:text-redwala">Karyasiddhi</span>
        </h1>

        <div className="flex gap-4 text-lg sm:mt-0 mt-2 text-white items-center">
          <FaFacebookSquare className="bg-black/30 hover:bg-redwala border-black w-10 h-10 p-2.5 rounded-full cursor-pointer" />
          <FaSquareXTwitter className="bg-black/30 hover:bg-redwala border-black w-10 h-10 p-2.5 rounded-full cursor-pointer" />
          <FaInstagram className="bg-black/30 hover:bg-redwala border-black w-10 h-10 p-2.5 rounded-full cursor-pointer" />
          <FaLinkedinIn className="bg-black/30 hover:bg-redwala border-black w-10 h-10 p-2.5 rounded-full cursor-pointer" />
        </div>

        <h1 className="text-greywala text-sm">
          Powered By
          <span className="text-white hover:text-redwala">Technolitics</span>
        </h1>
      </div>
    </div>
  );
}

export default Footer1;
