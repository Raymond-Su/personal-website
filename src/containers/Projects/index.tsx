import React, { FC } from 'react';
import { Fade } from 'react-awesome-reveal';

import { analyticslogEvent } from '../../analytics';
import ProjectCard from '../../components/ProjectCard';
import { SectionContainer, SectionGridContainer, SectionHeading } from '../../components/Section';
import { projectsList, projectsSummary } from '../../data/projects';

const Projects: FC = () => {
  return (
    <Fade duration={1000}>
      <SectionContainer id='projects'>
        <SectionHeading title={projectsSummary.title} subTitle={projectsSummary.subtitle} />
        <SectionGridContainer>
          {projectsList.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              title={project.title}
              cardImage={project.cardImage}
              description={project.description}
              tags={project.tags}
              links={project.links}
              handleAnalytics={analyticslogEvent}
            />
          ))}
        </SectionGridContainer>
      </SectionContainer>
    </Fade>
  );
};

export default Projects;
