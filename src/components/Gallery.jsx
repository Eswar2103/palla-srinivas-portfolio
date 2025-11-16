import { createContext } from "react";
import Modal from "./Modal";
import Photos from "./Photos";

const ModalContext = createContext();

function Gallery({ type }) {
  return (
    <Modal ModalContext={ModalContext}>
      <Photos type={type} ModalContext={ModalContext} />
      <Modal.Window ModalContext={ModalContext} />
    </Modal>
  );
}

export default Gallery;
