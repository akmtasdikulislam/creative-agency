import ServicesList from "@/components/features/ServicesList/ServicesList";
import ServiceCard from "@/components/sections/Home/ServiceSection/ServiceCard";
import ServicesActionBar from "@/components/sections/Services/ServicesActionBar/ServicesActionBar";
import ServicesHeader from "@/components/sections/Services/ServicesHeader/ServicesHeader";
import { updateTitle } from "@/utils/updateTitle";
import service1 from "@assets/icons/service-icons/service1.png";
import service2 from "@assets/icons/service-icons/service2.png";
import service3 from "@assets/icons/service-icons/service3.png";
import service4 from "@assets/icons/service-icons/service4.png";
import service5 from "@assets/icons/service-icons/service5.png";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    updateTitle("Services");
  }, []);

  const servicesData = [
    {
      id: 1,
      title: "Graphic design",
      description:
        "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
      imageUrl: service1,
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "Professional and responsive websites built with modern technologies to enhance your online presence.",
      imageUrl: service3,
    },

    {
      id: 2,
      title: "UI/UX Design",
      description:
        "User-centered design solutions that create seamless and engaging experiences for your customers.",
      imageUrl: service2,
    },
    {
      id: 4,
      title: "Digital Marketing",
      description:
        "Strategic marketing campaigns to boost your brand visibility and reach your target audience effectively.",
      imageUrl: service4,
    },
    {
      id: 5,
      title: "Content Creation",
      description:
        "Compelling content that tells your brand story and connects with your audience across all platforms.",
      imageUrl: service5,
    },
  ];
  return (
    <>
      <ServicesHeader />
      <ServicesActionBar />
      <ServicesList className={"my-20"}>
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </ServicesList>
    </>
  );
};

export default Services;
