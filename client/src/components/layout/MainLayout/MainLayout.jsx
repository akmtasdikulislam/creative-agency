import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Navbar from "../Navigation/Navbar";

const MainLayout = () => {
  return (
    <main className="max-w-screen relative min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
