import './ProjectCard.scss';

import React, { FC } from 'react';

import { CDNSkillIcons, fontAwesomeSkillsIcons } from '../../assets/Skills';
import { link } from '../../types';

interface ProjectCardProps {
  cardImage: string;
  title: string;
  description: string;
  tags: Array<string>;
  links: link[];
  handleAnalytics: (eventType: string, metrics: Record<string, unknown>) => void;
}

const ProjectCard: FC<ProjectCardProps> = ({
  cardImage,
  title,
  description,
  tags,
  links,
  handleAnalytics
}: ProjectCardProps) => {
  const openProjectInNewWindow = (type: string, url: string) => {
    handleAnalytics('project', { type: type, link: url });
    const win = window.open(url, '_blank');
    win?.focus();
  };
  return (
    <div className='project-card'>
      <img loading='lazy' src={cardImage} className='project-img' />
      <div className='project-data'>
        <div className='project-content'>
          <div className='project-title-div'>
            <p className='project-title'>{title}</p>
          </div>
          <div className='project-description'>
            <p>{description}</p>
          </div>
          <div className='project-tags'>
            {tags.map((tag, tagIndex) => (
              <div className='project-tag-div' key={`tag-div-${tagIndex}`}>
                {Object.keys(fontAwesomeSkillsIcons).includes(tag) ? (
                  <i className={`${fontAwesomeSkillsIcons[tag]} project-tagimg`} />
                ) : (
                  <img className='project-tagimg' src={CDNSkillIcons[tag]} alt='' />
                )}
                <span>{tag}</span>
              </div>
            ))}
          </div>
          <div className='project-links'>
            {links.map((link, i) => (
              <span
                key={i}
                className='project-link'
                onClick={() => openProjectInNewWindow(link.name, link.url)}
              >
                {link.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
