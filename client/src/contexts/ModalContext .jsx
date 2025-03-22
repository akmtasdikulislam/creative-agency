import { createContext, useState } from "react";

// initial context value
export const ModalContext = createContext({
  activeModals: {},
  openModal: () => {},
  reOpenModal: () => {},
  closeModal: () => {},
  closeAllModals: () => {},
});

export const ModalContextProvider = ({ children }) => {
  // state to store the active modals
  const [activeModals, setActiveModals] = useState({});

  // function to open a modal
  const openModal = (modalId, props = {}) => {
    setActiveModals((prevModals) => ({
      ...prevModals,
      [modalId]: { isOpen: true, props },
    }));
  };

  // function to re-open a modal
  const reOpenModal = (modalId) => {
    setActiveModals((prevModals) => ({
      ...prevModals,
      [modalId]: { ...prevModals[modalId], isOpen: true },
    }));
  };

  // function to close a modal
  const closeModal = (modalId) => {
    setActiveModals((prevModals) => ({
      ...prevModals,
      [modalId]: { ...prevModals[modalId], isOpen: false },
    }));
  };

  // function to close all modals
  const closeAllModals = () => {
    const closedModals = {};
    Object.keys(activeModals).forEach((modalId) => {
      closedModals[modalId] = {
        ...activeModals[modalId],
        isOpen: false,
      };
    });
    setActiveModals(closedModals);
  };

  // return the context provider with the state and functions
  return (
    <ModalContext.Provider
      value={{
        activeModals,
        openModal,
        reOpenModal,
        closeModal,
        closeAllModals,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
