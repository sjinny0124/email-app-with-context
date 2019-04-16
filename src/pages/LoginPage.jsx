import React from "react";
class LoginPage extends React.Component {
  state = {
    loading: false
  };
  render() {
    const { loading } = this.state;
    return (
      <div className="LoginPage">
        <form>
          <label>
            Username
            <input name="username" type="text" />
          </label>
          <label>
            Password
            <input name="password" type="password" />
          </label>
          <button type="submit" disabled={loading}>
            Sign In
          </button>
        </form>
      </div>
    );
  }
}
export default LoginPage;
