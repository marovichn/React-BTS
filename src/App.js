import React, { useState } from "react";
import Button from "./components/Button/Button";

import "./App.css";

function App() {
  const [showP, setShowP] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handler = () => {
    setShowP((prev) => {
      return !showP;
    }); /* 
    setDisabled(true); */
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showP && <p>This is new</p>}
      <Button onClick={handler} disabled={disabled}>
        {showP ? "Remove" : "Add"} paragraph
      </Button>
    </div>
  );
}

export default App;
