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
    return this.state.currentUser ? (
      <UserContext.Provider
        value={{ user: currentUser, onLogout: this.handleLogout }}
      >
        <MainPage user={currentUser} onLogout={this.handleLogout} />
      </UserContext.Provider>
    ) : (
      <LoginPage onLogin={this.handleLogin} />
    );
  }
}

export default App;
