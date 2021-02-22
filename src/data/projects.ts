import { project } from '../types';
import chess from '../assets/Projects/chess.jpg';
import holeInTheWall from '../assets/Projects/holeInTheWall.jpg';
import sydneyTrainPuzzle from '../assets/Projects/sydneyTrainPuzzle.png';
import genderNeural from '../assets/Projects/genderNeural.jpeg';
import personalWebsite from '../assets/Projects/personalWebsite.png';

import { techSkills } from './skills';

export const projectsSummary = {
  title: 'Projects',
  subtitle: ''
};
export const projectsList: project[] = [
  {
    title: 'Custom Chess Engine (In Progress)',
    cardImage: chess,
    description:
      'A Chess application built using the MERN tech stack that allows players to play different chess game modes, view games and talk through chatrooms.',
    tags: [techSkills.mongoDB, techSkills.expressJS, techSkills.reactjs, techSkills.nodejs],
    links: []
  },
  {
    title: 'Hole in the wall',
    cardImage: holeInTheWall,
    description:
      'A browser game reminiscent of Hole in the Wall gameshow powered by Tensorflow Pose Estimation library.',
    tags: [techSkills.reactjs, techSkills.typeScript, techSkills.css3],
    links: [
      { name: 'Live Link', url: 'https://hole-in-the-wall-game.web.app/' },
      { name: 'Github', url: 'https://github.com/Raymond-Su/hole-in-the-wall-game' }
    ]
  },
  {
    title: 'Sydney train puzzle solver',
    cardImage: sydneyTrainPuzzle,
    description: 'A javascript implementation of the train game in Sydney',
    tags: [techSkills.typeScript, techSkills.html5],
    links: [
      { name: 'Live Link', url: 'https://sydney-trains-game.herokuapp.com/' },
      { name: 'Github', url: 'https://github.com/Raymond-Su/Sydney-Train-Game' }
    ]
  },
  {
    title: 'Gender Recogniser Neural Net',
    cardImage: genderNeural,
    description:
      'A machine learning application composed of a LMST Keras model and a Flask API that predicts the gender of given first name. The endpoints have ability to retrain and serve the Machine Learning model.',
    tags: [techSkills.tensorflow, techSkills.python, techSkills.flask],
    links: [{ name: 'Github', url: 'https://github.com/Raymond-Su/GenderNameRecogniser' }]
  },
  {
    title: 'Personal Website',
    cardImage: personalWebsite,
    description: 'My personal website for showing projects, blog posts and my programing journey.',
    tags: [techSkills.typeScript, techSkills.html5, techSkills.css3, techSkills.firebase],
    links: [
      { name: 'Live Link', url: 'https://raymondsu.dev' },
      { name: 'Github', url: 'https://github.com/Raymond-Su/personal-website' }
    ]
  }
];
