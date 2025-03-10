import { useAuth } from "@hooks/useAuth";
import DashboardOrders from "@pages/Dashboard/DashboardOrders/DashboardOrders";
import DashboardServices from "@pages/Dashboard/DashboardServices/DashboardServices";

const DashboardIndex = () => {
  const { user } = useAuth();
  return user?.role === "admin" ? <DashboardServices /> : <DashboardOrders />;
};

export default DashboardIndex;
