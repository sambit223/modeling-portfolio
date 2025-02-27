import React from "react";
import profilePic from "../assets/white jean runway.jpg"; // Replace with your actual profile image

const ModelStats = () => {
  return (
    <div className="p-6">
      {/* Profile & Stats Section */}
      <div className="flex flex-col md:flex-row items-center  shadow-lg rounded-lg p-8  w-full">
        {/* Profile Picture */}
        <div className="w-60 h-60 overflow-hidden rounded-full border-4 border-pink-400 shadow-lg">
          <img src={profilePic} alt="Model Profile" className="w-full h-full object-cover" />
        </div>

        {/* Stats Panel */}
        <div className="flex-1 text-center md:text-left mt-6 md:mt-0 md:ml-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Model Statistics</h1>
          <p className="text-gray-600 text-lg">Representing elegance, style, and confidence.</p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 text-gray-700">
            <div className="text-center border-l-4 border-pink-400 pl-4">
              <p className="text-lg font-semibold">Height</p>
              <p className="text-2xl font-bold">163cm / 5.41ft</p>
            </div>
            <div className="text-center border-l-4 border-pink-400 pl-4">
              <p className="text-lg font-semibold">Weight</p>
              <p className="text-2xl font-bold">52 kg</p>
            </div>
            <div className="text-center border-l-4 border-pink-400 pl-4">
              <p className="text-lg font-semibold">Shoulders</p>
              <p className="text-2xl font-bold">15"</p>
            </div>
            <div className="text-center border-l-4 border-pink-400 pl-4">
              <p className="text-lg font-semibold">Bust</p>
              <p className="text-2xl font-bold">32"</p>
            </div>
            <div className="text-center border-l-4 border-pink-400 pl-4">
              <p className="text-lg font-semibold">Waist</p>
              <p className="text-2xl font-bold">26"</p>
            </div>
            <div className="text-center border-l-4 border-pink-400 pl-4">
              <p className="text-lg font-semibold">Hips</p>
              <p className="text-2xl font-bold">38"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Showcase */}
      
    </div>
  );
};

export default ModelStats;
