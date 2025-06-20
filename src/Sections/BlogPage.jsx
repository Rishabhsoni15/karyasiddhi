import React from "react";
import NavBar from "../component/NavBar";
import Blogs from "../component/Blogs";
import Footer1 from "../component/Footer1";
import ExtraSection from "../Component/ExtraSection";
import WhatsappButton from "../Component/WhatsappButton";

function BlogPage() {
  return (
    <div className="w-full overflow-hidden">
      <NavBar />
      <WhatsappButton />

      <ExtraSection
        mode="breadcrumb"
        breadcrumbLinks={[
          { label: "Home", path: "/" },
          { label: "Blogs", path: "/blogs" },
        ]}
      />

      <Blogs />
      <Footer1 />
    </div>
  );
}

export default BlogPage;
