import React from 'react';

import '../css/Header.css';
import { Logo } from '../utils/SVGIcons';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className='logoContainer' onClick={() => navigate('/')}>
        <Logo />
      </div>
      <SearchBar />
    </header>
  );
};

export default Header;
