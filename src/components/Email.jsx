import React from "react";

const Email = ({ onSelectEmail, ...email }) => {
  return (
    <li key={email.id} onClick={e => onSelectEmail(email)}>
      <div className="sender">{email.sender}</div>
      <div className="subject">{email.subject}</div>
      <div className="preview">{email.preview}</div>
    </li>
  );
};

export default Email;
