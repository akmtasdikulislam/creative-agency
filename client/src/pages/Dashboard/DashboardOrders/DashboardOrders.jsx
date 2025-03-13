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
      createdAt: "14 Mar 2025",
      attachments: [
        {
          fileName: "আমার_শখ_-_Logo_rjuptc",
          fileUrl:
            "https://res.cloudinary.com/assets-cloud/image/upload/v1741780042/%E0%A6%86%E0%A6%AE%E0%A6%BE%E0%A6%B0_%E0%A6%B6%E0%A6%96_-_Logo_rjuptc.ai",
          fileSize: 244137,
          fileType: "ai",
        },
        {
          fileName: "ServicesModal_obunkf",
          fileUrl:
            "https://res.cloudinary.com/assets-cloud/image/upload/v1741779944/ServicesModal_obunkf.jpg",
          fileSize: 51771,
          fileType: "jpg",
        },
      ],
    },
    {
      id: 3,
      title: "Web Development",
      description:
        "Professional and responsive websites built with modern technologies to enhance your online presence.",
      imageUrl: service3,
      status: "pending",
      createdAt: "22 Sep 2024",
      attachments: [
        {
          fileName: "Cloud_Hosting_swotxt",
          fileUrl:
            "https://res.cloudinary.com/assets-cloud/raw/upload/v1741779980/Cloud_Hosting_swotxt.xd",
          fileSize: 4276080,
          fileType: "xd",
        },
        {
          fileName: "Design_System_z1vv9b",
          fileUrl:
            "https://res.cloudinary.com/assets-cloud/image/upload/v1741779945/Design_System_z1vv9b.png",
          fileSize: 364096,
          fileType: "png",
        },
        {
          fileName: "Al-Aqsa_ednvra",
          fileUrl:
            "https://res.cloudinary.com/assets-cloud/raw/upload/v1741779944/Al-Aqsa_ednvra.zip",
          fileSize: 237978,
          fileType: "zip",
        },
      ],
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "User-centered design solutions that create seamless and engaging experiences for your customers.",
      imageUrl: service2,
      status: "completed",
      createdAt: "05 Dec 2024",
      attachments: [
        {
          fileName: "Creative_Agency_Design_qnrmhy",
          fileUrl:
            "https://res.cloudinary.com/assets-cloud/raw/upload/v1741779976/Creative_Agency_Design_qnrmhy.fig",
          fileSize: 4212085,
          fileType: "fig",
        },
        {
          fileName: "sketch_cwmide",
          fileUrl:
            "https://res.cloudinary.com/assets-cloud/image/upload/v1741779944/sketch_cwmide.svg",
          fileSize: 959,
          fileType: "svg",
        },
      ],
    },
    {
      id: 4,
      title: "Digital Marketing",
      description:
        "Strategic marketing campaigns to boost your brand visibility and reach your target audience effectively.",
      imageUrl: service4,
      status: "on-going",
      createdAt: "18 Jul 2025",
      attachments: [
        {
          fileName: "Print_PC_-_PC_Builder_-_Star_Tech_jc6eim",
          fileUrl:
            "https://res.cloudinary.com/assets-cloud/image/upload/v1741779945/Print_PC_-_PC_Builder_-_Star_Tech_jc6eim.pdf",
          fileSize: 115266,
          fileType: "pdf",
        },
      ],
    },
    {
      id: 5,
      title: "Content Creation",
      description:
        "Compelling content that tells your brand story and connects with your audience across all platforms.",
      imageUrl: service5,
      status: "pending",
      createdAt: "30 Jan 2025",
      attachments: [
        {
          fileName: "Imagining_Creative_Agency_m17yhg",
          fileUrl:
            "https://res.cloudinary.com/assets-cloud/raw/upload/v1741779945/Imagining_Creative_Agency_m17yhg.doc",
          fileSize: 88400,
          fileType: "doc",
        },
        {
          fileName: "Tailwind_UI_-_Sign_in_Page_wxyumm",
          fileUrl:
            "https://res.cloudinary.com/assets-cloud/image/upload/v1741779945/Tailwind_UI_-_Sign_in_Page_wxyumm.jpg",
          fileSize: 74276,
          fileType: "jpg",
        },
      ],
    },
    {
      id: 6,
      title: "Social Media Management",
      description:
        "Complete social media management including content planning, scheduling, and engagement tracking.",
      imageUrl: service5,
      status: "completed",
      createdAt: "15 Mar 2025",
      attachments: [],
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
