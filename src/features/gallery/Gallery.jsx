import { createContext } from "react";
import Modal from "../modal/Modal";
import ViewGallery from "./ViewGallery";

const ModalContext = createContext();

function Gallery({ type }) {
  return (
    <Modal ModalContext={ModalContext}>
      <ViewGallery type={type} ModalContext={ModalContext} />
      <Modal.Window ModalContext={ModalContext} />
    </Modal>
  );
}

export default Gallery;
