import React from "react";
import NavBar from "../component/NavBar.jsx";

import ExtraSection from "../Component/ExtraSection.jsx";
import Footer1 from "../Component/Footer1";
import WhatsappButton from "../Component/WhatsappButton.jsx";
import { useState, useEffect } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IdFetch } from "../Component/IdFetch.jsx";

const API_BASE_URL =
  "https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder";
function LocationPage() {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const websiteID = await IdFetch();
        const response = await fetch(
          `${API_BASE_URL}/website/branch-management/get-all-branches/${websiteID}`
        );
        const result = await response.json();
        setBranches(result?.data || []);
      } catch (error) {
        console.error("Failed to fetch branches:", error);
      }
    };

    fetchBranches();
  }, []);
  return (
    <div>
      <NavBar />
      <ExtraSection
        mode="breadcrumb"
        breadcrumbLinks={[
          { label: "Home", path: "/" },
          { label: "Locations", path: "/locations" },
        ]}
      />
      <WhatsappButton />

      <div className="pt-[111px] pb-[120px] relative px-4 mx-auto xl:max-w-[1200px] lg:max-w-[960px] md:max-w-[720px] max-w-[540px]">
        <div className="flex  flex-wrap justify-center ">
          {branches.map((branch) => (
            <div className="lg:flex-1/3 lg:max-w-[34.3333%] group transition-all   md:flex-[58.888%] md:max-w-[58.888%] flex-1 max-w-full relative px-4 mt-[10px]">
              <div className="overflow-hidden ">
                <div className="transform transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105 origin-center">
                  <img
                    src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${branch.basicDetails.logo}`}
                    alt=""
                  />
                </div>
              </div>
              <div className=" border-2 h-[320px] hover:shadow-md  border-[#f7eae8] border-t-0 lg:pt-[53px] pt-[30px] sm:px-[60px] lg:px-[30px] px-[30px] pb-[40px]">
                <div className="sm:ml-5 ml-0">
                  <ul>
                    <li className="text-[14px] font-[500] text-[#817a78]">
                      {branch.basicDetails.city}
                    </li>
                  </ul>
                  <h3 className="text-[24px] group-hover:text-redwala leading-[36px] pt-[5px] pb-[10px] font-bold text-[ #3f3836] tracking-[-1.5px]">
                    {branch.basicDetails.name}
                  </h3>
                  <ul className="leading-[30px]">
                    <li className="text-[14px] h-[90px]  font-medium text-[#817a78]">
                      <a href={branch.mapLink}>{branch.basicDetails.address}</a>
                    </li>
                  </ul>
                  <div className="flex gap-6">
                    <a
                      href=""
                      className="pr-4  translate-y-[27px] text-[20px] text-[#ff4332]"
                    >
                      <HiArrowRight className="w-[20px] mt-3 h-[20px]" />
                    </a>
                    <div className="pt-[20px] flex items-center">
                      <ul className="flex ">
                        <li className="mt-[5px] mb-[5px] flex items-center text-[18px]">
                          <a
                            href={`tel: ${branch.basicDetails.mobileNumber}`}
                            className="mr-[10px]"
                          >
                            <div className=" top-0 h-[44px] w-[44px] left-0 right-0 bottom-0 rounded-full text-[20px] text-[#ff4332] bg-[#fbf0ee]">
                              <FaPhoneAlt className="relative top-[12px] left-[12px] pr-0 z-20" />
                            </div>
                          </a>
                        </li>
                        <li className="mt-[5px] mb-[5px] flex items-center text-[18px]">
                          <a
                            href={`https://api.whatsapp.com/send?phone=${branch.basicDetails.mobileNumber}&text=Hello,%20I’m%20reaching%20out%20for%20more%20info.}`}
                            className="mr-[10px]"
                          >
                            <div className=" top-0 h-[44px] w-[44px] left-0 right-0 bottom-0 rounded-full text-[20px] text-[#ff4332] bg-[#fbf0ee]">
                              <FaWhatsapp className="relative top-[12px] left-[12px] pr-0 z-20" />
                            </div>
                          </a>
                        </li>
                        <li className="mt-[5px] mb-[5px] flex items-center text-[18px]">
                          <a
                            href={`mailto:${branch.basicDetails.email}`}
                            className="mr-[10px]"
                          >
                            <div className=" top-0 h-[44px] w-[44px] left-0 right-0 bottom-0 rounded-full text-[20px] text-[#ff4332] bg-[#fbf0ee]">
                              <FaEnvelope className="relative top-[12px] left-[12px] pr-0 z-20" />
                            </div>
                          </a>
                        </li>
                        <li className="mt-[5px] mb-[5px] flex items-center text-[18px]">
                          <a
                            href={`mailto:${branch.basicDetails.email}`}
                            className="mr-[10px]"
                          >
                            <div className=" top-0 h-[44px] w-[44px] left-0 right-0 bottom-0 rounded-full text-[20px] text-[#ff4332] bg-[#fbf0ee]">
                              <FaMapMarkerAlt className="relative top-[12px] left-[12px] pr-0 z-20" />
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer1 />
    </div>
  );
}

export default LocationPage;
