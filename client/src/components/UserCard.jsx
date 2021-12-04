import React from 'react';

const UserCard = ({ user }) => (
  <div className="userCard">
    <div>{user.first_name}</div>
    <div>{user.last_name}</div>
    <div>{user.username}</div>
    <div>Events Attending:</div>
    <div>
      {user.events.map((event) => <div>{event.name}</div>)}
    </div>
  </div>
);

export default UserCard;
