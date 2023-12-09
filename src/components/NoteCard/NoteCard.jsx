import React from "react";
import NoteCardCSS from "./NoteCard.module.css";
function NoteCard({ body, time }) {
  function formatEpochToDateString(epoch) {
    const date = new Date(epoch * 1000);

    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    const formattedDate = `${day} ${month} ${year} \u00b7 ${hours % 12 || 12}:${
      minutes < 10 ? "0" : ""
    }${minutes} ${ampm}`;
    return formattedDate;
  }

  return (
    <div className={NoteCardCSS.container}>
      <p>{body}</p>
      <div className={NoteCardCSS.time}>
        <p>{formatEpochToDateString(time)}</p>
      </div>
    </div>
  );
}

export default NoteCard;
