import usePortal from "react-useportal";

export const useModal = () => {
  const { isOpen, openPortal, togglePortal, closePortal, Portal } = usePortal({
    onOpen({ portal }) {
      portal.current.style.cssText = `
            position: fixed;
            background: transparent;
            width: 100vw;
            height: 100vh;
            top: 0;
            left: 0;
            z-index: 1000;
        `;
    },
  });

  return {
    Modal: Portal,
    openModal: openPortal,
    toggleModal: togglePortal,
    closeModal: closePortal,
    isOpen,
  };
};
