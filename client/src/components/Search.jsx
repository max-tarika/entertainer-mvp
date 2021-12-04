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
  const [searchCategory, setSearchCategory] = useState('');
  const [showMore, setShowMore] = useState(false);
  const eventCategories = ['All', 'Arts & Theatre', 'Music', 'Sports', 'Miscellaneous', 'Film', 'Donation'];

  const handleSegmentClick = (e) => {
    setSearchCategory(e.target.value);
  };

  const handleSearch = () => {
    axios.get('/events', { params: { searchCategory } })
      .then(({ data }) => {
        setEvents(data);
        setDisplayedEvents(data.slice(0, 5));
      })
      .catch((err) => console.error(err));
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
          Location: Denver
        </div>
        <div className="segmentSelector">
          <select name="segment" className="segment" onChange={handleSegmentClick}>
            {eventCategories.map((category) => <option value={category} key={category}>{category}</option>)}
          </select>
        </div>
        <button className="searchButton" type="button" onClick={handleSearch}>Show Me the Events Babyyyyyy</button>
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
