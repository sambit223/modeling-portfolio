import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import "./index.css";
import ProjectCard from "./components/ProjectCard";
import ModelStats from "./components/ModelStats";
import PortfolioGallery from "./components/PortfolioGallery";
import Interests from "./components/Interests";

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br from-pink-100 to-pink-300  text-gray-800">
        <Home />
        <About/>
        <ModelStats/>
        <ProjectCard/>
        <PortfolioGallery/>
        <Interests/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
