import MainLayout from "@components/layout/MainLayout/MainLayout";
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
]);

export default router;
