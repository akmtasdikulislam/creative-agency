import React from "react";
import WorkSlider from "./WorkSlider";

const OurWorks = () => {
  return (
    <section className="bg-accent py-16 md:py-20">
      <h2 className="mb-12 text-center text-2xl font-bold text-white md:text-4xl">
        Here are some of <span className="text-secondary">our works</span>
      </h2>
      <WorkSlider />
    </section>
  );
};

export default OurWorks;
