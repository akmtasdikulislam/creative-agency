const DeleteConfirmModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="w-sm overflow-hidden">
      <h4 className="text-text-primary border-b-accent-200 border-b-1 -mt-2 mb-4 w-full pb-2 font-bold">
        Confirm Deletion
      </h4>
      <p className="mb-6">
        Are you sure you want to delete this service? This action cannot be
        undone.
      </p>
      <div className="flex justify-between">
        <button className="tw-btn tw-btn-destructive" onClick={onConfirm}>
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
