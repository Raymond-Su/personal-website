import React, { FC, useState } from 'react';
import menuIcon from '../../assets/menu-icon.svg';
import classnames from 'classnames';
import Headroom from 'react-headroom';

import './Header.css';

const Header: FC = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Headroom>
      {/* <header
        className={classnames({
          topnav: true,
          responsive: click
        })}
        id='myTopnav'
      >
        <a href='/'>Home</a>
        <a href='/Journey'>Journey</a>
        <a href='/Projects'>Projects</a>
        <div className='icon' onClick={handleClick}>
          <img src={menuIcon} alt='menu icon' className='menuIcon' />
        </div>
      </header> */}
      <header className='header'>
        <a href='/' className='logo'>
          <span className='grey-color'> &lt;</span>
          <span className='logo-name'>Raymond Su</span>
          <span className='grey-color'>/&gt;</span>
        </a>
        <input className='menu-btn' type='checkbox' id='menu-btn' />
        <label className='menu-icon' htmlFor='menu-btn' style={{ color: 'white' }}>
          <span className={'navicon'}></span>
        </label>
        <ul className={'menu'}>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#experience'>Work Experiences</a>
          </li>
          <li>
            <a href='#opensource'>Open Source</a>
          </li>
          <li>
            <a href='#achievements'>Achievements</a>
          </li>
          <li>
            <a href='#blogs'>Blogs</a>
          </li>
          <li>
            <a href='#talks'>Talks</a>
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
