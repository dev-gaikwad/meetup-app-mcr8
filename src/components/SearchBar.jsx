import React, { useContext } from 'react';
import { MeetUpContext } from '../context/MeetUpContext';

const SearchBar = () => {
  const { search } = useContext(MeetUpContext);
  return (
    <input type='text' placeholder='Search...' onChange={(e) => search(e)} />
  );
};

export default SearchBar;
