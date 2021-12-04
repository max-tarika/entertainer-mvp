/* eslint-disable react/function-component-definition */
/* eslint-disable max-len */
import React, { useState, useContext } from 'react';
import axios from 'axios';
import AppContext from './context.js';
import EventCard from './EventCard.jsx';

const Search = () => {
  const {
    events, setEvents, displayedEvents, setDisplayedEvents,
  } = useContext(AppContext);
  const [searchParameters, setSearchParameters] = useState({ location: 'Denver', segment: 'All' });
  const [showMore, setShowMore] = useState(false);
  const eventCategories = ['All', 'Arts & Theatre', 'Music', 'Sports', 'Miscellaneous', 'Film', 'Donation'];
  const eventLocations = ['Any', 'Atlanta', 'Boston', 'Denver', 'Las Vegas', 'Los Angeles', 'New York', 'Saskatchewan'];

  const handleParameterClick = (e) => {
    setSearchParameters({
      ...searchParameters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    axios.get('/events', { params: searchParameters })
      .then(({ data }) => {
        setEvents(data);
        setDisplayedEvents(data.slice(0, 5));
      })
      .catch((err) => console.error(err));
    setShowMore(false);
  };

  const handleShowMoreClick = () => {
    setDisplayedEvents(events);
    setShowMore(true);
  };

  const handleShowLessClick = () => {
    setDisplayedEvents(events.slice(0, 5));
    setShowMore(false);
  };

  return (
    <div id="search">
      <div className="searchHeader">
        <div className="locationSelector">
          <div style={{ color: '#057DCD' }}><b>Location:</b></div>
          <select name="location" className="location" onChange={handleParameterClick}>
            {eventLocations.map((location) => <option value={location} key={location}>{location}</option>)}
          </select>
        </div>
        <div className="segmentSelector">
          <div style={{ color: '#057DCD' }}><b>Event Category:</b></div>
          <select name="segment" className="segment" onChange={handleParameterClick}>
            {eventCategories.map((category) => <option value={category} key={category}>{category}</option>)}
          </select>
        </div>
        <button className="searchButton" type="button" onClick={handleSearch}>Find Events</button>
      </div>
      <div className="searchFeedContainer">
        <div className="searchFeed">
          {displayedEvents.map((event) => <EventCard event={event} key={event.event_id} />)}
        </div>
        {showMore
          ? <button className="showMore" type="button" onClick={handleShowLessClick}>Show Less Events</button>
          : <button className="showMore" type="button" onClick={handleShowMoreClick}>Show More Events</button>}
      </div>
    </div>
  );
};

export default Search;
