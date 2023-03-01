import React from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { Note } from "../App";

export type NoteLayoutPops = {
  notes: Note[];
};

const NoteLayout = ({ notes }: NoteLayoutPops) => {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);
  if (note === null) return <Navigate to="/" replace />;
  else {
    return <Outlet context={note} />;
  }
};

export default NoteLayout;
