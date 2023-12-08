import React from "react";
import NotesCSS from "./NotesList.module.css";
import NoteElement from "../NoteTitle/NoteElement";
function NotesList({ setView, visiblity, trigModal }) {
  function handleView() {
    setView((prev) => !prev);
  }

  return (
    <div className={!visiblity ? NotesCSS.toggle : NotesCSS.container}>
      <div className={NotesCSS.heading}>
        <h1>Pocket Notes</h1>
      </div>
      <div className={NotesCSS.NotesListWrapper}>
        <div className={NotesCSS.NotesList}>
          <NoteElement close={handleView} noteId={"10"} Title=' 1 awok awok' />
          <NoteElement close={handleView} noteId={"223ds32523534"} Title=' 2 bonk honk' />
          <NoteElement close={handleView} noteId={"12"} Title='3 sure' />
          <NoteElement close={handleView} noteId={"62"} Title='4 yes mam' />
          <NoteElement close={handleView} noteId={"22332523534"} Title='5 bonk honk' />
          <NoteElement close={handleView} noteId={"1asasd2"} Title='6 oh no' />
          <NoteElement
            close={handleView}
            noteId={"weq12"}
            Title='7 man im getting tired of this '
          />
          <NoteElement
            close={handleView}
            noteId={"asdasd"}
            Title='8 man im getting tasdired of this '
          />
          <NoteElement close={handleView} noteId={"22332adas523534"} Title='bonk honk' />
          <NoteElement close={handleView} noteId={"2233dasd2523534"} Title='bonk honk' />
          <NoteElement close={handleView} noteId={"223a32523534"} Title='bonk honk' />
          <NoteElement close={handleView} noteId={"22332asda523534"} Title='bonk honk' />
          <NoteElement close={handleView} noteId={"2233xz2523534"} Title='bonk honk' />
          <NoteElement
            close={handleView}
            noteId={"wesazxcdasdq12"}
            Title='man im geasdasdtting tired of this '
          />
        </div>
      </div>
      <button onClick={trigModal} className={NotesCSS.addBtn}>
        +
      </button>
    </div>
  );
}

export default NotesList;
