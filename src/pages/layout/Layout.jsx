import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NotesList from "../../components/NotesList/NotesList";
import LayoutCSS from "./Layout.module.css";
import Modal from "../../components/Modal/Modal";
function Layout() {
  const [view, setView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handelModal() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={LayoutCSS.Layout}>
      <NotesList trigModal={handelModal} visiblity={view} setView={setView} />
      <Modal trigModal={handelModal} open={isOpen} />
      <div className={!view ? "" : LayoutCSS.responsiveOutlet}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
