import { join, map } from "lodash";
import React from "react";
import ReactDOM from "react-dom";

import Button from "component_app/Button";
import { NameProvider } from "shared-library";
import "./index.css";

const App = () => (
  <NameProvider name="hello">
    <div className="container">
      <div>Name: main-app</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
      <div>{join(map(["1", "2"]), "-")}</div>
      <Button
        onClick={() => {
          console.log("Clicked!!");
        }}
      >
        Primary
      </Button>
      <Button type="warning">Warning</Button>
    </div>
  </NameProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
