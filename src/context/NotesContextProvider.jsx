import React, { useReducer } from "react";
import NotesContext from "./notesContext";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_GROUP":
      const updatedState = [...state, ...action.payload];
      localStorage.setItem("pocketNotes", JSON.stringify(updatedState));
      return updatedState;
    case "ADD_NOTE":
      const { epoch, newNote } = action.payload;

      const updatedGroups = state.map((group) =>
        group.epoch === +epoch ? { ...group, notes: [...group.notes, newNote] } : group
      );
      localStorage.setItem("pocketNotes", JSON.stringify(updatedGroups));
      return updatedGroups;
    default:
      return state;
  }
}

export default function NotesContextProvider({ children }) {
  const INITIAL_STATE = JSON.parse(localStorage.getItem("pocketNotes")) || [];
  // const INITIAL_STATE = [];
  const [notesGroups, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <NotesContext.Provider value={{ notesGroups, dispatch }}>{children}</NotesContext.Provider>
  );
}
