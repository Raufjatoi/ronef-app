// components/Sidebar.js
import React, { useState, useEffect } from 'react';

const Sidebar = () => {
  const [servers, setServers] = useState([]);
  const [directMessages, setDirectMessages] = useState([]);

  useEffect(() => {
    // Fetch server data from API
    // Example:
    // fetch('/api/servers')
    //   .then(response => response.json())
    //   .then(data => setServers(data));

    // Fetch direct message data from API
    // Example:
    // fetch('/api/direct-messages')
    //   .then(response => response.json())
    //   .then(data => setDirectMessages(data));

    // Dummy data for demonstration
    const dummyServers = ['Server 1', 'Server 2', 'Server 3'];
    const dummyDirectMessages = ['User 1', 'User 2', 'User 3'];

    setServers(dummyServers);
    setDirectMessages(dummyDirectMessages);
  }, []);

  return (
    <aside>
      <div className="sidebar-content">
        <h1>RONEF</h1>
        <div id="server-list">
          <h2>Servers</h2>
          <ul>
            {servers.map((server, index) => (
              <li key={index}>
                <a href="#">{server}</a>
              </li>
            ))}
          </ul>
        </div>
        <div id="dm-list">
          <h2>Direct Messages</h2>
          <ul>
            {directMessages.map((dm, index) => (
              <li key={index}>
                <a href="#">{dm}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
