import React from "react";

const MainPage = ({ user, onLogout }) => (
  <main>
    <header className="Header">
      <h2>MailBox</h2>
      <div className="UserMenu">
        <img className="UserAvatar" alt="User avatar" src={user.avatar} />
        <ul>
          <li onClick={onLogout}>Logout</li>
        </ul>
      </div>
    </header>
    <div className="MessageList">
      <div className="no-messages">
        Your mailbox is empty, {user.firstName}!
      </div>
    </div>
  </main>
);

export default MainPage;
