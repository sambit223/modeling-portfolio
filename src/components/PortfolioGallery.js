import React from "react";
import image1 from "../assets/white jean runway.jpg";
import image2 from "../assets/leh2.jpg";
import image3 from "../assets/saree.jpg";
import image4 from "../assets/pink black.jpg";
import image5 from "../assets/purple.jpg";
import image6 from "../assets/black backstage.jpeg";
import image7 from "../assets/dandelui.jpg";
import image8 from "../assets/white.jpg";

const images = [
    { src: image1, caption: "Runway Look – Classic White Denim" },
    { src: image2, caption: "Indoor Beauty Shoot – Natural Aesthetic" },
    { src: image3, caption: "Handloom Campaign – Odisha Heritage" },
    { src: image4, caption: "Streetwear look – Effortless Casual" },
    { src: image5, caption: "Cultural Fashion Story – Temple Series" },
    { src: image6, caption: "Designer Collaboration – Swaah Label" },
    { src: image7, caption: "Traditional Elegance – Red Lehenga Series" },
    { src: image8, caption: "Contemporary Ethnic Wear – Functional Edit" },
  ];
  

const PortfolioGallery = () => {
  return (
    <div className="min-h-screen py-12 px-6 border-t-0 shadow-sm">
      <h1 className="text-5xl font-bold text-center text-gray-900 mb-2">My Portfolio Gallery</h1>
      <p className="text-center text-lg text-gray-700 mb-10">
        Showcasing my journey through fashion, editorial, and brand collaborations.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden shadow-lg border border-gray-200 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={image.src}
              alt={`Portfolio ${index + 1}`}
              className="w-full h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-md rounded-2xl">
              <p className="text-white text-lg font-semibold px-6 text-center drop-shadow-lg">
                {image.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGallery;
