import { createContext } from "react";
import Modal from "./Modal";
import ViewEvents from "./ViewEvents";

const ModalContext = createContext();

function Events({ type }) {
  return (
    <Modal ModalContext={ModalContext}>
      <ViewEvents type={type} ModalContext={ModalContext} />
      <Modal.Window ModalContext={ModalContext} />
    </Modal>
  );
}

export default Events;
