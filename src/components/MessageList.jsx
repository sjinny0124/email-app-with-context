import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";
import { EmailContext } from "../contexts/EmailContext";
//import Email from "./Email";

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

const Email = React.memo(function({ email, onSelectEmail }) {
  console.log("========이메일", email);
  return (
    <li onClick={() => onSelectEmail(email)}>
      <div className="sender">{email.sender}</div>
      <div className="subject">{email.subject}</div>
      <div className="preview">{email.preview}</div>
    </li>
  );
});

function MessageList() {
  const { emails, loading, onSelectEmail } = useContext(EmailContext);
  const { user } = useContext(UserContext);
  return (
    <List className="MessageList">
      {loading ? (
        <div className="no-messages">Loading...</div>
      ) : emails.length === 0 ? (
        <div className="no-messages">
          Your mailbox is empty, {user.firstName}!
        </div>
      ) : (
        <div className="MessageList">
          <ul>
            {emails.map(email => (
              <Email
                key={email.id}
                email={email}
                onSelectEmail={onSelectEmail}
              />
            ))}
          </ul>
        </div>
      )}
    </List>
  );
}

export default MessageList;
