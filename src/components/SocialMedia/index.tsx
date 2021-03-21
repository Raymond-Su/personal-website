import React, { FC } from 'react';
import { analyticslogEvent } from '../../analytics';
import { contact } from '../../types';
import './SocialMedia.css';

interface SocialMediaLinks {
  contacts: contact[];
}

const SocialMedia: FC<SocialMediaLinks> = ({ contacts }: SocialMediaLinks) => {
  const handleLinkOpen = (contactType: string, link: string) => {
    analyticslogEvent('Contact', { type: contactType });
    window.open(link);
  };
  return (
    <div className='social-media-div'>
      {contacts.map((contact, index) => (
        <div
          className={`icon-button ${contact.type}`}
          onClick={() => handleLinkOpen(contact.type, contact.link)}
          key={`contact-${index}`}
        >
          <i className={contact.faIcon} />
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
