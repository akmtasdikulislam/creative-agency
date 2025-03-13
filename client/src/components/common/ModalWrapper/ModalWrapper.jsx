import { HiXMark } from "react-icons/hi2";
import ReactModal from "react-modal";

const ModalWrapper = ({ children, isOpen, onClose }) => {
  ReactModal.setAppElement("#root");

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  const contentStyles = {
    zIndex: 9999,
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "max-content",
    height: "max-content",
    padding: 0,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  };
  const overlayStyles = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      aria={{
        labelledby: "modal-title",
        describedby: "modal-description",
      }}
      style={{
        overlay: overlayStyles,
        content: contentStyles,
      }}
    >
      <div className="relative bg-white p-8" onClick={handleContentClick}>
        <button
          className="absolute right-3.5 top-3.5 h-fit w-fit cursor-pointer rounded-full p-1 text-gray-500 transition-all duration-300 hover:bg-gray-200 hover:text-black focus:outline-none"
          onClick={onClose}
        >
          <HiXMark className="h-5 w-5" />
        </button>
        {children}
      </div>
    </ReactModal>
  );
};

export default ModalWrapper;
