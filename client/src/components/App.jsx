import React, { useState, useContext } from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import Search from './Search.jsx';
import Forum from './Forum.jsx';
import AppContext from './context.js';

const App = () => {
  const [currentUser, setCurrentUser] = useState('');

  // useEffect(() => {
  //   axios.get('/users')

  //   axios.get('/events')
  // }, []);

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
