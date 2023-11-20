import { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App() {
  function handleClick() {
    console.log("Button clicked");
  }
  return (
    <>
      <Button onClick={handleClick}>hello</Button>
    </>
  );
}

export default App;
