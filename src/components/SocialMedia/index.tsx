import React, { FC } from 'react';
import './SocialMedia.css';

interface SocialMediaLinks {
  github?: string;
  linkedin?: string;
  gmail?: string;
  gitlab?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  medium?: string;
  stackoverflow?: string;
}

const SocialMedia: FC<SocialMediaLinks> = ({
  github,
  linkedin,
  gmail,
  gitlab,
  facebook,
  instagram,
  twitter,
  medium,
  stackoverflow
}: SocialMediaLinks) => {
  return (
    <div className='social-media-div'>
      {github ? (
        <a href={github} className='icon-button github' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-github'></i>
          <span></span>
        </a>
      ) : null}

      {linkedin ? (
        <a
          href={linkedin}
          className='icon-button linkedin'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-linkedin-in'></i>
          <span></span>
        </a>
      ) : null}

      {gmail ? (
        <a
          href={`mailto:${gmail}`}
          className='icon-button google'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-google'></i>
          <span></span>
        </a>
      ) : null}

      {gitlab ? (
        <a href={gitlab} className='icon-button gitlab' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-gitlab'></i>
          <span></span>
        </a>
      ) : null}

      {facebook ? (
        <a
          href={facebook}
          className='icon-button facebook'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-facebook-f'></i>
          <span></span>
        </a>
      ) : null}

      {instagram ? (
        <a
          href={instagram}
          className='icon-button instagram'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-instagram'></i>
          <span></span>
        </a>
      ) : null}

      {twitter ? (
        <a href={twitter} className='icon-button twitter' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-twitter'></i>
          <span></span>
        </a>
      ) : null}

      {medium ? (
        <a href={medium} className='icon-button medium' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-medium'></i>
          <span></span>
        </a>
      ) : null}

      {stackoverflow ? (
        <a
          href={stackoverflow}
          className='icon-button stack-overflow'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-stack-overflow'></i>
          <span></span>
        </a>
      ) : null}
    </div>
  );
};

export default SocialMedia;
