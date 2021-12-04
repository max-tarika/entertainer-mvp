import React, { useContext } from 'react';
import AppContext from './context.js';

const Header = () => {
  const { setCurrentUser, users } = useContext(AppContext);

  const handleUserSelect = (e) => {
    setCurrentUser(e.target.value);
  };

  return (
    <div id="header">
      <h1>Event Lord</h1>
      <select name="userSelect" className="userSelect" onChange={handleUserSelect}>
        <option>Choose a User</option>
        {users.map((user) => <option value={user.id} key={user.id}>{user.username}</option>)}
      </select>
    </div>
  );
};

export default Header;
