import React, { FC } from 'react';
import './NoMatch.css';

const NoMatch: FC = () => {
  return (
    <div className='no-match-container'>
      <div className='no-match-body'>
        <h1 className='coming-soon'>404 Page Not Found</h1>
      </div>
    </div>
  );
};

export default NoMatch;
