import Button from "@/components/common/Button/Button";
import SearchBar from "@/components/common/SearchBar/SearchBar";
import SortOptions from "@/components/common/SortOptions/SortOptions";
import DashboardServiceCard from "@/components/features/DashboardLayout/DashboardServiceCard/DashboardServiceCard";
import { updateTitle } from "@/utils/updateTitle";
import service1 from "@assets/icons/service-icons/service1.png";
import service2 from "@assets/icons/service-icons/service2.png";
import service3 from "@assets/icons/service-icons/service3.png";
import service4 from "@assets/icons/service-icons/service4.png";
import service5 from "@assets/icons/service-icons/service5.png";
import { useEffect } from "react";
import { HiPlus } from "react-icons/hi2";
import { useOutletContext } from "react-router";

const DashboardServices = () => {
  const { setHeaderTitle } = useOutletContext();

  useEffect(() => {
    setHeaderTitle("Services Management");
    return () => setHeaderTitle("Dashboard");
  }, [setHeaderTitle]);

  updateTitle("Services - Dashboard");
  const servicesData = [
    {
      id: 1,
      title: "Graphic design",
      description:
        "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
      imageUrl: service1,
      status: "active",
      createdAt: "14 Mar 2025",
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "Professional and responsive websites built with modern technologies to enhance your online presence.",
      imageUrl: service3,
      status: "active",
      createdAt: "22 Sep 2024",
    },

    {
      id: 2,
      title: "UI/UX Design",
      description:
        "User-centered design solutions that create seamless and engaging experiences for your customers.",
      imageUrl: service2,
      status: "inactive",
      createdAt: "05 Dec 2024",
    },
    {
      id: 4,
      title: "Digital Marketing",
      description:
        "Strategic marketing campaigns to boost your brand visibility and reach your target audience effectively.",
      imageUrl: service4,
      status: "inactive",
      createdAt: "18 Jul 2025",
    },
    {
      id: 5,
      title: "Content Creation",
      description:
        "Compelling content that tells your brand story and connects with your audience across all platforms.",
      imageUrl: service5,
      status: "active",
      createdAt: "30 Jan 2025",
    },
  ];
  return (
    <section className="h-full w-full">
      <div className="action-bar border-accent-200 flex flex-wrap items-center justify-between gap-4 border-b pb-10">
        <SearchBar />
        <div className="flex items-center gap-4">
          <SortOptions />
          <Button
            variant="primary"
            size="sm"
            className="flex-auto md:flex-none"
          >
            <HiPlus size="1.25em" />
            <span className="hidden md:block">Add new</span>
          </Button>
        </div>
      </div>
      <div className="tw-badge tw-badge-info badge-sm float-right mt-2 rounded-DEFAULT">
        Total: {servicesData.length}
      </div>
      <div className="mx-0 my-10 flex w-full flex-wrap justify-start gap-5 px-0">
        {servicesData.map((service) => (
          <DashboardServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default DashboardServices;
