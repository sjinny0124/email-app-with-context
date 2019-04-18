import React from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";

const Menu = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  ul {
    font-size: 16px;
    list-style: none;
    position: absolute;
    top: 35px;
    right: 5px;
    margin: 0;
    padding: 5px 0;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  }
  li {
    cursor: pointer;
    display: block;
    padding: 3px 20px;
    &:hover {
      background-color: #e3eafd;
    }
  }

  .UserAvatar {
    height: 36px;
    border-radius: 50%;
  }
`;

class UserMenu extends React.PureComponent {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
    this.menuULRef = React.createRef();
  }

  handleToggleMenu = e => {
    this.setState({
      showMenu: !this.state.showMenu
    });

    e.stopPropagation();
    //e.preventDefault();
  };

  handleClick = e => {
    if (e.target !== this.menuULRef.current) {
      this.setState({
        showMenu: false
      });
    }
  };

  componentDidMount() {
    document.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick);
  }

  render() {
    const { user, onLogout } = this.context;
    return (
      <Menu className="UserMenu">
        <img
          className="UserAvatar"
          alt="User avatar"
          src={user.avatar}
          onClick={this.handleToggleMenu}
          ref={this.menuULRef}
        />
        {this.state.showMenu && (
          <ul>
            <li onClick={onLogout}>Logout</li>
          </ul>
        )}
      </Menu>
    );
  }
}

export default UserMenu;
