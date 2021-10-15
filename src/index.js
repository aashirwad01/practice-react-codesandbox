import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import App2 from "./app2";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <App2 />
  </StrictMode>,
  rootElement
);
