import React, { Component } from "react";
import { FAKE_USER } from "./api";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import UserContext from "./contexts/UserContext";
import "./App.css";

class App extends Component {
  state = {
    currentUser: FAKE_USER
  };

  handleLogin = user => {
    console.log("======로그인 성공=====>", user);
    this.setState({ currentUser: user });
  };
  handleLogout = () => {
    this.setState({ currentUser: null });
  };

  render() {
    const { currentUser } = this.state;
    return (
      <UserContext.Provider
        value={{
          user: currentUser,
          onLogout: this.handleLogout,
          onLogin: this.handleLogin
        }}
      >
        {currentUser ? <MainPage /> : <LoginPage />}
      </UserContext.Provider>
    );
  }
}

export default App;
