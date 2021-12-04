/* eslint-disable react/function-component-definition */
/* eslint-disable max-len */
import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchCategory, setSearchCategory] = useState('');
  const [events, setEvents] = useState([]);
  const [displayedEvents, setDisplayedEvents] = useState([]);
  const eventCategories = ['Arts & Theatre', 'Music', 'Sports', 'Miscellaneous', 'Film', 'Donation'];

  const handleSegmentClick = (e) => {
    setSearchCategory(e.target.value);
  };

  const handleSearch = () => {
    axios.get('/events', { searchCategory });
  };

  return (
    <div id="search">
      <div className="searchHeader">
        <div className="locationSearch">
          Location: Denver
        </div>
        <div className="segmentSelector">
          <select name="segment" className="segment" onChange={handleSegmentClick}>
            {eventCategories.map((category) => <option value={category} key={category}>{category}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Search;
