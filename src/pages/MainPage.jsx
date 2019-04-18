import React, { useContext } from "react";
import Header from "../components/Header";
import MessageList from "../components/MessageList";
import styled from "styled-components";
import { EmailContext } from "../contexts/EmailContext";
import MessageViewer from "../components/MessageViewer";

const Page = styled.main`
  display: grid;
  height: 100vh;
  grid-template-columns: 250px;
  grid-template-rows: 49px;
  grid-template-areas:
    "Header Header"
    "MessageList MessageList";
`;
const MainPage = () => {
  const { currentEmail } = useContext(EmailContext);

  return (
    <Page className="MainPage">
      <Header />
      {currentEmail ? <MessageViewer /> : <MessageList />}
    </Page>
  );
};

export default MainPage;
