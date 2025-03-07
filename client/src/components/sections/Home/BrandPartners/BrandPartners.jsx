import airbnbLogo from "@assets/images/brand-partners/airbnb.png";
import googleLogo from "@assets/images/brand-partners/google.png";
import netflixLogo from "@assets/images/brand-partners/netflix.png";
import slackLogo from "@assets/images/brand-partners/slack.png";
import uberLogo from "@assets/images/brand-partners/uber.png";

const BrandPartners = () => {
  const partners = [
    { id: 1, name: "Slack", image: slackLogo },
    { id: 2, name: "Google", image: googleLogo },
    { id: 3, name: "Uber", image: uberLogo },
    { id: 4, name: "Netflix", image: netflixLogo },
    { id: 5, name: "Airbnb", image: airbnbLogo },
  ];
  return (
    <section className="lg:max-w-3/4 my-5 flex flex-wrap items-center justify-center gap-5 px-5 md:my-10 md:px-10 lg:mx-auto lg:gap-10 2xl:gap-20">
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

export default BrandPartners;
