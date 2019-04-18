import React from "react";
import { FAKE_USER } from "../api";
let UserContext;
const { Provider, Consumer } = (UserContext = React.createContext());

// Context = { <Provider>, <Consumer> }

class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: FAKE_USER,
      onLogout: this.handleLogout,
      onLogin: this.handleLogin
    };
  }

  handleLogin = user => {
    console.log("======로그인 성공=====>", user);
    this.setState({ user });
  };
  handleLogout = () => {
    this.setState({ user: null });
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { UserProvider, Consumer as UserConsumer, UserContext };
