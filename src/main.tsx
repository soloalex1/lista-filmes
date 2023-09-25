import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/containers/App";
import "./index.css";

ReactDOM.createRoot(document.querySelector('[data-js="app"]')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

