import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import PizzaProvider from "./components/Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PizzaProvider>
        <App />
      </PizzaProvider>
    </BrowserRouter>
  </React.StrictMode>
);
