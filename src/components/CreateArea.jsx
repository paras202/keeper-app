import React, { useState } from "react";
//import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });

    event.preventDefault();
  }
  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
       {isExpanded && (
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
        />
       )}
        <textarea
          name="content"
          value={note.content}
          onClick={expand}
          onChange={handleChange}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
