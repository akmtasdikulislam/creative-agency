import Navbar from "@components/layout/Navigation/Navbar";
import HeroSection from "@components/sections/Home/HeroSection/HeroSection";
import React from "react";

const MainHeader = () => {
  return (
    <div className="relative flex max-h-max min-h-screen flex-col items-start overflow-x-hidden">
      <div className="clip-diagonal bg-primary absolute -z-10 h-full w-full"></div>
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default MainHeader;
