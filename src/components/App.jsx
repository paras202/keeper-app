import React , {useState} from "react";
import Header from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            key={index}
            id={index}
          />
        );
      })}
      <Footer />
    </div>
  );
}


export default App;

// function App(){
//     return (
//     <div>
//         <Header />
// // {notes.map((entry) => (
//     <Note 
//     key = {entry.id}
//     title = {entry.title}
//     content = {entry.content}
// />))} 
///* <Footer />
//</div> 
//);
//} */}