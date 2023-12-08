import React from "react";
import { NavLink } from "react-router-dom";
import NoteElementCSS from "./NoteElement.module.css";
function NoteElement({ noteId, Title, close }) {
  return (
    <div onClick={close} className={NoteElementCSS.test}>
      <NavLink
        to={noteId}
        className={({ isActive }) => (isActive ? NoteElementCSS.active : NoteElementCSS.NoteLink)}>
        <div className={NoteElementCSS.bubble}>N</div>
        <div>
          <p className={NoteElementCSS.ptag}>{Title}</p>
        </div>
      </NavLink>
    </div>
  );
}

export default NoteElement;
