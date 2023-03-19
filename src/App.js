import React, { useState } from "react";
import Button from "./components/Button/Button";

import "./App.css";

function App() {
  const [showP, setShowP] = useState(false);

  console.log("app running");

  const handler = () => {
    setShowP((prev) => {
      return !showP;
    });
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showP && <p>This is new</p>}
      <Button onClick={handler}>{showP ? "Remove" : "Add"} paragraph</Button>
    </div>
  );
}

export default App;
