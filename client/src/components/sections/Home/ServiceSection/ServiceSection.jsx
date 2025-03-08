import ServicesList from "@/components/features/ServicesList/ServicesList";
import service1 from "@assets/icons/service-icons/service1.png";
import service2 from "@assets/icons/service-icons/service2.png";
import service3 from "@assets/icons/service-icons/service3.png";
import service4 from "@assets/icons/service-icons/service4.png";
import service5 from "@assets/icons/service-icons/service5.png";
import ServiceCard from "@components/sections/Home/ServiceSection/ServiceCard";
import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router";

const ServiceSection = () => {
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
    <section className="2xl:max-w-7/8 my-10 md:my-20 2xl:mx-auto">
      <div className="flex w-full flex-col items-center justify-center gap-5 sm:relative sm:gap-0">
        <h2 className="text-center text-2xl font-bold md:text-4xl">
          Provide awesome <span className="text-secondary">services</span>
        </h2>
        <Link
          className="text-secondary decoration-secondary flex -translate-y-1/2 items-center justify-center gap-2 underline underline-offset-2 hover:no-underline sm:absolute sm:right-8 sm:top-1/2 md:right-20"
          to="/services"
        >
          View all <HiArrowRight size={""} />
        </Link>
      </div>
      <ServicesList className={"mt-10"}>
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </ServicesList>
    </section>
  );
};

export default ServiceSection;
