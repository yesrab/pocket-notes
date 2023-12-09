import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import ModalCSS from "./Modal.module.css";
import NotesContext from "../../context/notesContext";

function Modal({ open, trigModal }) {
  if (!open) {
    return null;
  }

  const { notesGroups, dispatch } = useContext(NotesContext);

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  function valueChange(e) {
    setTitle(e.target.value);
  }

  const handleSubmit = () => {
    console.log("title nature:", Boolean(title.length));
    console.log("color nature:", Boolean(color.length));
    if (!title.length || !color.length) {
      console.log("title inside IF nature:", Boolean(title.length));
      console.log("color inside IF nature:", Boolean(color.length));
      console.log("no no... cant go!");
      return;
    }
    dispatch({
      type: "ADD_GROUP",
      payload: [
        {
          title: title,
          color: color,
          epoch: Math.floor(new Date().getTime() / 1000.0),
          notes: [],
        },
      ],
    });

    trigModal();
  };

  // console.log(Math.floor(new Date().getTime() / 1000.0));

  return ReactDOM.createPortal(
    <>
      <div onClick={trigModal} className={ModalCSS.overlay} />
      <dialog className={ModalCSS.container} open={open}>
        <h4>Create New group</h4>
        <div className={ModalCSS.inputRegion}>
          <label>Group Name</label>{" "}
          <input type='text' value={title} onChange={valueChange} placeholder='Enter group name' />
        </div>
        <div className={ModalCSS.colorSelection}>
          <p>Choose colour</p>
          <button
            onClick={() => {
              setColor("hsla(262, 92%, 76%, 1)");
            }}
            className={ModalCSS.colorBubbles}
          />
          <button
            onClick={() => {
              setColor("hsla(306, 100%, 74%, 1)");
            }}
            className={`${ModalCSS.colorBubbles} ${ModalCSS.pink}`}
          />

          <button
            onClick={() => {
              setColor("hsla(187, 97%, 63%, 1)");
            }}
            className={`${ModalCSS.colorBubbles} ${ModalCSS.cyan}`}
          />
          <button
            onClick={() => {
              setColor("hsla(15, 81%, 70%, 1)");
            }}
            className={`${ModalCSS.colorBubbles} ${ModalCSS.brown}`}
          />

          <button
            onClick={() => {
              setColor("hsla(223, 100%, 50%, 1)");
            }}
            className={`${ModalCSS.colorBubbles} ${ModalCSS.royalBlue}`}
          />

          <button
            onClick={() => {
              setColor("hsla(223, 100%, 70%, 1)");
            }}
            className={`${ModalCSS.colorBubbles} ${ModalCSS.lightBlue}`}
          />
        </div>

        <div className={ModalCSS.buttonWrapper}>
          <button onClick={handleSubmit}>Create</button>
        </div>
      </dialog>
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
