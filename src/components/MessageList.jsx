import React from "react";
import styled from "styled-components";
import { UserConsumer } from "../contexts/UserContext";
import { EmailConsumer } from "../contexts/EmailContext";
const List = styled.div`
  grid-area: MessageList;
  padding: 10px;

  .no-messages {
    text-align: center;
    color: #999;
    margin-top: 40px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 10px 3px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    user-select: none;

    &:hover {
      background: #f5f5f5;
    }

    &:active {
      transition: background 0.3s;
      background: #ebefff;
    }

    .subject {
      font-weight: 400;
    }

    .preview {
      opacity: 0.6;
      font-size: 0.8em;
    }
  }
`;

const MessageList = () => (
  <List className="MessageList">
    <EmailConsumer>
      {emails => {
        return (
          <div className="MessageList">
            <ul>
              {emails.map(email => (
                <li key={email.id}>
                  <div className="sender">{email.sender}</div>
                  <div className="subject">{email.subject}</div>
                  <div className="preview">{email.preview}</div>
                </li>
              ))}
            </ul>
          </div>
        );
      }}
    </EmailConsumer>
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
  </List>
);

export default MessageList;
