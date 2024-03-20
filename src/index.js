import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { EcommmerceContextProvider } from "./Context/EcommmerceContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <EcommmerceContextProvider>
        <App />
      </EcommmerceContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
