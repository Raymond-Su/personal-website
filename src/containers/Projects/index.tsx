import React, { FC } from 'react';
import './Projects.css';
import { Fade } from 'react-awesome-reveal';
import { projectsList, projectsSummary } from '../../data/projects';
import { CDNSkillImages, fontAwesomeImages } from '../../data/skills';

const Projects: FC = () => {
  function openProjectInNewWindow(url: string) {
    const win = window.open(url, '_blank');
    win?.focus();
  }
  return (
    <Fade duration={1000}>
      <div className='main' id='projects'>
        <div className='projects-section'>
          {/* Skills Heading not apart of CSS */}
          <h1 className='skills-heading'>{projectsSummary.title}</h1>
          <p className='subTitle project-subtitle'>{projectsSummary.subtitle}</p>

          <div className='projects-container'>
            {projectsList.map((project, i) => {
              return (
                <div key={i} className='project-card'>
                  <img loading='lazy' src={project.cardImage} className='project-img' />
                  <div className='project-data'>
                    <div className='project-content'>
                      <div className='project-title-div'>
                        <p className='project-title'>{project.title}</p>
                      </div>
                      <div className='project-description'>
                        <p>{project.description}</p>
                      </div>
                      <div className='project-tags'>
                        {project.tags.map((tag, tagIndex) => (
                          <div className='project-tag-div' key={`tag-div-${tagIndex}`}>
                            {Object.keys(fontAwesomeImages).includes(tag) ? (
                              <i className={`${fontAwesomeImages[tag]} project-tagimg`} />
                            ) : (
                              <img className='project-tagimg' src={CDNSkillImages[tag]} alt='' />
                            )}
                            <span>{tag}</span>
                          </div>
                        ))}
                      </div>
                      <div className='project-links'>
                        {project.links.map((link, i) => (
                          <span
                            key={i}
                            className='project-link'
                            onClick={() => openProjectInNewWindow(link.url)}
                          >
                            {link.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Projects;
