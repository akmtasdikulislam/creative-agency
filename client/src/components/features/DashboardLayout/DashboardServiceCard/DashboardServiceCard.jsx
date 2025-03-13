import DeleteConfirmModal from "@/components/common/DeleteConfirmModal/DeleteConfirmModal ";
import ModalWrapper from "@/components/common/ModalWrapper/ModalWrapper";
import { useState } from "react";
import DashboardServiceModal from "../Modals/DashboardServiceModal/DashboardServiceModal";

const DashboardServiceCard = ({ service }) => {
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  function openServiceModal(e) {
    e.stopPropagation(); // Stop event propagation
    setIsServiceModalOpen(true);
  }

  function closeServiceModal(e) {
    e?.stopPropagation(); // Stop event propagation (optional chaining for keyboard events)
    setIsServiceModalOpen(false);
  }

  const handleDeleteClick = () => {
    setIsServiceModalOpen(false);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    // Handle delete logic here
    setIsDeleteModalOpen(false);
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
    setIsServiceModalOpen(true);
  };

  const { title, description, imageUrl, status } = service;
  return (
    <div
      className="card bg-base-100 border-1 border-accent-200 sm:min-w-xs w-full flex-auto shadow-sm transition-all duration-500 hover:cursor-pointer hover:shadow-lg focus:shadow-lg active:shadow-lg sm:max-w-md sm:flex-1"
      onClick={openServiceModal}
    >
      <div className="flex items-start justify-between px-7 pt-6">
        <img src={imageUrl} alt={title} className="w-15 h-auto rounded-full" />
        <div className={`tw-badge tw-badge-${status} capitalize`}>{status}</div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="text-text-secondary body-sm line-clamp-3">
          {description}
        </p>
      </div>
      <ModalWrapper isOpen={isServiceModalOpen} onClose={closeServiceModal}>
        <DashboardServiceModal
          service={service}
          onClose={closeServiceModal}
          onDelete={handleDeleteClick}
        />
      </ModalWrapper>

      <ModalWrapper isOpen={isDeleteModalOpen} onClose={handleDeleteCancel}>
        <DeleteConfirmModal
          onConfirm={handleDeleteConfirm}
          onCancel={handleDeleteCancel}
        />
      </ModalWrapper>
    </div>
  );
};

export default DashboardServiceCard;
