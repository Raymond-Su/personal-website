import React, { FC } from 'react';

import Header from './components/Header';
import Social from './components/SocialFloater';
import Home from './containers/Home';
import Skills from './containers/Skills';
import Experiences from './containers/Experiences';
import Projects from './containers/Projects';
import Contact from './containers/Contact';
import TopButton from './containers/TopButton';

import './App.css';

const App: FC = () => {
  return (
    <div className='App'>
      <Header />
      <Social />
      <Home />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
      <TopButton />
    </div>
  );
};

export default App;
