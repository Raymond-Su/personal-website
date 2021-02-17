import React, { FC, useEffect, useState } from 'react';
import './Home.css';

const Home: FC = () => {
  const words = [
    'Front End Development',
    'Designing',
    'UI/UX',
    'Cloud Computing',
    'Web Development',
    'Mentoring'
  ];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length) {
      setIndex(0);
      return;
    }

    if (subIndex === words[index].length + 1 && index !== words.length && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setIndex(prev => prev + 1);
      setReverse(false);
      return;
    }
    const typingTimeout = setTimeout(() => {
      setSubIndex(prev => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 50, Math.random() * 100));

    return () => clearTimeout(typingTimeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const blinkerTimeout = setTimeout(() => {
      setBlink(prev => !prev);
    }, 500);
    return () => clearTimeout(blinkerTimeout);
  }, [blink]);
  return (
    <div className='home-container'>
      <div className='home-body'>
        <div className='intro'>
          <h1 className='fullname'>RAYMOND SU</h1>
          <h1 className='tagline'>SOFTWARE ENGINEER · DESIGN ENTHUSIAST</h1>
          <p className='interests'>
            I am into {words[index < words.length ? index : 0].substring(0, subIndex)}
            {blink ? '|' : ''}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
