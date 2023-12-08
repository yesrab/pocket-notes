import React from "react";
import ReactDOM from "react-dom";
import ModalCSS from "./Modal.module.css";

function Modal({ open, trigModal }) {
  if (!open) {
    return null;
  }
  return ReactDOM.createPortal(
    <>
      <div onClick={trigModal} className={ModalCSS.overlay} />
      <dialog className={ModalCSS.container} open={open}>
        <h4>Create New group</h4>
        <div className={ModalCSS.inputRegion}>
          <label>Group Name</label> <input type='text' placeholder='Enter group name' />
        </div>
        <div className={ModalCSS.colorSelection}>
          <p>Choose colour</p>
          <div className={ModalCSS.colorBubbles} />
          <div className={`${ModalCSS.colorBubbles} ${ModalCSS.pink}`} />
          <div className={`${ModalCSS.colorBubbles} ${ModalCSS.brown}`} />
          <div className={`${ModalCSS.colorBubbles} ${ModalCSS.royalBlue}`} />
          <div className={`${ModalCSS.colorBubbles} ${ModalCSS.lightBlue}`} />
        </div>

        <diV className={ModalCSS.buttonWrapper}>
          <button>Create</button>
        </diV>
      </dialog>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
