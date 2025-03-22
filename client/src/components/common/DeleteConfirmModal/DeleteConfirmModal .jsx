import { HiExclamationCircle } from "react-icons/hi2";

const DeleteConfirmModal = ({ message, onConfirm, onClose, onCancel }) => {
  const handleConfrim = () => {
    onConfirm();
    onClose();
  };
  return (
    <div className="w-sm overflow-hidden">
      <h4 className="text-text-primary border-b-accent-200 border-b-1 -mt-2 mb-4 w-full pb-2 font-bold">
        Confirm Deletion
      </h4>
      <p className="mb-6">
        {message || "Are you sure you want to delete this service?"}
      </p>
      <div
        role="alert"
        className="alert alert-error alert-soft mb-4 mt-6 w-full py-2 text-xs"
      >
        <span className="flex items-center gap-2">
          <HiExclamationCircle className="h-full w-5" /> This action cannot be
          undone!
        </span>
      </div>
      <div className="flex justify-between">
        <button className="tw-btn tw-btn-destructive" onClick={handleConfrim}>
          Confirm Delete
        </button>
        <button className="tw-btn tw-btn-cancel" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
