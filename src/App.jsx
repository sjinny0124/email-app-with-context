import React, { useContext } from "react";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import { UserContext } from "./contexts/UserContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import { EmailProvider } from "./contexts/EmailContext";
import "./App.css";

function App() {
  const { user } = useContext(UserContext);
  return user ? (
    <NotificationProvider>
      <EmailProvider>
        <MainPage />
      </EmailProvider>
    </NotificationProvider>
  ) : (
    <LoginPage />
  );
}

export default App;
