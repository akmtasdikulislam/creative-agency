import UserDropdown from "@/components/common/UserDropdown/UserDropdown";
import { HiOutlineBell } from "react-icons/hi2";

const DashboardHeader = ({ title, user }) => {
  return (
    <header className="flex w-full items-center justify-between bg-white px-4 py-4 md:px-8">
      <h4 className="font-bold">{title}</h4>
      <div className="flex items-center gap-4">
        <button className="hover:text-primary-600 cursor-pointer text-gray-700 transition-colors duration-300">
          <HiOutlineBell size="1.25em" />
        </button>
        <UserDropdown user={user} />
      </div>
    </header>
  );
};

export default DashboardHeader;
