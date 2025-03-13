import Button from "@/components/common/Button/Button";
import FileInfoBox from "@/components/common/FileInfoBox/FileInfoBox";
import UploadContainer from "@/components/common/UploadContainer/UploadContainer";
import { useAuth } from "@/hooks/useAuth";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { HiOutlineChevronDown, HiOutlineDocumentText } from "react-icons/hi2";

const DashboardOrderModal = ({ order = {}, addNew, onClose }) => {
  const { user } = useAuth();
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [status, setStatus] = useState(order?.status || "pending");
  const [isEditing, setIsEditing] = useState(addNew ? true : false);
  const [attachments, setAttachments] = useState(
    addNew ? [] : order?.attachments,
  );

  const [editedOrder, setEditedOrder] = useState(
    addNew
      ? {
          title: "",
          description: "",
          imageUrl: "",
        }
      : {
          title: order?.title || "",
          description: order?.description || "",
          imageUrl: order?.imageUrl || "",
          createdAt: order?.createdAt || "",
        },
  );
  const statusOptions = [
    { value: "completed", label: "Completed", className: "tw-badge-completed" },
    { value: "on-going", label: "On-going", className: "tw-badge-on-going" },
    { value: "pending", label: "Pending", className: "tw-badge-pending" },
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
    // onEdit(editedOrder);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedOrder({
      title: order.title,
      description: order.description,
      imageUrl: order.imageUrl,
    });
    setIsEditing(false);
  };
  const handleDiscard = () => {
    setEditedOrder({
      title: "",
      description: "",
      imageUrl: "",
    });
    setIsEditing(false);
    onClose();
  };

  return (
    <div className="w-md flex h-fit max-h-[40em] flex-col justify-between">
      {/* Modal Header */}
      <h4 className="text-text-primary border-b-accent-200 border-b-1 -mt-2 mb-4 w-full pb-2 font-bold">
        {addNew
          ? "Add New Order"
          : isEditing
            ? "Edit Order Details"
            : "Order Details"}
      </h4>
      {/* Modal Body */}
      <div className="flex h-full flex-col gap-4 self-stretch overflow-y-auto overflow-x-hidden">
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-start gap-4">
            {/* Order Title */}
            <div>
              <h6
                className={`text-text-secondary text-sm ${isEditing && addNew && "mb-1"}`}
              >
                Order Title
              </h6>
              <h5 className="text-text-primary text-xl font-semibold">
                {addNew ? order.title : editedOrder.title}
              </h5>
            </div>

            {/* Status Dropdown */}
            {!addNew && (
              <>
                <div className="w-full">
                  <h6 className="text-text-secondary mb-1 text-sm">Status</h6>
                  <div className="relative" ref={statusDropdownRef}>
                    {user.role === "admin" && isEditing ? (
                      <>
                        <button
                          onClick={() => setIsStatusOpen(!isStatusOpen)}
                          className={`tw-badge ${getStatusClass()} flex w-full cursor-pointer items-center justify-between md:w-auto`}
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
                                <span
                                  className={`tw-badge ${option.className}`}
                                >
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
              </>
            )}
          </div>

          {/* Order Icon */}
          <div className="w-25 flex items-center justify-center rounded-full">
            <div className="relative">
              {editedOrder.imageUrl ? (
                <img
                  src={editedOrder.imageUrl}
                  alt=""
                  className="h-20 w-20 rounded-full object-cover"
                />
              ) : (
                <div className="body-xs text-text-secondary flex h-20 w-20 items-center justify-center text-wrap rounded-full bg-gray-200 text-center font-medium">
                  Order <br /> Image
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <h6 className="text-text-secondary mb-1 text-sm">Description</h6>
          {(user.role !== "admin" && isEditing) || addNew ? (
            <textarea
              value={editedOrder.description}
              onChange={(e) =>
                setEditedOrder((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              className="textarea w-full !outline-none !ring-0 [&>input]:!outline-none [&>input]:!ring-0"
              rows="4"
            />
          ) : (
            <p className="text-text-primary">{order.description}</p>
          )}
        </div>

        {/* Attachments */}
        <div>
          <h6 className="text-text-secondary mb-1.5 text-sm">Attachments</h6>
          {attachments.length > 0 && !addNew ? (
            <div className="flex flex-col gap-2">
              {attachments.map((attachment, index) => (
                <FileInfoBox
                  status={status}
                  order={order}
                  key={index}
                  attachment={attachment}
                  attachments={attachments}
                  setAttachments={setAttachments}
                />
              ))}
            </div>
          ) : addNew ? (
            <>
              <UploadContainer setAttachments={setAttachments} />
              {attachments.length > 0 && (
                <div className="my-4 flex flex-col gap-2">
                  {attachments.map((attachment, index) => (
                    <FileInfoBox
                      status={status}
                      order={order}
                      key={index}
                      attachment={attachment}
                      attachments={attachments}
                      setAttachments={setAttachments}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="min-h-50 flex w-full flex-col items-center justify-center gap-4 rounded border border-dashed border-gray-300 text-gray-400">
              <HiOutlineDocumentText className="h-auto w-10" />
              <span>No attachments found</span>
            </div>
          )}
        </div>

        {/* Created At */}
        {!addNew && (
          <div>
            <h6 className="text-text-secondary mb-0.5 text-sm">Created on:</h6>
            <p className="text-text-primary">{order.createdAt}</p>
          </div>
        )}
      </div>
      {/* Modal Actions */}
      <div className="mt-4 flex justify-between">
        {addNew && isEditing && (
          <>
            <Button onClick={() => console.log({ addNew })}>Save</Button>
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
            {user.role !== "admin" && order.status === "pending" && (
              <button
                className="tw-btn tw-btn-destructive"
                onClick={handleCancel}
              >
                Delete
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};
DashboardOrderModal.propTypes = {
  order: PropTypes.shape({
    title: PropTypes.string,
    status: PropTypes.string,
    description: PropTypes.string,
    createdOn: PropTypes.string,
  }),
  onEdit: PropTypes.func,
  onClose: PropTypes.func,
};

export default DashboardOrderModal;
