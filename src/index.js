import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextWrapper } from "./context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextWrapper>
  </React.StrictMode>
);
