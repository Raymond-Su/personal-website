import React, { FC } from 'react';
import Headroom from 'react-headroom';

import './Header.css';

const Header: FC = () => {
  return (
    <Headroom>
      <header className='header'>
        <a href='/' className='logo'>
          <span className='grey-color'> &lt;</span>
          <span className='logo-name'>Raymond Su</span>
          <span className='grey-color'>/&gt;</span>
        </a>
        <input className='menu-btn' type='checkbox' id='menu-btn' />
        <label className='menu-icon' htmlFor='menu-btn' style={{ color: 'white' }}>
          <span className='navicon' />
        </label>
        <ul className='menu'>
          <li>
            <a href='#Home'>About Me</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#experiences'>Experiences</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact Me</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
};

export default Header;
