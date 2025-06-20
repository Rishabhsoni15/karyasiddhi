import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IdFetch } from "../Component/IdFetch.jsx";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [post, setPost] = useState([]);

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

  // Optional: Create slug from title
  const createSlug = (title) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  return (
    <div className="lg:px-6 px-2 py-12 max-w-screen-xl mx-auto">
      <h2 className="text-5xl font-bold mb-10 my-10 text-center">Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {post.map((item) => (
          <Link
            key={item._id}
            to={`/blog/${createSlug(item.title)}`}
            state={{ blog: item }}
            className="bg-white hover:shadow-md overflow-hidden group transition-all duration-500 w-full"
          >
            <div className="overflow-hidden">
              <div className="transform transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105 origin-center">
                <img
                  src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${item.banner.image}`}
                  alt="Web Banner"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
            <div className="p-4 border h-[265px] px-10 border-red-50 border-t-0 flex-1 flex flex-col justify-between">
              <h3 className="text-[24px] font-bold text-[#333] mb-2 mt-8 group-hover:text-[#ff4231]">
                {item.title}
              </h3>
              <div className="inline-flex items-center text-red-500  ">
                <FaArrowRight className="text-[#ff4231] mb-16 mt-[1.5rem] ml-3 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
