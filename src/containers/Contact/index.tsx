import React, { FC } from 'react';
import { Fade } from 'react-awesome-reveal';

import { analyticslogEvent } from '../../analytics';
import { SectionContainer } from '../../components/Section';
import SocialMedia from '../../components/SocialMedia';
import { contactsList } from '../../data/contact';

const Contact: FC = () => {
  return (
    <Fade>
      <SectionContainer id='contact'>
        <SocialMedia contacts={contactsList} handleAnalytics={analyticslogEvent} />
      </SectionContainer>
    </Fade>
  );
};

export default Contact;
