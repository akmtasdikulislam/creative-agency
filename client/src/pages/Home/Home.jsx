import React from "react";
import Header from "../../components/Home/Header/Header";
import Reviews from "../../components/Home/Reviews/Reviews";
import Services from "../../components/Home/Services/Services";
import TrustedPartners from "../../components/TrustedPartners/TrustedPartners";

const Home = () => {
  return (
    <main className="max-w-screen min-h-screen">
      <Header />
      <TrustedPartners />
      <Services />
      <Reviews />
    </main>
  );
};

export default Home;
