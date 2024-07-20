import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material"; 

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [focus,setFocus]=useState(false);

  function handleFocus(){
    setFocus(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input onFocus={handleFocus}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        {focus?
        <textarea 
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />:null
        }
        <Zoom in={focus}>
          <Fab onClick={submitNote}>
            <AddIcon/>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
