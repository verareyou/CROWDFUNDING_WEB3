import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import App from "./App";
import "./index.css";
import { StateContextProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("");
root.render(
  <ThirdwebProvider chainId={ChainId.Goerli}>
      <StateContextProvider>
    <Router>
        <App />
    </Router>
      </StateContextProvider>
  </ThirdwebProvider>
);
