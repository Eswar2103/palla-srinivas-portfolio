import { useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

function Modal({ children, ModalContext }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isModalOpen]);

  function openModal(element) {
    setIsModalOpen(true);
    setModalContent(element);
  }

  function closeModal() {
    setIsModalOpen(false);
    setModalContent(null);
  }
  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
        isModalOpen,
        setModalContent,
        modalContent,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function Window({ ModalContext }) {
  const { isModalOpen, closeModal, modalContent } = useContext(ModalContext);
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        closeModal();
      }
    }
    document.addEventListener("mousedown", handleClick, true);
    return () => {
      document.removeEventListener("mousedown", handleClick, true);
    };
  }, [closeModal]);

  if (!isModalOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50">
      <div
        className="fixed px-4 sm:px-10 py-15 sm:py-20 w-[90%] sm:w-[60%] max-h-[88vh] sm:max-h-[95vh] flex justify-center top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white/80 overflow-auto z-100"
        ref={ref}
      >
        <div
          className="absolute top-5 right-5 text-3xl hover:cursor-pointer hover:text-red-600"
          onClick={closeModal}
        >
          <HiXMark strokeWidth={2} />
        </div>
        {modalContent}
      </div>
    </div>,
    document.body
  );
}

Modal.Window = Window;

// export { ModalContext };

export default Modal;
