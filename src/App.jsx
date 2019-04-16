import React, { Component } from "react";
import { FAKE_USER } from './api';
import LoginPage from "./pages/LoginPage";
import "./App.css";

const Home = () => {
  return (
    <div>
      <h2>로그인 페이지</h2>
    </div>
  );
};

class App extends Component {
  state = {
    currentUser: null
  };

  handleLogin = user => {
    console.log("======로그인 성공=====>", user);
    this.setState({ currentUser: user });
  };
  handleLogout = () => {
    this.setState({ currentUser: null });
  };

  render() {
    return this.state.currentUser ? (
      <Home />
    ) : (
      <LoginPage onLogin={this.handleLogin} />
    );
  }
}

export default App;
