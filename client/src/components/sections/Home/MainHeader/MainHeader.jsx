import HeroSection from "@components/sections/Home/HeroSection/HeroSection";

const MainHeader = () => {
  return (
    <div className="relative mt-0 max-h-max min-h-[80vh] overflow-x-hidden transition-all duration-500 max-2xl:md:min-h-[55vh]">
      <div className="clip-diagonal bg-primary absolute -z-10 h-full w-full transition-all duration-500"></div>
      <HeroSection />
    </div>
  );
};

export default MainHeader;
