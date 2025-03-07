import BrandPartners from "@components/sections/Home/BrandPartners/BrandPartners";
import ContactSection from "@components/sections/Home/ContactSection/ContactSection";
import MainHeader from "@components/sections/Home/MainHeader/MainHeader";
import PortfolioSection from "@components/sections/Home/PortfolioSection/PortfolioSection";
import ReviewSection from "@components/sections/Home/ReviewSection/ReviewSection";
import ServiceSection from "@components/sections/Home/ServiceSection/ServiceSection";

const Home = () => {
  return (
    <main className="max-w-screen min-h-screen">
      <MainHeader />
      <BrandPartners />
      <ServiceSection />
      <PortfolioSection />
      <ReviewSection />
      <ContactSection />
      {/*
      <ContactUs /> */}
    </main>
  );
};

export default Home;
