import './Contact.css';

import React, { FC } from 'react';
import { Fade } from 'react-awesome-reveal';

import { analyticslogEvent } from '../../analytics';
import SocialMedia from '../../components/SocialMedia';
import { contactsList } from '../../data/contact';

const Contact: FC = () => {
  return (
    <Fade>
      <div className='contact-div-main' id='contact'>
        <SocialMedia contacts={contactsList} handleAnalytics={analyticslogEvent} />
      </div>
    </Fade>
  );
};

export default Contact;
