import axios from 'axios';
import React, { useContext } from 'react';
import AppContext from './context.js';

const EventCard = ({ event }) => {
  const { currentUser, getUsers } = useContext(AppContext);

  const handleEventClick = () => {
    if (currentUser.length === 0) {
      alert('Please Select a User');
    }
    axios.post('/users/event', { currentUser, event })
      .then(() => getUsers())
      .catch((err) => console.error(err));
  };

  return (
    <div className="eventCard">
      <div className="eventColumnWrapper1">
        <div className="eventImageWrapper">
          <img className="eventImage" src={event.image_url} alt={event.name} />
        </div>
        <div style={{ paddingTop: '5px' }}>
          {event.city}
          ,
          {' '}
          {event.state}
        </div>
      </div>
      <div className="eventColumnWrapper2">
        <div className="eventDescription">{event.name}</div>
        <div className="eventDescription">{event.venue}</div>
        <div className="eventDate">
          <div className="eventDescription">{event.time}</div>
          <div className="eventDescription">{event.date}</div>
        </div>
        <div className="eventPriceRange">
          <div>
            {' '}
            Pricing: $
            {event.price_min}
            {' '}
            - $
            {event.price_max}
          </div>
        </div>
      </div>
      <div className="eventColumnWrapper3">
        <button className="selectEventButton" type="button" onClick={handleEventClick}>Attending</button>
        <div className="ticketWrapper"><a href={event.ticket_url} className="ticketButton">Buy Tickets</a></div>
      </div>
    </div>
  );
};

export default EventCard;
