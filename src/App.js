import React, { useState } from "react";
import Button from '@mui/material/Button';
import ModalStep from "./modals/modals";
function App() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(""); 
  const [age, setAge] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeSelected = (event) => {
    setAge(event.target.value);
  };


  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <ModalStep handleChangeSelected={handleChangeSelected} age={age} setAge={setAge} input={input} setInput={setInput} open={open} handleClose={handleClose}/>
    </div>
  );
}

export default App;
