import './Experiences.css';

import React, { FC } from 'react';
import { Fade } from 'react-awesome-reveal';

import ExperienceCard from '../../components/ExperienceCard';
import { workExperiences } from '../../data/experiences';

const Experiences: FC = () => {
  return (
    <div id='experiences'>
      <Fade duration={1500}>
        <div className='experience-container' id='workExperience'>
          <div>
            <h1 className='experience-heading'>Experiences</h1>
            <div className='experience-cards-div'>
              {workExperiences.map((card, i) => {
                return <ExperienceCard key={i} cardInfo={card} />;
              })}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Experiences;
