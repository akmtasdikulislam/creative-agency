import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Outlet, useLocation } from "react-router";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import AdminSidebar from "../Sidebar/AdminSidebar/AdminSidebar";
import CustomerSidebar from "../Sidebar/CustomerSidebar/CustomerSidebar";

const DashboardLayout = () => {
  const [headerTitle, setHeaderTitle] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const { user } = useAuth();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && sidebarOpen) {
        setSidebarOpen(false);
        document.body.classList.remove("overflow-hidden");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sidebarOpen]);

  useEffect(() => {
    if (window.innerWidth < 1024 && sidebarOpen) {
      setSidebarOpen(false);
      document.body.classList.remove("overflow-hidden");
    }
  }, [location.pathname]);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <div
        onClick={toggleSidebar}
        className={`fixed inset-0 z-20 bg-black/50 transition-opacity duration-300 lg:hidden ${
          sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        className={`fixed left-0 top-0 z-30 h-screen w-64 border-r border-gray-200 bg-white transition-transform duration-300 ${
          sidebarOpen
            ? "translate-x-0 shadow-lg"
            : "-translate-x-full shadow-none lg:translate-x-0"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="hover:bg-accent-100 hover:text-primary-600 absolute right-4 top-4 cursor-pointer rounded-full p-1 text-gray-700 transition-all duration-300 focus:outline-none lg:hidden"
          aria-label="Close sidebar"
        >
          <HiOutlineX size="1.25em" />
        </button>
        {user.role === "admin" ? <AdminSidebar /> : <CustomerSidebar />}
      </div>

      <div className="flex h-screen flex-col overflow-x-hidden transition-all duration-300 lg:ml-64">
        <div className="fixed right-0 top-0 z-10 w-full bg-white shadow-sm lg:w-[calc(100%-16rem)]">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="hover:text-primary-600 cursor-pointer p-4 text-gray-700 transition-all duration-300 focus:outline-none lg:hidden"
            >
              <HiOutlineMenu size="1.5em" />
            </button>
            <DashboardHeader title={headerTitle} user={user} />
          </div>
        </div>

        <div className="bg-accent-100 flex flex-1 flex-col overflow-x-hidden pt-16">
          <div className="flex flex-1 flex-col p-8">
            <div className="w-full flex-1 rounded-lg bg-white p-8">
              <Outlet context={{ setHeaderTitle }} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
