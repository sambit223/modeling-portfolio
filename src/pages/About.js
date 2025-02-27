import profile from '../assets/lehenga.jpg';

const About = () => {
  return (
    <div className="p-12 md:p-12 shadow-md">
      {/* Flex container - Switched left and right */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-8">
        
        {/* Right Section - Description (Moved to Left) */}
        <div className="w-full md:w-1/2 text-gray-800 text-base sm:text-lg leading-relaxed px-4 order-2 md:order-1">
          <p>
            Hi, I’m <strong>Sunena Sahu</strong>, a fashion model from Gajapati, Odisha. I have worked with multiple brands, 
            walked various runways, and won titles like <strong>Miss Most Confident 2023</strong> and <strong>Rojo Queen 2022</strong>.
          </p>
          <p className="mt-4">
            This website is my portfolio, showcasing my modeling journey, projects, brand collaborations, and achievements. 
            Here, you’ll find my best work, including runway moments, fashion campaigns, and photoshoots. Feel free to 
            explore and connect with me for future opportunities!
          </p>
        </div>

        {/* Left Section - Profile Picture + Name & Title (Moved to Right) */}
        <div className="w-full md:w-1/2 text-center md:text-right order-1 md:order-2">
          {/* Profile Picture */}
          <div className="flex justify-center md:justify-end mb-4">
            <img
              src={profile}
              alt="Sunena Sahu"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-lg border-4 border-gray-300 object-cover"
            />
          </div>

          {/* Name & Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
            Sunena Sahu
          </h1>
          <h4 className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium">
            Model Portfolio
          </h4>
        </div>
      </div>
    </div>
  );
};

export default About;
