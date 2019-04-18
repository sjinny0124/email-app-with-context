import React, { useContext } from "react";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import { UserContext } from "./contexts/UserContext";
import "./App.css";

function App() {
  const { user } = useContext(UserContext);
  return user ? <MainPage /> : <LoginPage />;
}

export default App;
