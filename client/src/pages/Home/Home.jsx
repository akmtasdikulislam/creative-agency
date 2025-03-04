import React from "react";
import ContactUs from "../../components/Home/ContactUs/ContactUs";
import Header from "../../components/Home/Header/Header";
import OurWorks from "../../components/Home/OurWorks/OurWorks";
import Reviews from "../../components/Home/Reviews/Reviews";
import Services from "../../components/Home/Services/Services";
import TrustedPartners from "../../components/TrustedPartners/TrustedPartners";

const Home = () => {
  return (
    <main className="max-w-screen min-h-screen">
      <Header />
      <TrustedPartners />
      <Services />
      <OurWorks />
      <Reviews />
      <ContactUs />
    </main>
  );
};

export default Home;
