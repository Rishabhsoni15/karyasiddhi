import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IdFetch } from "../Component/IdFetch.jsx";

function ExtraSection({
  type = "gallery",
  mode = "filter",
  breadcrumbLinks = [],
}) {
  const location = useLocation();
  const [titleOptions, setTitleOptions] = useState([
    { label: "All", path: "" },
  ]);

  const currentParams = new URLSearchParams(location.search);
  const rawTitle = currentParams.get("title");
  const activeTitle = rawTitle ? decodeURIComponent(rawTitle) : "All";

  const buildLink = (item) => {
    if (item.path) return item.path;
    const params = new URLSearchParams(location.search);
    if (item.label === "All") {
      params.delete("title");
    } else {
      params.set("title", item.label);
    }
    return `${location.pathname}?${params.toString()}`;
  };

  const displayTitle =
    mode === "breadcrumb"
      ? breadcrumbLinks[breadcrumbLinks.length - 1]?.label || "Page"
      : activeTitle === "All"
      ? type === "blogs"
        ? "Blogs"
        : "Gallery"
      : activeTitle;

  useEffect(() => {
    const fetchTitles = async () => {
      if (mode === "breadcrumb") return;
      const id = await IdFetch();
      let apiUrl = "";

      if (type === "gallery") {
        apiUrl = `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/gallery/get-all-galleries/${id}`;
      } else if (type === "blogs") {
        apiUrl = `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/blog/get-all-blogs/${id}`;
      }

      const res = await fetch(apiUrl);
      const data = await res.json();
      const items = data?.data || [];

      const uniqueTitles = Array.from(new Set(items.map((item) => item.title)));
      const options = [
        { label: "All", path: "" },
        ...uniqueTitles.map((t) => ({ label: t, path: "" })),
      ];

      setTitleOptions(options);
    };

    fetchTitles();
  }, [type, mode]);

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(/Images/bg.jpg)` }}
    >
      <div className="w-full px-4 mx-auto max-w-screen-xl">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:px-4 px-0">
            <div className="h-[350px] flex items-center relative">
              <h1 className="text-[60px] text-white pl-4 font-bold tracking-[-1.5px] m-0">
                {displayTitle}
              </h1>

              {/* FILTER MODE */}
              {mode === "filter" ? (
                <nav
                  className="absolute bg-CoBg right-0 bottom-0 w-full overflow-x-auto"
                  aria-label="filters"
                >
                  <ul className="flex items-center  h-auto overflow-x-auto overflow-y-hidden p-0 m-0 whitespace-nowrap scrollbar-default max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl">
                    {titleOptions.map((item) => {
                      const isActive = item.label.trim() === activeTitle.trim();
                      return (
                        <li key={item.label} className="inline-block">
                          <Link
                            to={buildLink(item)}
                            className={`inline-block whitespace-nowrap leading-[60px] text-[14px] px-[20px] font-semibold text-[#3f3836] ${
                              isActive
                                ? "bg-white text-black"
                                : "hover:bg-white"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              ) : (
                // BREADCRUMB MODE
                <nav
                  className="absolute right-0 bottom-0"
                  aria-label="breadcrumb"
                >
                  <ul className="p-0 m-0 flex rounded-none">
                    {breadcrumbLinks.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.path}
                          className={`leading-[60px] px-[30px] py-[22px] text-[14px] font-semibold text-[#3f3836] 
                            bg-[#fbf0ee] hover:bg-white`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExtraSection;
