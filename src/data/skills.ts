export enum techSkills {
  html5 = 'HTML5',
  css3 = 'CSS3',
  sass = 'SASS',
  javascript = 'Javascript',
  reactjs = 'Reactjs',
  nodejs = 'Nodejs',
  swift = 'Swift',
  npm = 'NPM',
  'sql-database' = 'SQL-Database',
  aws = 'AWS',
  firebase = 'Firebase',
  python = 'Python',
  docker = 'Docker',
  redux = 'Redux',
  tensorflow = 'Tensorflow',
  typeScript = 'Typescript',
  flask = 'Flask',
  mongoDB = 'MongoDB',
  expressJS = 'ExpressJS'
}

export const fontAwesomeImages: Record<string, string> = {
  Javascript: 'fab fa-js',
  AWS: 'fab fa-aws',
  HTML5: 'fab fa-html5',
  CSS3: 'fab fa-css3-alt',
  SASS: 'fab fa-sass',
  Reactjs: 'fab fa-react',
  Nodejs: 'fab fa-node',
  Swift: 'fab fa-swift',
  NPM: 'fab fa-npm',
  'SQL-Database': 'fas fa-database',
  Firebase: 'fas fa-fire',
  Python: 'fab fa-python',
  Docker: 'fab fa-docker',
  MongoDB: 'fag fa-database'
};

export const CDNSkillImages: Record<string, string> = {
  Redux: 'https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png',
  Typescript: 'https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png',
  Tensorflow: 'https://cdn-images-1.medium.com/max/1200/1*iDQvKoz7gGHc6YXqvqWWZQ.png',
  Flask: 'https://logowiki.net/uploads/logo/f/flask.svg',
  ExpressJS: 'https://img2.pngio.com/express-js-png-5-png-image-expressjs-png-800_800.png'
};

export const skillsSection = {
  title: 'What I do',
  subTitle: 'Fullstack developer looking to explore every tech stack',
  skills: []
};

export const softwareSkills: string[] = [
  techSkills.html5,
  techSkills.css3,
  techSkills.sass,
  techSkills.javascript,
  techSkills.reactjs,
  techSkills.nodejs,
  techSkills.swift,
  techSkills.npm,
  techSkills['sql-database'],
  techSkills.aws,
  techSkills.firebase,
  techSkills.python,
  techSkills.docker,
  techSkills.mongoDB,
  techSkills.tensorflow,
  techSkills.redux,
  techSkills.typeScript
];

export const AboutMeWords = [
  'Front End Development',
  'Designing',
  'UI/UX',
  'Cloud Computing',
  'Web Development',
  'Mentoring',
  'Machine Learning'
];
