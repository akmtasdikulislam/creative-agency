import React from "react";
import PortfolioCarousel from "./PortfolioCarousel";

const PortfolioSection = () => {
  return (
    <section className="bg-accent py-16 md:py-20">
      <h2 className="mb-12 text-center text-2xl font-bold text-white md:text-4xl">
        Here are some of <span className="text-secondary">our works</span>
      </h2>
      <PortfolioCarousel />
    </section>
  );
};

export default PortfolioSection;
