import React from "react";
import airbnbLogo from "../../assets/images/logos/airbnb.png";
import googleLogo from "../../assets/images/logos/google.png";
import netflixLogo from "../../assets/images/logos/netflix.png";
import slackLogo from "../../assets/images/logos/slack.png";
import uberLogo from "../../assets/images/logos/uber.png";

const TrustedPartners = () => {
  const partners = [
    { id: 1, name: "Slack", image: slackLogo },
    { id: 2, name: "Google", image: googleLogo },
    { id: 3, name: "Uber", image: uberLogo },
    { id: 4, name: "Netflix", image: netflixLogo },
    { id: 5, name: "Airbnb", image: airbnbLogo },
  ];
  return (
    <section className="lg:max-w-3/4 my-5 flex flex-wrap items-center justify-center gap-5 px-10 md:my-10 lg:mx-auto lg:gap-10 2xl:gap-20">
      {partners.map((partner) => (
        <img
          src={partner.image}
          alt={partner.name}
          className="h-auto max-w-32 flex-auto 2xl:max-w-40"
        />
      ))}
    </section>
  );
};

export default TrustedPartners;
