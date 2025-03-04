import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";

const Header = () => {
  return (
    <div className="relative flex max-h-max min-h-screen flex-col items-start overflow-x-hidden">
      <div className="clip-diagonal bg-primary absolute -z-10 h-full w-full"></div>
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Header;
