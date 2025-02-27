import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-100 text-gray-900 py-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-center md:text-left">
        
        {/* Email Section */}
        <p className="text-lg font-medium">
          Reach out at:
          <a
            href="mailto:sunenasahu4@gmail.com"
            className="font-semibold text-gray-800 ml-1 underline hover:text-gray-600 transition duration-300"
          >
            sunenasahu4@gmail.com
          </a>
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/_sunenasahu_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-800 hover:text-gray-600 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100053072297260&ref=ig_profile_ac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-800 hover:text-gray-600 transition duration-300"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-700 mt-4 md:mt-0">
          &copy; 2024 My Portfolio | All Rights Reserved
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
