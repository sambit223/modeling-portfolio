const About = () => {
  return (
    <div className="p-6 md:p-12 border-b-0 shadow-md mb-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Name & Title */}
        <div className="md:w-1/2 text-center md:text-left ml-5">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">Sunena Sahu</h1>
          <h4 className="text-xl md:text-2xl text-gray-700 font-medium">Model Portfolio</h4>
        </div>

        {/* Right Section - Description */}
        <div className="md:w-1/2 mt-6 md:mt-0 text-gray-800 text-lg md:text-xl leading-relaxed px-4">
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
      </div>
    </div>
  );
};

export default About;
