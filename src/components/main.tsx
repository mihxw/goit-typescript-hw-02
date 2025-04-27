import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App.jsx";
import "./index.css";
import "modern-normalize";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);