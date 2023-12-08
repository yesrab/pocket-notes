import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NotesList from "../../components/NotesList/NotesList";
import LayoutCSS from "./Layout.module.css";
function Layout() {
  const [view, setView] = useState(false);
  console.log(view);
  return (
    <div className={LayoutCSS.Layout}>
      <NotesList visiblity={view} setView={setView} />
      <div className={!view ? "" : LayoutCSS.responsiveOutlet}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
