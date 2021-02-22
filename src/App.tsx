import React, { FC } from 'react';

import SEO from './components/SEO';
import Header from './components/Header';
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
