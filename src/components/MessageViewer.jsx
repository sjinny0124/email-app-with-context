import React, { useContext } from "react";
import { EmailContext } from "../contexts/EmailContext";
import styled from "styled-components";

const Viewer = styled.div`
  padding: 10px;
  grid-area: MessageList;

  h2 {
    font-size: 1.3em;
    padding-bottom: 7px;
    border-bottom: 1px solid #ccc;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: #1a1ae8;
    text-decoration: underline;
    float: right;
    font-size: 15px;
  }
`;
const MessageViewer = () => {
  const { currentEmail, onSelectEmail } = useContext(EmailContext);
  return (
    <Viewer className="MessageList">
      <button onClick={() => onSelectEmail(null)} back />
      <h2>{currentEmail.subject}</h2>
      <h2>{currentEmail.body}</h2>
    </Viewer>
  );
};

export default MessageViewer;
