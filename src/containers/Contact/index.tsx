import React, { FC } from 'react';
import './Contact.css';
import SocialMedia from '../../components/SocialMedia';
// import MailIcon from '../../assets/Contact/contactMail.svg';

import { Fade } from 'react-awesome-reveal';
import { ContactLinks } from '../../data/contact';

const Contact: FC = () => {
  return (
    <Fade>
      <div className='contact-div-main' id='contact'>
        <div className='contact-text-div'>
          <SocialMedia
            github={ContactLinks.github}
            gmail={ContactLinks.gmail}
            linkedin={ContactLinks.linkedin}
            medium={ContactLinks.medium}
          />
        </div>
        {/* <div className='contact-image-div'>
            <img alt='Mail Icon' src={MailIcon} />
          </div> */}
      </div>
    </Fade>
  );
};

export default Contact;
