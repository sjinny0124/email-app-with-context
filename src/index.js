import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,

  document.getElementById("root")
);
