import { MODAL_TYPES } from "@/lib/Modal/ModalRegistry";
import Button from "@components/common/Button/Button";
import { useModal } from "@hooks/useModal";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import {
  HiOutlineCamera,
  HiOutlineChevronDown,
  HiOutlineTrash,
} from "react-icons/hi2";

const DashboardServiceModal = ({
  service = {},
  addNew,
  onClose,
  onSave,
  modalId,
}) => {
  const { openModal, closeModal, reOpenModal } = useModal();
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [status, setStatus] = useState(service?.status || "active");
  const [isEditing, setIsEditing] = useState(addNew ? true : false);
  const [editedService, setEditedService] = useState(
    addNew
      ? {
          title: "",
          description: "",
          imageUrl: "",
        }
      : {
          title: service?.title || "",
          description: service?.description || "",
          imageUrl: service?.imageUrl || "",
          createdAt: service?.createdAt || "",
        },
  );
  const statusOptions = [
    { value: "active", label: "Active", className: "tw-badge-active" },
    { value: "inactive", label: "Inactive", className: "tw-badge-inactive" },
  ];

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    setIsStatusOpen(false);
  };

  const getStatusClass = () => {
    const option = statusOptions.find((opt) => opt.value === status);
    return option ? option.className : "tw-badge-neutral";
  };

  const getStatusLabel = () => {
    const option = statusOptions.find((opt) => opt.value === status);
    return option ? option.label : "Unknown";
  };

  const statusDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        statusDropdownRef.current &&
        !statusDropdownRef.current.contains(event.target)
      ) {
        setIsStatusOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onSave({
      ...editedService,
      status,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    if (service) {
      setEditedService({
        title: service.title || "",
        description: service.description || "",
        imageUrl: service.imageUrl || "",
        createdAt: service.createdAt || "",
      });
    }
    setIsEditing(false);
  };

  const handleDiscard = () => {
    setEditedService({
      title: "",
      description: "",
      imageUrl: "",
    });
    setIsEditing(false);
    onClose();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setEditedService((prev) => ({ ...prev, imageUrl: imageUrl }));
    }
  };

  const handleImageRemove = () => {
    setEditedService((prev) => ({ ...prev, imageUrl: "" }));
    // Reset the file input
    const fileInput = document.getElementById("image-upload");
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const handleDeleteClik = () => {
    openModal(`${MODAL_TYPES.DELETE_CONFIRM}:service-${service.id}`, {
      message: "Are you sure you want to delete this service?",
      onConfirm: () => {
        console.log("Confirm Delete Service");
      },
      onCancel: () => {
        closeModal(`${MODAL_TYPES.DELETE_CONFIRM}:service-${service.id}`);
        reOpenModal(modalId);
      },
    });

    onClose();
  };

  return (
    <div className="w-sm overflow-hidden">
      <h4 className="text-text-primary border-b-accent-200 border-b-1 -mt-2 mb-4 w-full pb-2 font-bold">
        {addNew
          ? "Add New Service"
          : isEditing
            ? "Edit Service Details"
            : "Service Details"}
      </h4>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-start gap-4">
            {/* Service Title */}
            <div>
              <h6
                className={`text-text-secondary text-sm ${isEditing && "mb-1"}`}
              >
                Service Title
              </h6>
              {isEditing ? (
                <input
                  type="text"
                  value={editedService.title}
                  onChange={(e) =>
                    setEditedService((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                  className="input min-w-3xs w-auto !outline-none !ring-0 [&>input]:!outline-none [&>input]:!ring-0"
                />
              ) : (
                <h5 className="text-text-primary text-xl font-semibold">
                  {editedService.title}
                </h5>
              )}
            </div>

            {/* Status Dropdown */}
            <div className="w-full">
              <h6 className="text-text-secondary mb-1 text-sm">Status</h6>
              <div className="relative" ref={statusDropdownRef}>
                {isEditing ? (
                  <>
                    <button
                      onClick={() => setIsStatusOpen(!isStatusOpen)}
                      className={`tw-badge ${getStatusClass()} flex w-full items-center justify-between md:w-auto`}
                    >
                      {getStatusLabel()}
                      <HiOutlineChevronDown
                        strokeWidth={"3px"}
                        className="ml-2 h-3 w-3"
                      />
                    </button>

                    {isStatusOpen && (
                      <div className="absolute z-10 mt-1 w-full rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                        {statusOptions.map((option) => (
                          <div
                            key={option.value}
                            className="cursor-pointer px-4 py-2 text-sm hover:bg-gray-100"
                            onClick={() => handleStatusChange(option.value)}
                          >
                            <span className={`tw-badge ${option.className}`}>
                              {option.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div
                    className={`tw-badge ${getStatusClass()} flex w-fit items-center justify-between md:w-fit`}
                  >
                    {getStatusLabel()}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-25 flex items-center justify-center rounded-full">
            <div className="relative">
              {editedService.imageUrl ? (
                <div className="group relative">
                  <img
                    src={editedService.imageUrl}
                    alt=""
                    className="h-20 w-20 rounded-full object-cover"
                  />
                  {isEditing && (
                    <button
                      onClick={handleImageRemove}
                      className="absolute inset-0 flex transform cursor-pointer items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-all duration-300 ease-in-out active:scale-95 group-hover:opacity-100"
                    >
                      <HiOutlineTrash className="h-6 w-6 text-red-400" />
                    </button>
                  )}
                </div>
              ) : (
                <div className="body-xs text-text-secondary flex h-20 w-20 items-center justify-center text-wrap rounded-full bg-gray-200 text-center font-medium">
                  Add Service Image
                </div>
              )}
              {isEditing && (
                <>
                  <label
                    htmlFor="image-upload"
                    className="text-secondary-900 absolute -bottom-1 -right-1 cursor-pointer rounded-full border border-gray-200 bg-white p-1 hover:bg-gray-100"
                  >
                    <HiOutlineCamera className="h-4 w-4" />
                  </label>
                  <input
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <h6 className="text-text-secondary mb-1 text-sm">Description</h6>
          {isEditing ? (
            <textarea
              value={editedService.description}
              onChange={(e) =>
                setEditedService((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              className="textarea w-full !outline-none !ring-0 [&>input]:!outline-none [&>input]:!ring-0"
              rows="4"
            />
          ) : (
            <p className="text-text-primary">{editedService.description}</p>
          )}
        </div>

        {/* Created On */}
        {!addNew && editedService.createdAt && (
          <div>
            <h6 className="text-text-secondary mb-0.5 text-sm">Created on:</h6>
            <p className="text-text-primary">{editedService.createdAt}</p>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-between">
        {addNew && isEditing && (
          <>
            <Button
              onClick={() => {
                handleSave();
                onClose();
              }}
            >
              Save
            </Button>
            <button
              className="tw-btn tw-btn-destructive"
              onClick={handleDiscard}
            >
              Discard
            </button>
          </>
        )}

        {!addNew && isEditing && (
          <>
            <Button onClick={handleSave}>Save</Button>
            <button className="tw-btn tw-btn-cancel" onClick={handleCancel}>
              Cancel
            </button>
          </>
        )}
        {!addNew && !isEditing && (
          <>
            <Button onClick={handleEdit}>Edit</Button>
            <button
              className="tw-btn tw-btn-destructive"
              onClick={handleDeleteClik}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

DashboardServiceModal.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string,
    status: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
  addNew: PropTypes.bool,
  onSave: PropTypes.func,
  onClose: PropTypes.func,
};

export default DashboardServiceModal;
