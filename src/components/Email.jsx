import React from "react";

const Email = email => (
  <li key={email.id}>
    <div className="sender">{email.sender}</div>
    <div className="subject">{email.subject}</div>
    <div className="preview">{email.preview}</div>
  </li>
);

export default Email;
