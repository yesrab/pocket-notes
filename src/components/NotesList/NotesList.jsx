import React from "react";
import NotesCSS from "./NotesList.module.css";
import NoteElement from "../NoteTitle/NoteElement";
function NotesList() {
  return (
    <div className={NotesCSS.container}>
      <div className={NotesCSS.heading}>
        <h1>Pocket Notes</h1>
      </div>
      <div className={NotesCSS.NotesListWrapper}>
        <div className={NotesCSS.NotesList}>
          <NoteElement noteId={"10"} Title=' 1 awok awok' />
          <NoteElement noteId={"223ds32523534"} Title=' 2 bonk honk' />
          <NoteElement noteId={"12"} Title='3 sure' />
          <NoteElement noteId={"62"} Title='4 yes mam' />
          <NoteElement noteId={"22332523534"} Title='5 bonk honk' />
          <NoteElement noteId={"1asasd2"} Title='6 oh no' />
          <NoteElement noteId={"weq12"} Title='7 man im getting tired of this ' />
          <NoteElement noteId={"asdasd"} Title='8 man im getting tasdired of this ' />
          <NoteElement noteId={"22332adas523534"} Title='bonk honk' />
          <NoteElement noteId={"2233dasd2523534"} Title='bonk honk' />
          <NoteElement noteId={"223a32523534"} Title='bonk honk' />
          <NoteElement noteId={"22332asda523534"} Title='bonk honk' />
          <NoteElement noteId={"2233xz2523534"} Title='bonk honk' />
          <NoteElement noteId={"wesazxcdasdq12"} Title='man im geasdasdtting tired of this ' />
        </div>
      </div>
      {/* <div>+</div> */}
    </div>
  );
}

export default NotesList;
