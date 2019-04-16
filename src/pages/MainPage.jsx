import React from "react";
import Header from "../components/Header";
import MessageList from "../components/MessageList";
import styled from "styled-components";

const Page = styled.main`
  display: grid;
  height: 100vh;
  grid-template-columns: 250px;
  grid-template-rows: 49px;
  grid-template-areas:
    "Header Header"
    "MessageList MessageList";
`;
const MainPage = ({ user, onLogout }) => (
  <Page className="MainPage">
    <Header />
    <MessageList />
  </Page>
);

export default MainPage;
