import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import { EmailProvider } from "./contexts/EmailContext";

ReactDOM.render(
  <NotificationProvider>
    <UserProvider>
      <EmailProvider>
        <App />
      </EmailProvider>
    </UserProvider>
  </NotificationProvider>,
  document.getElementById("root")
);
