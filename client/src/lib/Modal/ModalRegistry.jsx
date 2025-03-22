import DeleteConfirmModal from "@components/common/DeleteConfirmModal/DeleteConfirmModal ";
import DashboardOrderModal from "@components/features/DashboardLayout/Modals/DashboardOrderModal/DashboardOrderModal";
import DashboardServiceModal from "@components/features/DashboardLayout/Modals/DashboardServiceModal/DashboardServiceModal";

// Define all available modals in the application
export const MODAL_TYPES = {
  SERVICE_MODAL: "SERVICE_MODAL",
  ORDER_MODAL: "ORDER_MODAL",
  DELETE_CONFIRM: "DELETE_CONFIRM",
  // Add more modal types as needed
};

// Map modal types to their componenet implementations
export const MODAL_COMPONENTS = {
  [MODAL_TYPES.SERVICE_MODAL]: DashboardServiceModal,
  [MODAL_TYPES.ORDER_MODAL]: DashboardOrderModal,
  [MODAL_TYPES.DELETE_CONFIRM]: DeleteConfirmModal,
  // Add more modal components as needed
};
