import React, { useState, useCallback } from "react";
import Button from "./components/Button/Button";

import "./App.css";
import DemoOutput from "./components/Button/Demo/DemoOutput";

function App() {
  const [showP, setShowP] = useState(false);
  const [allowP, setAllowP] = useState(false);

  console.log("app running");

  const handler = useCallback(() => {
    if (allowP) {
      setShowP((prev) => !prev);
    }
  }, [showP, allowP]);

  const allowToggle = () => {
    setAllowP(true);
  };

  const disAllowToggle = () => {
    setAllowP(false);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showP}></DemoOutput>
      <Button onClick={allowToggle}>Allow paragraph toggling</Button>
      <Button onClick={handler} disabled={!allowP}>
        {showP ? "Remove" : "Add"} paragraph{" "}
      </Button>
      <Button onClick={disAllowToggle}>Disable paragraph toggling</Button>
    </div>
  );
}

export default App;
