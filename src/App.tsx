import React, { FC } from 'react';

import Header from './components/Header';
import Social from './components/Social';

import Home from './containers/Home';
import NoMatch from './containers/NoMatch';
import Experiences from './containers/Experiences';
import Projects from './containers/Projects';

import './App.css';

const App: FC = () => {
  return (
    <div className='App'>
      <Header />
      <Social />
      {/* <Header />
      <Greeting />
      <Skills />
      <StackProgress />
      <Education />
      <WorkExperience />
      <Projects />
      <StartupProject />
      <Achievement />
      <Blogs />
      <Talks />
      <Twitter />
      <Podcast />
      <Profile />
      <Footer />
      <Top /> */}
      <Home />
      <Experiences />
      <Projects />
    </div>
  );
};

export default App;
