import React from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";

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
    <UserContext.Consumer>
      {({ user }) => {
        return (
          <List className="MessageList">
            <div className="no-messages">
              Your mailbox is empty, {user.firstName}!
            </div>
          </List>
        );
      }}
    </UserContext.Consumer>
  );
};

export default MessageList;
