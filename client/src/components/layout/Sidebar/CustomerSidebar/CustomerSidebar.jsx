import Logo from "@/components/common/Logo/Logo";
import {
  HiOutlineCog8Tooth,
  HiOutlineShoppingBag,
  HiOutlineStar,
} from "react-icons/hi2";
import { NavLink } from "react-router";

const CustomerSidebar = () => {
  return (
    <nav className="flex h-screen w-full flex-col bg-white">
      <div className="flex items-center justify-center border-b border-gray-200 p-6">
        <Logo />
      </div>
      <div className="sidebar-links mt-6 flex flex-grow flex-col px-4">
        <NavLink to="/dashboard" end>
          <HiOutlineShoppingBag size="1.25em" />
          <span>Orders</span>
        </NavLink>
        <NavLink to="/dashboard/reviews">
          <HiOutlineStar size="1.25em" />
          <span>Reviews</span>
        </NavLink>
        <NavLink to="/dashboard/settings">
          <HiOutlineCog8Tooth size="1.25em" />
          <span>Settings</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default CustomerSidebar;
