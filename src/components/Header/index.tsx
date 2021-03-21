import './Header.css';

import React, { FC } from 'react';
import Headroom from 'react-headroom';

const Header: FC = () => {
  return (
    <Headroom>
      <header className='header'>
        <input className='menu-btn' type='checkbox' id='menu-btn' />
        <label className='menu-icon' htmlFor='menu-btn' style={{ color: 'white' }}>
          <span className='navicon' />
        </label>
        <div className='menu'>
          <a href='#Home'>About Me</a>
          <a href='#skills'>Skills</a>
          <a href='#experiences'>Experiences</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact Me</a>
        </div>
      </header>
    </Headroom>
  );
};

export default Header;
