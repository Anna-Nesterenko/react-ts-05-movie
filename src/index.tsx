import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/react-ts-05-movie/">
      {/* basename="/goit-react-hw-05-movies/" */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);