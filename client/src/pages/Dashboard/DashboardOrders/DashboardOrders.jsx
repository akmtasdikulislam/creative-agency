import SearchBar from "@/components/common/SearchBar/SearchBar";
import SortOptions from "@/components/common/SortOptions/SortOptions";
import DashboardOrderCard from "@/components/features/DashboardLayout/DashboardOrderCard/DashboardOrderCard";
import { updateTitle } from "@/utils/updateTitle";
import service1 from "@assets/icons/service-icons/service1.png";
import service2 from "@assets/icons/service-icons/service2.png";
import service3 from "@assets/icons/service-icons/service3.png";
import service4 from "@assets/icons/service-icons/service4.png";
import service5 from "@assets/icons/service-icons/service5.png";
import { useEffect } from "react";
import { useOutletContext } from "react-router";

const DashboardOrders = () => {
  const { setHeaderTitle } = useOutletContext();

  useEffect(() => {
    setHeaderTitle("Orders Management");
    return () => setHeaderTitle("Dashboard");
  }, [setHeaderTitle]);
  updateTitle("Orders - Dashboard");

  const ordersData = [
    {
      id: 1,
      title: "Graphic design",
      description:
        "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
      imageUrl: service1,
      status: "completed",
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "Professional and responsive websites built with modern technologies to enhance your online presence.",
      imageUrl: service3,
      status: "on-going",
    },

    {
      id: 2,
      title: "UI/UX Design",
      description:
        "User-centered design solutions that create seamless and engaging experiences for your customers.",
      imageUrl: service2,
      status: "completed",
    },
    {
      id: 4,
      title: "Digital Marketing",
      description:
        "Strategic marketing campaigns to boost your brand visibility and reach your target audience effectively.",
      imageUrl: service4,
      status: "pending",
    },
    {
      id: 5,
      title: "Content Creation",
      description:
        "Compelling content that tells your brand story and connects with your audience across all platforms.",
      imageUrl: service5,
      status: "pending",
    },
  ];

  return (
    <section className="h-full w-full">
      <div className="action-bar border-accent-200 flex flex-wrap items-center justify-center gap-4 border-b pb-10 md:justify-between">
        <SearchBar />
        <SortOptions />
      </div>
      <div className="tw-badge tw-badge-info badge-sm float-right mt-2 rounded-DEFAULT">
        Total: {ordersData.length}
      </div>
      <div className="mx-0 my-10 flex w-full flex-wrap justify-start gap-5 px-0">
        {ordersData.map((order) => (
          <DashboardOrderCard key={order.id} order={order} />
        ))}
      </div>
    </section>
  );
};

export default DashboardOrders;
