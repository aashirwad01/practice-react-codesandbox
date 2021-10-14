import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App text="Sign Up" msg="Lets get signed up" />
    <App text="Login" msg="welcome back" />
    <App text="Know Me" msg="click me" />
  </StrictMode>,
  rootElement
);
