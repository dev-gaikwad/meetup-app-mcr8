import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AllEventsPage from './pages/AllEventsPage';
import EventDetailsPage from './pages/EventDetailsPage';
import { MeetUpContextProvider } from './context/MeetUpContext';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <MeetUpContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<AllEventsPage />} />
          <Route path='/details/:id' element={<EventDetailsPage />} />
        </Routes>
      </MeetUpContextProvider>
    </Router>
  );
};

export default App;
