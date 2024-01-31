import React from "react";
import ReactDOM from "react-dom";

import Button from "./components/Button";
import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: component-app</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Button>Sample</Button>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
