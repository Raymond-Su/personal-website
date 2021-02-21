import React, { FC } from 'react';
import './ExperienceCard.css';

import { experience } from '../../types';

interface ExperienceCardProps {
  cardInfo: experience;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ cardInfo }: ExperienceCardProps) => {
  return (
    <div className='experience-card'>
      <div style={{ background: cardInfo.companylogoColour }} className='experience-banner'>
        <div className='experience-blurred_div'></div>
        <div className='experience-div-company'>
          <h5 className='experience-text-company'>{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={'anonymous'}
          className='experience-roundedimg'
          src={cardInfo.companylogo}
          alt={cardInfo.company}
        />
      </div>
      <div className='experience-text-details'>
        <h5 className='experience-text-role'>{cardInfo.role}</h5>
        <h5 className='experience-text-date'>{cardInfo.date}</h5>
        <p className='subTitle experience-text-desc'>{cardInfo.desc}</p>
        <ul>
          {cardInfo.descBullets &&
            cardInfo.descBullets.map((item, i) => (
              <li key={i} className='subTitle'>
                {item}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
