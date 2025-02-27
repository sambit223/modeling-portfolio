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
  { src: image4, caption: "Streetwear Look – Effortless Casual" },
  { src: image5, caption: "Cultural Fashion Story – Temple Series" },
  { src: image6, caption: "Designer Collaboration – Swaah Label" },
  { src: image7, caption: "Traditional Elegance – Red Lehenga Series" },
  { src: image8, caption: "Contemporary Ethnic Wear – Functional Edit" },
];

const PortfolioGallery = () => (
  <section className="min-h-screen py-12 px-6 border-t-0 shadow-sm">
    <div className="text-center mb-10">
      <h1 className="text-5xl font-bold text-gray-900 mb-2">My Portfolio Gallery</h1>
      <p className="text-lg text-gray-700">Showcasing my journey through fashion, editorial, and brand collaborations.</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {images.map(({ src, caption }, index) => (
        <div
          key={index}
          className="relative group overflow-hidden shadow-lg border border-gray-200 rounded-xl transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <img
            src={src}
            alt={caption}
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-md">
            <p className="text-white text-lg font-semibold px-6 text-center drop-shadow-lg">{caption}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);


export default PortfolioGallery;
