import React from "react";
import styled from "styled-components";
import UserMenu from "./UserMenu";

const GridHeader = styled.header`
  grid-area: Header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #9eb2fb;

  h2 {
    margin: 0;
    font-weight: 600;
    font-size: 20px;
    color: #44b;
  }
`;

const Header = ({ onLogout }) => (
  <GridHeader className="Header">
    <h2>MailBox</h2>
    <UserMenu />
  </GridHeader>
);

export default Header;
