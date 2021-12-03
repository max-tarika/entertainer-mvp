import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Search from './Search';
import Forum from './Forum';
import AppContext from './context.js';

const App = () => {
  const [events, setEvents] = useState([]);
  const [displayedEvents, setDisplayedEvents] = useState([]);
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    axios.get('/users')

    axios.get('/events')
  })

  return (
    <AppContext.Provider value={{
      events,
      setEvents,
      displayedEvents,
      setDisplayedEvents,
      currentUser,
      setCurrentUser,
    }}
    >
      <React.Fragment>
       <Header />
       <Search />
       <Forum />
      </React.Fragment>
    </AppContext.Provider>
  );
};

export default App;
