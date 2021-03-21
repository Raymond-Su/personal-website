import './App.css';

import React, { FC } from 'react';

import Header from './components/Header';
import SEO from './components/SEO';
import Contact from './containers/Contact';
import Experiences from './containers/Experiences';
import Home from './containers/Home';
import Projects from './containers/Projects';
import Skills from './containers/Skills';
import TopButton from './containers/TopButton';

const App: FC = () => {
  return (
    <div className='App'>
      <SEO />
      <Header />
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
