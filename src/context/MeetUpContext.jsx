import { createContext, useState } from 'react';

import { data } from '../data/data';

export const MeetUpContext = createContext();

export const MeetUpContextProvider = ({ children }) => {
  const [allMeetUps, setAllMeetUps] = useState(data);
  const [displayEvents, setDisplayEvents] = useState([...data.meetups]);

  const search = (event) => {
    const searchTerm = event.target.value;
    let searchResults;
    if (searchTerm) {
      const searchArray = [...data.meetups];
      searchResults = searchArray.filter((meetup) =>
        meetup.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setDisplayEvents(searchResults);
    } else setDisplayEvents([...data.meetups]);
  };
  return (
    <MeetUpContext.Provider
      value={{ allMeetUps, setAllMeetUps, search, displayEvents }}
    >
      {children}
    </MeetUpContext.Provider>
  );
};
