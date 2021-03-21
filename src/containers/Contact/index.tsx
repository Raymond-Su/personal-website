import React, { FC } from 'react';
import './Contact.css';
import SocialMedia from '../../components/SocialMedia';

import { Fade } from 'react-awesome-reveal';
import { Contacts } from '../../data/contact';

const Contact: FC = () => {
  return (
    <Fade>
      <div className='contact-div-main' id='contact'>
        <SocialMedia contacts={Contacts} />
      </div>
    </Fade>
  );
};

export default Contact;
