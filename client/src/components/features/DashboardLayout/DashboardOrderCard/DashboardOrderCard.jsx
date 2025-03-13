import ModalWrapper from "@/components/common/ModalWrapper/ModalWrapper";
import { useState } from "react";
import DashboardOrderModal from "../Modals/DashboardOrderModal/DashboardOrderModal";

const DashboardOrderCard = ({ order }) => {
  const { title, description, imageUrl, status } = order;

  const [isOpen, setIsOpen] = useState(false);

  function openModal(e) {
    e.stopPropagation(); // Stop event propagation
    setIsOpen(true);
  }

  function closeModal(e) {
    e?.stopPropagation(); // Stop event propagation (optional chaining for keyboard events)
    setIsOpen(false);
  }

  return (
    <div
      className="border-1 border-accent-200 max-h-70 sm:min-w-xs flex flex-auto flex-col gap-5 overflow-hidden rounded-lg bg-white p-5 shadow-sm transition-all duration-500 hover:cursor-pointer hover:shadow-lg focus:shadow-lg active:shadow-lg sm:max-w-md sm:flex-1"
      onClick={openModal}
    >
      <div className="flex w-full gap-5">
        <div className="service-image">
          <img
            src={imageUrl}
            alt="service-image"
            className="w-15 rounded-full"
          />
        </div>
        <div className="service-details">
          <h3 className="mb-1 text-lg font-bold">{title}</h3>
          <div className={`tw-badge tw-badge-${status} capitalize`}>
            {status}
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-1">
        <p className="text-text-primary text-sm font-semibold">
          Project Description
        </p>
        <p className="text-text-secondary line-clamp-3 text-sm">
          {description}
        </p>
      </div>
      <ModalWrapper isOpen={isOpen} onClose={closeModal}>
        <DashboardOrderModal order={order} onClose={closeModal} />
      </ModalWrapper>
    </div>
  );
};

export default DashboardOrderCard;
