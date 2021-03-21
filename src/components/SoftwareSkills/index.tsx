import './SoftwareSkill.css';

import React, { FC } from 'react';

import { CDNSkillIcons, fontAwesomeSkillsIcons } from '../../assets/Skills';

interface SoftwareSkillProps {
  skills: string[];
}

const SoftwareSkill: FC<SoftwareSkillProps> = ({ skills }: SoftwareSkillProps) => {
  return (
    <div>
      <div className='software-skills-main-div'>
        <ul className='dev-icons'>
          {skills.map((skill, i) => {
            return (
              <li key={i} className='software-skill-inline'>
                {Object.keys(fontAwesomeSkillsIcons).includes(skill) ? (
                  <i className={fontAwesomeSkillsIcons[skill]} />
                ) : (
                  <img src={CDNSkillIcons[skill]} alt='' />
                )}
                <p>{skill.toString()}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SoftwareSkill;
