import { MODAL_COMPONENTS } from "@/lib/Modal/ModalRegistry";
import { useModal } from "@hooks/useModal";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

const ModalController = () => {
  const { activeModals, closeModal } = useModal();
  return (
    <>
      {Object.entries(activeModals).map(([modalId, { isOpen, props }]) => {
        // Get the correct modal component from registry
        const [modalType, modalKey] = modalId.split(":");
        const ModalComponent = MODAL_COMPONENTS[modalType];

        if (!ModalComponent) {
          return null;
        }

        return (
          <ModalWrapper
            key={modalId}
            isOpen={isOpen}
            onClose={() => closeModal(modalId)}
          >
            <ModalComponent
              {...props}
              modalId={modalId}
              onClose={() => closeModal(modalId)}
            />
          </ModalWrapper>
        );
      })}
    </>
  );
};

export default ModalController;
