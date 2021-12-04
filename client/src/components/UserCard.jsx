import React from 'react';

const UserCard = ({ user }) => (
  <div className="userCard">
    <div className="userInfo">
      <div>{user.username}</div>
      <div>
        {user.first_name}
        {' '}
        {user.last_name}
      </div>
    </div>
    <div>Events Attending:</div>
    <div>
      {user.events.map((event) => (
        <div className="userEventWrapper">
          <div>{event.name}</div>
          <div>{event.date}</div>
          <div>
            {event.city}
            {', '}
            {event.state}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default UserCard;
