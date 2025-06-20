import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./NavBar";
import ExtraSection from "./ExtraSection";
import Footer1 from "./Footer1";
import { IdFetch } from "./IdFetch";
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Blogs from "../component/Blogs.jsx";
import BookUrSeat from "./BookUrSeat.jsx";
import WhatsappButton from "../Component/WhatsappButton.jsx";

const BlogDetail = () => {
  const { state } = useLocation();
  const blog = state?.blog;
  const [post, setPost] = useState([]);
  const [expandedIndexes, setExpandedIndexes] = useState({});

  const toggleReadMore = (index) => {
    setExpandedIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    IdFetch().then((id) => {
      fetch(
        `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/post/get-post-by-slug/${id}?slug=${slug}`
      )
        .then((response) => response.json())
        .then((data) => {
          setPost(data.data);
        });
    });
  }, []);
  const [test, setTest] = useState([]);
  useEffect(() => {
    IdFetch().then((id) => {
      fetch(
        `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/testimonial/get-all-testimonials/${id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setTest(data.data);
        });
    });
  });
  useEffect(() => {
    IdFetch().then((id) => {
      fetch(
        `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/post/get-all-posts/${id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setPost(data.data);
        });
    });
  }, []);

  if (!blog) return <div className="p-10 text-center">Loading...</div>;
  const createSlug = (title) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  return (
    <>
      <Navbar />
      <WhatsappButton />
      <ExtraSection
        mode="breadcrumb"
        breadcrumbLinks={[
          { label: "Home", path: "/" },
          { label: "Blogs", path: "/blogs" },
        ]}
      />
      <div className="pt-[120px] w-full flex flex-col md:flex-row  justify-center">
        <div className="max-w-[770px] w-[100%] ">
          <div className="max-w-4xl mx-auto px-4 py-10">
            <img
              src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${blog.banner.image}`}
              alt="Banner"
              className="w-[100%] h-[513px] object-cover mb-6"
            />
            <h1 className="text-[44px] max-w-[770px] text-background font-bold mb-[30px] pr-[50px]">
              {blog.title}
            </h1>
            {/* Main Description */}
            <div
              className="text-[16px] text-[#817a78] leading-[34px] tracking-[0.7px] w-full mb-6"
              dangerouslySetInnerHTML={{ __html: blog.description }}
            />
            {/* Multiple Description if present */}
            {blog?.multipleDescriptions?.map((item, index) => (
              <div key={index} className="w-full ">
                <div
                  className="text-[16px] text-textg leading-[34px] space-y-16 mt-[30px] font-bold   tracking-[0.7px] w-full"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
                <div className="grid max-w-[770px] grid-cols-2 gap-[10px] mt-[25px] w-full">
                  {item.multipleImages.map((images, index) => (
                    <img
                      src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${images}`}
                      alt=""
                      className="w-full h-[224.4px] object-cover"
                    />
                  ))}
                </div>
              </div>
            ))}

            <hr className="w-full  border" />
            <div className="flex gap-4 py-[30px]  text-redwala">
              <FaFacebookSquare className="bg-CoBg border-black w-[50px] h-[50px] p-4 rounded-full cursor-pointer" />
              <FaSquareXTwitter className="bg-CoBg  border-black w-[50px] h-[50px] p-4 rounded-full cursor-pointer" />
              <FaInstagram className="bg-CoBg  border-black w-[50px] h-[50px] p-4 rounded-full cursor-pointer" />
              <FaLinkedinIn className="bg-CoBg  border-black w-[50px] h-[50px] p-4 rounded-full cursor-pointer" />
            </div>

            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{ delay: 5000 }}
              loop={true}
              slidesPerView={1}
              spaceBetween={0}
            >
              <SwiperSlide className="w-full">
                <div className="relative w-full h-[368px]">
                  <img
                    src="/Images/WorkIn.jpg"
                    alt="Carousel"
                    className="w-full sm:h-full h-[556px]  object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full">
                <div className="relative w-full h-[368px]">
                  <img
                    src="/Images/WorkIn2.jpg"
                    alt="Carousel"
                    className="w-full sm:h-full h-[556px]  object-cover"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="w-full h-[100%]  p-[30px] bg-CoBg  ">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                navigation={false}
                pagination={false}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 1,
                  },
                }}
              >
                {test.map((review, index) => {
                  const maxLength = 100;
                  const isLong = review.review?.length > maxLength;
                  const shortDesc = review.review?.slice(0, maxLength);
                  const isExpanded = expandedIndexes[index];

                  return (
                    <SwiperSlide key={index} className="w-full h-[231.6px]">
                      <div className="flex md:flex-row flex-col items-start ">
                        <img
                          src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${review.image}`}
                          alt="Review"
                          className="md:w-[170px] w-full h-full md:h-[170px] md:ml-0 ml-5 object-cover"
                        />
                        <div className="md:pl-[40px] pl-5">
                          <p className="text-[#3F3836] font-bold leading-[34px] text-[20px]">
                            {review.name}
                          </p>
                          <p className="text-[16px] text-redwala font-normal leading-[34px] tracking-[0.7px]">
                            {review.companyProfile}
                          </p>
                          <p className="text-[16px] font-semibold text-[#838999] leading-[34px] tracking-[0.7px]">
                            {isExpanded || !isLong
                              ? review.review
                              : `${shortDesc}... `}
                            {isLong && (
                              <button
                                className="inline-block font-normal text-[#ef2917] ml-1"
                                onClick={() => toggleReadMore(index)}
                              >
                                {isExpanded ? "Read Less" : "Read More"}
                              </button>
                            )}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="w-full h-[100%] mb-10  mt-10">
              <BookUrSeat heading="Get a call Back" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mb-20">
          <div className="w-[370px] relative active-home3 flex flex-col gap-10 border-2 mt-[39px] border-red-50 px-[50px] pt-[45px] pb-[43px] h-[730px]">
            <div className="text-[20px] mb-[30px] font-bold text-background">
              <h1>More Blogs</h1>
            </div>
            {post.map((item) => (
              <Link
                key={item._id}
                to={`/blog/${createSlug(item.title)}`}
                state={{ blog: item }}
                className="bg-white group-hover:bg-redwala overflow-hidden group transition-all duration-500"
              >
                <div className="flex w-[268px] ">
                  <img
                    src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${item.banner.image}`}
                    alt=""
                    className=" w-[65px] !h-[65px] object-cover"
                  />
                  <div className="">
                    <h3 className="text-[16px] ml-5 flex items-center hover:text-redwala  font-bold text-[#333] ">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="w-[370px] flex flex-col gap-4 border-2 mt-[39px] active-home3 relative border-red-50 px-[50px] pt-[45px] pb-[43px]">
            <p className="text-[20px] font-bold text-background">Tags </p>
            <div className="flex   flex-wrap gap-3">
              {blog?.seoDetails?.tags?.map((data, index) => (
                <p
                  className="text-textg hover:text-redwala cursor-pointer text-[16px]  font-semibold"
                  key={index}
                >
                  {data}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default BlogDetail;
