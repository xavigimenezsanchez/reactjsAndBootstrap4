import React from "react";
import ReactDOM from "react-dom";
import Menu from "./menu";

import "./styles.css";

function App() {
  return (
    <div>
      <Menu />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
