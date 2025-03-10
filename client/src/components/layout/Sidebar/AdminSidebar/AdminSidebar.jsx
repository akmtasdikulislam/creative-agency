import Logo from "@/components/common/Logo/Logo";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineCog8Tooth,
  HiOutlineShoppingCart,
  HiOutlineUsers,
} from "react-icons/hi2";
import { NavLink } from "react-router";

const AdminSidebar = () => {
  return (
    <nav className="flex h-screen w-full flex-col bg-white">
      <div className="flex items-center justify-center border-b border-gray-200 p-6">
        <Logo />
      </div>
      <div className="sidebar-links mt-6 flex flex-grow flex-col px-4">
        <NavLink to="/dashboard" end>
          <HiOutlineClipboardDocumentList size="1.25em" />
          <span>Services</span>
        </NavLink>
        <NavLink to="/dashboard/orders">
          <HiOutlineShoppingCart size="1.25em" />
          <span>Orders</span>
        </NavLink>
        <NavLink to="/dashboard/users">
          <HiOutlineUsers size="1.25em" />
          <span>Users</span>
        </NavLink>
        <NavLink to="/dashboard/settings">
          <HiOutlineCog8Tooth size="1.25em" />
          <span>Settings</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default AdminSidebar;
