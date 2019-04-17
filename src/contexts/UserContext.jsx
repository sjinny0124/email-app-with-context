import React from "react";
import { FAKE_USER } from "../api";

const { Provider, Consumer } = React.createContext();

// Context = { <Provider>, <Consumer> }

class UserProvider extends React.Component {
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
    return (
      <Provider
        value={{
          user: this.state.currentUser,
          onLogout: this.handleLogout,
          onLogin: this.handleLogin
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { UserProvider, Consumer as UserConsumer };
