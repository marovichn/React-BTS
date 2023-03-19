import React, { useState } from "react";
import Button from "./components/Button/Button";

import "./App.css";
import DemoOutput from "./components/Button/Demo/DemoOutput";

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
      <DemoOutput show={showP}></DemoOutput>
      <Button onClick={handler}>{showP ? "Remove" : "Add"} paragraph</Button>
    </div>
  );
}

export default App;
