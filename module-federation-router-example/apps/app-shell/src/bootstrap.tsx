// module-federation-router-example/apps/app-shell/src/bootstrap.tsx

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./index.css";

createRoot(document.getElementById("app")!).render(<App />);
