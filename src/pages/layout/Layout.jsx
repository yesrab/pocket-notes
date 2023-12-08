import React from "react";
import { Outlet } from "react-router-dom";
import NotesList from "../../components/NotesList/NotesList";
import LayoutCSS from "./Layout.module.css";
function Layout() {
  return (
    <div className={LayoutCSS.Layout}>
      <NotesList />
      <Outlet />
    </div>
  );
}

export default Layout;
