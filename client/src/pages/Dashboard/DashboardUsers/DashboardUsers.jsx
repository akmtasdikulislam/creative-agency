import SearchBar from "@/components/common/SearchBar/SearchBar";
import SortOptions from "@/components/common/SortOptions/SortOptions";
import DashboardUserCard from "@/components/features/DashboardLayout/DashboardUserCard/DashboardUserCard";
import { updateTitle } from "@/utils/updateTitle";
import { useEffect } from "react";
import { useOutletContext } from "react-router";

const DashboardUsers = () => {
  const { setHeaderTitle } = useOutletContext();

  useEffect(() => {
    setHeaderTitle("Users Management");
    return () => setHeaderTitle("Dashboard");
  }, [setHeaderTitle]);
  updateTitle("Users - Dashboard");

  const users = [
    {
      id: 1,
      name: "Akm Tasdikul Islam",
      email: "akmtasdikulislam@gmail.com",
      avatar:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      role: "admin",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@creative.agency",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      role: "customer",
    },
    {
      id: 3,
      name: "Michael Chen",
      email: "michael.chen@creative.agency",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      role: "customer",
    },
    {
      id: 4,
      name: "Emma Wilson",
      email: "emma.w@creative.agency",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      role: "customer",
    },
    {
      id: 5,
      name: "James Rodriguez",
      email: "james.r@creative.agency",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      role: "customer",
    },
    {
      id: 6,
      name: "Lisa Thompson",
      email: "lisa.t@creative.agency",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg",
      role: "admin",
    },
  ];

  return (
    <section className="h-full w-full">
      <div className="action-bar border-accent-200 flex flex-wrap items-center justify-center gap-4 border-b pb-10 md:justify-between">
        <SearchBar />
        <SortOptions />
      </div>
      <div className="tw-badge tw-badge-info badge-sm float-right mt-2 rounded-DEFAULT">
        Total: {users.length}
      </div>
      <div className="mx-0 my-10 flex w-full flex-wrap justify-start gap-5 px-0">
        {users.map((user) => (
          <DashboardUserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
};

export default DashboardUsers;
