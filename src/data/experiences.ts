import accentureLogo from '../assets/Experiences/accentureLogo.jpg';
import honeywellLogo from '../assets/Experiences/honeywellLogo.jpg';
import unswLogo from '../assets/Experiences/unswLogo.png';
import { experience } from '../types';

export const workExperiences: experience[] = [
  {
    role: 'Software Engineer',
    company: 'Accenture',
    companylogo: accentureLogo,
    companylogoColour: '#8D00FD',
    date: 'March 2020 – Present',
    desc:
      'Fullstack developer within MyWizard AiOps Team, deploying software and creating automation tooling/scripts to scale business processes across multiple clients.',
    descBullets: [
      'Developed and deployed Chrome Extension that accompanies flagship product',
      'Worked with Product Owners and Scrum Masters to manage frontend workload',
      'Technologies used: Typescript, ReactJS, Redux, Jest, React testing library, Python, Docker, Java, Spring-boot, Splunk'
    ]
  },
  {
    role: 'Front-End Development Intern',
    company: 'Honeywell',
    companylogo: honeywellLogo,
    companylogoColour: '#DC2430',
    date: 'Nov 2018 – Mar 2019',
    desc:
      "I was working with the Connected Services team at Honeywell as a full stack and mobile developer, working on Honeywell's Pulse mobile application as well as the Single Pane of Glass (SPoG) platform",
    descBullets: [
      'Developed reusable front-end components and visualisations by learning and utilising new technologies.',
      'Collaborated in an Agile Scrum team of 7 and other global teams in the release train using Jira and Bitbucket.',
      'Technologies used: C#, Xamarin, ReactJS, Enzyme, Jest, JavaScript, Typescript, .NET, Azure API'
    ]
  },
  {
    role: 'University Course Academic',
    company: 'UNSW Sydney',
    companylogo: unswLogo,
    companylogoColour: '#F8E415',
    date: 'Dec 2018 – Dec 2019',
    desc: 'Casual Tutor for various courses including MTRN3500, MMAN2100, MMAN3000',
    descBullets: [
      'Taught 50 students C/C++ that was used for vehicle simulation and control',
      'Helped different students understand different concepts or problems during lab demonstration',
      'Collaborated with colleagues to develop automated testing and marking software'
    ]
  }
];
