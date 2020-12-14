import React from "react";
import { createNotEmittedStatement } from "typescript";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "./notes"

//console.log(notes)

function createNotes(noteItem){
  return <Note
    key={noteItem.key}
    title= {noteItem.title}
    content={noteItem.content}
  />
}

function App(){
  return (
    <div>
      <Header />
      {notes.map(createNotes)}
      <Footer />
    </div>
  ) 
}
export default App