// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';

import "./index.css";
import App from "./App";
import { ThemeProviderWrapper } from "./context/theme.context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <ThemeProviderWrapper>   {/*  <== ADD  */}
        <App />
      </ThemeProviderWrapper>  {/*  <== ADD  */}
    </Router>
  </React.StrictMode>
);
