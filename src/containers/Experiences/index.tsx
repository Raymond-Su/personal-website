import React, { FC } from 'react';
import { Fade } from 'react-awesome-reveal';

import ExperienceCard from '../../components/ExperienceCard';
import { SectionContainer, SectionGridContainer, SectionHeading } from '../../components/Section';
import { workExperiences } from '../../data/experiences';

const Experiences: FC = () => {
  return (
    <Fade duration={1500}>
      <SectionContainer id='experiences'>
        <SectionHeading title='Experiences' />
        <SectionGridContainer>
          {workExperiences.map((card, i) => {
            return <ExperienceCard key={i} cardInfo={card} />;
          })}
        </SectionGridContainer>
      </SectionContainer>
    </Fade>
  );
};

export default Experiences;
