const Interests = () => {
    const interests = [
      { title: "Photo Shoots", icon: "📸" },
      { title: "Advertisements", icon: "🎬" },
      { title: "Runway Collaborations", icon: "👠" },
      { title: "Web Series", icon: "📺" },
      { title: "Music Videos", icon: "🎶" },
    ];
  
    return (
      <div className="py-16 shadow-lg">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">My Areas of Interest</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10">
            I am passionate about exploring diverse aspects of the modeling and entertainment industry.
          </p>
  
          {/* Interest Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-11">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 ease-in-out 
                           hover:shadow-2xl hover:scale-105 hover:bg-gray-100"
              >
                <div className="text-5xl">{interest.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{interest.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Interests;
  