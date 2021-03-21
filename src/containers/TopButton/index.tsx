import './TopButton.css';

import React, { FC, useCallback, useEffect, useState } from 'react';

const TopButton: FC = () => {
  const [visbile, setVisbile] = useState(false);

  // When the user scrolls down 20px from the top of the document, show the button
  const scrollFunction = useCallback(() => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setVisbile(true);
    } else {
      setVisbile(false);
    }
  }, []);

  const TopEvent = () => {
    window.scroll({ top: 0, left: 0 });
  };

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
    window.onload = function () {
      scrollFunction();
    };
  }, []);

  // To make sure that this button is not visible at starting.
  // When the user clicks on the button, scroll to the top of the document
  return (
    <button
      onClick={TopEvent}
      id='topButton'
      title='Go to top'
      style={{ visibility: visbile ? 'visible' : 'hidden' }}
    >
      <i className='fas fa-hand-point-up' aria-hidden='true'></i>
    </button>
  );
};

export default TopButton;
