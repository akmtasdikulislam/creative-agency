import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";

const Header = () => {
  return (
    <div className="relative flex h-screen flex-col items-start">
      <div className="clip-diagonal absolute -z-10 h-full w-full bg-amber-400"></div>
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Header;
