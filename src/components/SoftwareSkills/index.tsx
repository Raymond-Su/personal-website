import React, { FC } from 'react';
import './SoftwareSkill.css';
import { softwareSkills, fontAwesomeImages, CDNSkillImages } from '../../data/skills';

const SoftwareSkill: FC = () => {
  return (
    <div>
      <div className='software-skills-main-div'>
        <ul className='dev-icons'>
          {softwareSkills.map((skills, i) => {
            return (
              <li key={i} className='software-skill-inline'>
                {Object.keys(fontAwesomeImages).includes(skills) ? (
                  <i className={fontAwesomeImages[skills]} />
                ) : (
                  <img src={CDNSkillImages[skills]} alt='' />
                )}
                <p>{skills.toString()}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SoftwareSkill;
