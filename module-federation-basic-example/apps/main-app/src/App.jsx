import { join, map } from "lodash";
import React from "react";
import ReactDOM from "react-dom";
import { ErrorBoundary } from "react-error-boundary";

import { NameProvider } from "shared-library";
import "./index.css";

const Button = React.lazy(() => import("component_app/Button"));

const App = () => (
  <NameProvider name="hello">
    <div className="container">
      <div>Name: main-app</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
      <div>{join(map(["1", "2"]), "-")}</div>
      <ErrorBoundary fallback={<div>Error</div>}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Button
            onClick={() => {
              console.log("Clicked!!");
            }}
          >
            Primary
          </Button>
        </React.Suspense>
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>Error</div>}>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Button type="warning">Warning</Button>
        </React.Suspense>
      </ErrorBoundary>
    </div>
  </NameProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
