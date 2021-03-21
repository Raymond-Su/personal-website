import './Skills.css';

import React, { FC } from 'react';
import { Fade } from 'react-awesome-reveal';

import SoftwareSkill from '../../components/SoftwareSkills';
import { skillsSection, softwareSkills } from '../../data/skills';

const Skills: FC = () => {
  return (
    <div className='main' id='skills'>
      <div className='skills-main-div'>
        <Fade duration={1500}>
          <div className='skills-text-div'>
            <h1 className='skills-heading'>{skillsSection.title} </h1>
            <p className='subTitle skills-text-subtitle'>{skillsSection.subTitle}</p>
            <SoftwareSkill skills={softwareSkills} />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Skills;
