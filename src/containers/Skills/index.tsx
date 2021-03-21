import React, { FC } from 'react';
import { Fade } from 'react-awesome-reveal';

import { SectionContainer, SectionHeading } from '../../components/Section';
import SoftwareSkill from '../../components/SoftwareSkills';
import { skillsSection, softwareSkills } from '../../data/skills';

const Skills: FC = () => {
  return (
    <Fade duration={1500}>
      <SectionContainer id='skills'>
        <SectionHeading title={skillsSection.title} subTitle={skillsSection.subTitle} />
        <SoftwareSkill skills={softwareSkills} />
      </SectionContainer>
    </Fade>
  );
};

export default Skills;
