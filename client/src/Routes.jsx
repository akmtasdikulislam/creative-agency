import AuthLayout from "@components/layout/Auth/AuthLayout";
import MainLayout from "@components/layout/MainLayout/MainLayout";
import ForgotPassword from "@pages/Auth/ForgotPassword/ForgotPassword";
import SignIn from "@pages/Auth/SignIn/SignIn";
import SignUp from "@pages/Auth/SignUp/SignUp";
import Home from "@pages/Home/Home";
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
]);

export default router;
