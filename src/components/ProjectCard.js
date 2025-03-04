import React from "react";
import image1 from "../assets/yellow bastra.jpeg";
import image2 from "../assets/model stage.jpeg";
import image3 from "../assets/black stage.jpeg";

const ProjectCard = () => {
  return (
    <div className="mt-10">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center text-center m-4">
        <h1 className="font-bold text-5xl mb-4 mt-8 text-pink-400 underline">
          Runway & Brand Stories: My Fashion Collaborations
        </h1>
        <p className="text-lg max-w-3xl text-gray-700 px-4">
          Every outfit tells a story, and every runway is a new chapter. Here are some of my collaborations where I had the opportunity to represent brands, embody their vision, and bring fashion to life. From runway walks to styled shoots, explore my journey through these featured projects.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-col items-center justify-center p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Project 1 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={image1}
              alt="Runway Collaboration"
              className="w-full h-80 object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
              <p className="text-white text-lg px-6 text-center">
                Representing <strong>Bastra V</strong> on the runway, showcasing their stunning traditional collection.
              </p>
            </div>
            <h3 className="text-center text-lg font-semibold mt-2 text-gray-800">
              Designer: Bastra V | Role: Show Opener
            </h3>
          </div>

          {/* Project 2 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={image2}
              alt="Styled Shoot"
              className="w-full h-80 object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
              <p className="text-white text-lg px-6 text-center">
                A creative photoshoot capturing the essence of modern elegance and high fashion.
              </p>
            </div>
            <h3 className="text-center text-lg font-semibold mt-2 text-gray-800">
              Designer: Crass V | Role: Showstopper
            </h3>
          </div>

          {/* Project 3 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src={image3}
              alt="Brand Partnership"
              className="w-full h-80 object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
              <p className="text-white text-lg px-6 text-center">
                Collaborating with <strong>Swaah</strong>, representing exclusive designer black lehengas on the runway.
              </p>
            </div>
            <h3 className="text-center text-lg font-semibold mt-2 text-gray-800">
              Designer: Swaah V | Role: Show Opener
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
