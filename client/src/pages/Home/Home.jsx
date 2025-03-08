import MainHeader from "@/components/sections/Home/MainHeader/MainHeader";
import { updateTitle } from "@/utils/updateTitle";
import BrandPartners from "@components/sections/Home/BrandPartners/BrandPartners";
import ContactSection from "@components/sections/Home/ContactSection/ContactSection";
import PortfolioSection from "@components/sections/Home/PortfolioSection/PortfolioSection";
import ReviewSection from "@components/sections/Home/ReviewSection/ReviewSection";
import ServiceSection from "@components/sections/Home/ServiceSection/ServiceSection";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    updateTitle("Home");
  }, []);
  return (
    <>
      <MainHeader />
      <BrandPartners />
      <ServiceSection />
      <PortfolioSection />
      <ReviewSection />
      <ContactSection />
    </>
  );
};

export default Home;
