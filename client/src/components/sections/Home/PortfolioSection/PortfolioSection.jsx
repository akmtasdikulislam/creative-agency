import PortfolioCarousel from "@components/sections/Home/PortfolioSection/PortfolioCarousel";

const PortfolioSection = () => {
  return (
    <section className="bg-primary-content py-16 md:py-20">
      <h2 className="mb-12 text-center text-white">
        Here are some of <span className="text-highlight">our works</span>
      </h2>
      <PortfolioCarousel />
    </section>
  );
};

export default PortfolioSection;
