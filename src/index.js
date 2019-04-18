import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";
import { NotificationProvider } from "./contexts/NotificationContext";

ReactDOM.render(
  <NotificationProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </NotificationProvider>,
  document.getElementById("root")
);
