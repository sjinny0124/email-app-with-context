import React from "react";
import styled from "styled-components";

const Page = styled.div`
  margin-top: 100px;

  form {
    display: flex;
    flex-direction: column;
    max-width: 250px;
    margin: 0 auto;
    label {
      display: flex;
      flex-direction: column;
      margin-bottom: 1em;
      font-weight: bold;
    }

    input {
      padding: 8px 6px;
      border: 1px solid #aaa;
      border-radius: 2px;
      font-size: 14px;
      &:focus {
        outline: none;
        border: 1px solid #3257ff;
      }
    }

    button {
      background: #3257ff;
      color: #fff;
      padding: 10px;
      border: none;
      border-radius: 3px;
      box-shadow: 0 1px 2px #3257ff;
      transition: box-shadow, background-color 0.12s;
      outline: none;
      font-size: 18px;
      &:hover {
        background-color: #1431b9;
        cursor: pointer;
      }
      &:focus {
        box-shadow: 0 1px 8px #3257ff;
      }
      &:active {
        transform: scale(0.98);
      }
    }
    button[disabled] {
      opacity: 0.4;
    }
  }

  .error {
    background: #ffebee;
    color: #c62828;
    padding: 5px;
    font-size: 16px;
    text-align: center;
    margin-bottom: 1em;
  }
`;

class LoginPage extends React.Component {
  state = {
    loading: false,
    username: "",
    password: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    console.log(this.state.username);
    e.preventDefault();
  };

  render() {
    const { username, password, loading } = this.state;
    return (
      <Page>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <input
              name="username"
              value={username}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit" disabled={loading}>
            Sign In
          </button>
        </form>
      </Page>
    );
  }
}
export default LoginPage;
