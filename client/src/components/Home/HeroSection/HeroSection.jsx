import React from "react";
import HeroIllustration from "../../../assets/images/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="xl:px-30 flex h-full w-full flex-col-reverse items-center justify-center gap-5 px-5 md:h-2/3 md:flex-row md:justify-between md:gap-5 md:px-10 lg:gap-10 lg:px-20">
      <div className="md:min-w-1/3 xl:max-w-1/2 2xl:max-w-1/3 w-full flex-auto">
        <h1 className="text-4xl font-bold md:text-5xl xl:text-7xl">
          Let's Grow Your Brand To The Next Level
        </h1>
        <p className="text-default my-5 sm:my-10">
          Discover our expert team dedicated to elevating your brand through
          innovative digital solutions. We specialize in creating impactful
          strategies and stunning designs that drive real results.
        </p>
        <button className="btn btn-neutral">Hire us</button>
      </div>
      <div className="xl:max-w-2/4 md:max-w-2/3 h-fit w-full flex-auto 2xl:max-w-4xl">
        <img
          className="h-full w-full object-contain"
          src={HeroIllustration}
          alt="Hero Illustration"
        />
      </div>
    </section>
  );
};

export default HeroSection;
