import './SocialMedia.css';

import React, { FC } from 'react';

import { contact } from '../../types';

interface SocialMediaLinks {
  contacts: contact[];
  handleAnalytics: (eventType: string, metrics: Record<string, unknown>) => void;
}

const SocialMedia: FC<SocialMediaLinks> = ({ contacts, handleAnalytics }: SocialMediaLinks) => {
  const handleLinkOpen = (contactType: string, link: string) => {
    handleAnalytics('Contact', { type: contactType });
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
