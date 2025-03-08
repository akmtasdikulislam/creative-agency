import Button from "@/components/common/Button/Button";
import HeroIllustration from "@assets/images/hero-section/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="xl:px-30 my-auto flex h-full w-full flex-col-reverse items-center justify-center gap-5 px-5 md:flex-row md:justify-between md:gap-5 md:px-10 lg:my-0 lg:gap-10 lg:px-20">
      <div className="md:min-w-1/3 xl:max-w-1/2 2xl:max-w-1/3 w-full flex-auto">
        <h1 className="text-4xl font-bold md:text-5xl xl:text-7xl">
          Let's Grow Your Brand To The Next Level
        </h1>
        <p className="text-default-color my-5 sm:my-10">
          Discover our expert team dedicated to elevating your brand through
          innovative digital solutions. We specialize in creating impactful
          strategies and stunning designs that drive real results.
        </p>
        <Button variant="primary">Hire us</Button>
      </div>
      <div className="xl:max-w-2/4 md:max-w-2/3 2xl:max-w-auto h-fit w-full flex-auto 2xl:h-full">
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
