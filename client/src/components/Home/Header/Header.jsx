import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";

const Header = () => {
  return (
    <div className="relative flex h-screen flex-col items-start">
      <div className="clip-diagonal bg-primary absolute -z-10 h-full w-full"></div>
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Header;
