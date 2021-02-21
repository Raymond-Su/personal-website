import React, { FC } from 'react';
import './Social.css';
import EmailLogo from '../../assets/Social/Email_Icon.png';
import LinkedInLogo from '../../assets/Social/Linkedin_Icon.png';
import GithubLogo from '../../assets/Social/Github_Icon.png';

const Social: FC = () => {
  return (
    <div className='social-bar'>
      <a href='mailto:su.raymond@outlook.com.au'>
        <img className='icon-button' alt='email' src={EmailLogo} />
      </a>
      <a href='https://linkedin.com/in/raymond-su/' target='_blank' rel='noopener noreferrer'>
        <img className='icon-button' alt='linkedin' src={LinkedInLogo} />
      </a>
      <a href='https://github.com/Raymond-su' target='_blank' rel='noopener noreferrer'>
        <img className='icon-button' alt='github' src={GithubLogo} />
      </a>
    </div>
  );
};

export default Social;
