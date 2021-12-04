/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import React, { useState, useContext } from 'react';
import AppContext from './context.js';
import UserCard from './UserCard.jsx';

const Forum = () => {
  const { users, getUsers, currentUser } = useContext(AppContext);
  const [newUser, setNewUser] = useState({});

  const handleFormChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.title]: e.target.value,
    });
  };

  const handleAddNewUserClick = () => {
    axios.post('/users', { newUser })
      .then(() => getUsers())
      .catch((err) => console.error(err));
  };

  return (
    <div id="forum">
      <div className="userForm">
        <label>First Name: </label>
        <input type="text" className="formName" title="first_name" onChange={handleFormChange} />
        <label>Last Name: </label>
        <input type="text" className="formName" title="last_name" onChange={handleFormChange} />
        <label>Username: </label>
        <input type="text" className="formName" title="username" onChange={handleFormChange} />
        <button type="button" onClick={handleAddNewUserClick}>Add New User</button>
      </div>
      {/* <div className="currentUser">
        <div>{currentUser.username}</div>
        <div>
          {currentUser.events.map((event) => {})}
        </div>
      </div> */}
      <div className="usersContainer">
        <div className="usersContainerTitle">Friends List:</div>
        <div>
          {users.map((user) => <UserCard user={user} key={user.id} />)}
        </div>
      </div>
    </div>
  );
};

export default Forum;
