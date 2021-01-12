import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App(){
  return (
    <div>
      <Header />
     <CreateArea/>
     <Note key={1} title="Note title"/>
      <Footer />
    </div>
  ) 
}
export default App