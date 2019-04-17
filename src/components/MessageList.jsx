import React from "react";
import styled from "styled-components";
import { UserConsumer } from "../contexts/UserContext";

const List = styled.div`
  grid-area: MessageList;
  padding: 10px;

  .no-messages {
    text-align: center;
    color: #999;
    margin-top: 40px;
  }
`;

const MessageList = () => {
  return (
    <UserConsumer>
      {({ user }) => {
        return (
          <List className="MessageList">
            <div className="no-messages">
              Your mailbox is empty, {user.firstName}!
            </div>
          </List>
        );
      }}
    </UserConsumer>
  );
};

export default MessageList;
