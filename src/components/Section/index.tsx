import './Section.scss';

import React, { FC, HTMLProps } from 'react';

interface SectionHeadingProps {
  title: string;
  subTitle?: string;
}

export const SectionHeading: FC<SectionHeadingProps> = ({
  title,
  subTitle = ''
}: SectionHeadingProps) => (
  <div className='section-heading-container'>
    <h1 className='section-heading-title'>{title} </h1>
    {subTitle && <p className='section-heading-subtitle'>{subTitle}</p>}
  </div>
);

export const SectionContainer: FC<HTMLProps<HTMLDivElement>> = ({ ...props }) => (
  <div {...props} className='section-container' />
);

export const SectionGridContainer: FC<HTMLProps<HTMLDivElement>> = ({ ...props }) => (
  <div {...props} className='section-grid-container' />
);
