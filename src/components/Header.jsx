import React from 'react';

import '../css/Header.css';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header>
      <h3>MeetUp</h3>
      <SearchBar />
    </header>
  );
};

export default Header;
