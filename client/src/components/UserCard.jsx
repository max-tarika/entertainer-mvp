import React from 'react';

const UserCard = ({ user }) => (
  <div className="userCard">
    <div className="userInfo">
      <div style={{ paddingRight: '10px' }}>
        <b>
          {user.first_name}
          {' '}
          {user.last_name}
        </b>
      </div>
      <div>
        @
        {user.username}
      </div>
    </div>
    <div style={{ paddingLeft: '5px' }}><b>Events Attending:</b></div>
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
