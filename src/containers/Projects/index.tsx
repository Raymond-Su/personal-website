import React, { FC } from 'react';
import { projectsList, tagImages } from '../../data/projects';
import './Projects.css';

const Projects: FC = () => {
  return (
    <div className='project-container'>
      <div className='project-body'>
        <div className='projectcards row page-content'>
          {projectsList.map(({ title, cardImage, description, tags }, index) => (
            <div className='column skill-card card' key={`project-index-${index}`}>
              <div
                className='wrapper'
                style={{ background: `url(${cardImage}) center / cover no-repeat` }}
              >
                <div className='data'>
                  <div className='content'>
                    <div className='title-div'>
                      <p className='title'>{title}</p>
                    </div>
                    <div className='description'>
                      <p>{description}</p>
                    </div>
                    {tags.map((tag, tagIndex) => (
                      <button className='tagbutton' key={`tag-button-${tagIndex}`}>
                        <img
                          className='tagbutton tagimg'
                          width='40px'
                          src={tagImages[tag]}
                          alt=''
                        />
                        <span>{tag}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
