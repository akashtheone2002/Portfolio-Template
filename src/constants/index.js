import {
  frontend,
  backend,
  ux,
  prototyping,
  redis,
  typescript,
  portfolio,
  reactjs,
  pytorchse,
  nodejs,
  githubse,
  csharp,
  nextjs,
  mongo,
  figma,
  docker,
  jquery,
  postgresql,
  mysqls,
  cplusplus,
  pythonse,
  komikult,
  leaderboard,
  movie,
  nyeusi,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'FULLSTACK',
    icon: frontend,
  },
  {
    title: 'DEVOPS',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'AI / ML',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Nextjs',
    icon: nextjs,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'C#',
    icon: csharp,
  },
  {
    name: 'Nodejs',
    icon: nodejs,
  },
  {
    name: 'Typescript',
    icon: typescript,
  },
  {
    name: 'Github',
    icon: githubse,
  },
  {
    name: 'Redis',
    icon: redis,
  },
  {
    name: 'pytorchse',
    icon: pytorchse,
  },
  {
    name: 'c++',
    icon: cplusplus,
  },
  {
    name: 'pythonse',
    icon: pythonse,
  },
  {
    name: 'MongoDb',
    icon: mongo,
  },
  {
    name: 'mysqls',
    icon: mysqls,
  },
  {
    name: 'Figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Internship in Amla Commerce Pvt.Ltd',
    company_name: 'Placed and Mastered DOTNET development specializing in MVC architecture and creating sophisticated Web APIs',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'dec 2023 - jan 2024',
  },
  {
    title: 'Completed Engineering',
    company_name: 'Earned an Engineering degree with specialized knowledge in ETC while acquiring practical expertise in web hosting terminologies deployment processes and essential internet infrastructure concepts including DNS systems and SSL certification',
    icon: microverse,
    iconBg: '#333333',
    date: 'jun 2024 - july 2024',
  },
  {
    title: 'Trainee in Amla commerce',
    company_name: 'Six months in DOTNET and NEXTJS framework as fullstack developer',
    icon: kelhel,
    iconBg: '#333333',
    date: 'july 2024 - jan 2025',
  },
  {
    title: 'Associate software engineer',
    company_name: 'Now working in Reactjs',
    icon: dcc,
    iconBg: '#333333',
    date: 'jan 2025 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'CANTEEN SYSTEM',
    description: 'A FOOD ORDERING SYSTEM IN C/C++',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/Akash2002ison/akash2002ison.github.io/tree/main/C%2B%2B/projects/canteenproject',
    demo: '#',
  },
  {
    id: 'project-2',
    name: 'DOCUMENT EDITOR',
    description:
      'A DOCUMENT EDITING WEBSITE RELATED TO PDF OPERATIONS LIKE MERGING , CONVERTIN IN WORD AND ETC. MADE WITH HTML,CSS,JS(ES6) AND WEB APIs',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/Akash2002ison/akash2002ison.github.io/tree/main/Front_end_Projects/Website/document_editor_html_css_js',
    demo: '#',
  },
  {
    id: 'project-3',
    name: 'Portfolio APP',
    description: 'A SINGLE-PAGE PORTFOLIO APP BUILT WITH REACT AND VITE',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    repo: '#',
    demo: '#',
  },
  {
    id: 'project-4',
    name: 'AI CHATBOT',
    description: `IT IS AN AI BASED CHATBOT MADE WITH DL/NLP CONCEPTS, REGEX AND PYTORCH`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/Akash2002ison/akash2002ison.github.io/tree/main/python3/chatbot',
    demo: '#',
  },
  {
    id: 'project-5',
    name: 'Camp Community',
    description:
      'ITs A SOCIAL MEDIA WEB APPLICATION DEVELOPED IN REACT,VITE,NODE JS AND MONGO DB',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: '#',
    demo: 'https://campcommunity.in',
  },
];

export { services, technologies, experiences, projects };
