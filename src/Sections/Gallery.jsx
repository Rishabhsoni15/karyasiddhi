import React, { useEffect, useState } from "react";
import NavBar from "../Component/NavBar.jsx";
import Footer1 from "../Component/Footer1.jsx";
import ExtraSection from "../Component/ExtraSection.jsx";
import GallerySection from "../Component/GallerySection.jsx";
import { IdFetch } from "../Component/IdFetch.jsx";
import WhatsappButton from "../Component/WhatsappButton.jsx";
const Gallery = () => {
  const [allImages, setAllImages] = useState([]);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const id = await IdFetch();
      const res = await fetch(
        `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/gallery/get-all-galleries/${id}`
      );
      const data = await res.json();

      const images = data.data.flatMap((item) =>
        item.mediaDetails.images.map((imgUrl) => ({
          url: `https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${imgUrl}`,
          title: item.title,
        }))
      );

      const uniqueTitles = Array.from(
        new Set(data.data.map((item) => item.title))
      );

      setAllImages(images);
      setTitles(uniqueTitles);
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <WhatsappButton />
      <ExtraSection type="gallery" mode="filter" />
      <GallerySection allImages={allImages} />
      <Footer1 />
    </>
  );
};

export default Gallery;
