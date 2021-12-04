/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import Search from './Search.jsx';
import Forum from './Forum.jsx';
import AppContext from './context.js';

const App = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [displayedEvents, setDisplayedEvents] = useState([]);

  const getUsers = () => {
    axios.get('/users')
      .then(({ data }) => {
        if (data) {
          setUsers(data);
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getUsers();

    axios.get('/events', { params: { location: 'Denver', segment: 'All' } })
      .then(({ data }) => {
        setEvents(data);
        setDisplayedEvents(data.slice(0, 5));
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <AppContext.Provider value={{
      events,
      setEvents,
      displayedEvents,
      setDisplayedEvents,
      currentUser,
      setCurrentUser,
      getUsers,
      users,
    }}
    >
      <>
        <Header />
        <div id="body">
          <Search />
          <Forum />
        </div>
      </>
    </AppContext.Provider>
  );
};

export default App;
