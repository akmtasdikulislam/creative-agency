import DashboardUsers from "@/pages/Dashboard/DashboardUsers/DashboardUsers";
import AuthLayout from "@components/layout/Auth/AuthLayout";
import DashboardLayout from "@components/layout/DashboardLayout/DashboardLayout";
import MainLayout from "@components/layout/MainLayout/MainLayout";
import ForgotPassword from "@pages/Auth/ForgotPassword/ForgotPassword";
import SignIn from "@pages/Auth/SignIn/SignIn";
import SignUp from "@pages/Auth/Signup/Signup";
import DashboardIndex from "@pages/Dashboard/DashboardIndex/DashboardIndex";
import DashboardOrders from "@pages/Dashboard/DashboardOrders/DashboardOrders";
import DashboardReviews from "@pages/Dashboard/DashboardReviews/DashboardReviews";
import DashboardSettings from "@pages/Dashboard/DashboardSettings/DashboardSettings";
import Home from "@pages/Home/Home";
import NotFound from "@pages/NotFound/NotFound";
import Services from "@pages/Services/Services";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        index: true,
        element: <DashboardIndex />,
      },
      {
        path: "/dashboard/users",
        element: <DashboardUsers />,
      },
      {
        path: "/dashboard/orders",
        element: <DashboardOrders />,
      },
      {
        path: "/dashboard/settings",
        element: <DashboardSettings />,
      },
      {
        path: "/dashboard/reviews",
        element: <DashboardReviews />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
