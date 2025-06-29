import {
  frontend,
  backend,
  ux,
  prototyping,
  redis,
  typescript,
  reactjs,
  pytorchse,
  nodejs,
  githubse,
  csharp,
  nextjs,
  mongo,
  figma,
  docker,
  mysqls,
  cplusplus,
  pythonse,
  coverhunt,
  quotex,
  quizzy,
  shop,
  excelai,
  community
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
    icon: coverhunt,
    iconBg: '#333333',
    date: 'jun 2024 - july 2024',
  },
  {
    title: 'Trainee in Amla commerce',
    company_name: 'Six months in DOTNET and NEXTJS framework as fullstack developer',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'july 2024 - jan 2025',
  },
  {
    title: 'Associate software engineer',
    company_name: 'Now working in Reactjs',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'jan 2025 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'QUIZZY',
    description: 'A FULLSTACK APPLICATION WHERE YOU CAN CREATE QUIZ/TEST WITH THE HELP OF AI. USER HAS THE FULL CONTROL OVER THE TIME,QUESTION,REWARDS AND MUCH MORE. TECHNOLOGY USED : C#, SQL, FIREBASE, REACT AND etc.',
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
    image: quizzy,
    repo: 'https://github.com/Akash2002ison/akash2002ison.github.io/tree/main/C%2B%2B/projects/canteenproject',
    demo: '#',
  },
  {
    id: 'project-2',
    name: 'SHOP HERE',
    description:
      'A FULLSTACK SHOP-MANAGEMENT SYSTEM WHERE YOU CAN SETUP YOUR STORE, HAVING ALL THE OPERATIONS WITH SINGLE SCHEMA ARCHITECTURE AND AI RECOMMANDATION SYSTEM . TECHNOLOGY USED : NEXTJS , MONGO AND etc.',
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
    image: shop,
    repo: 'https://github.com/Akash2002ison/akash2002ison.github.io/tree/main/Front_end_Projects/Website/document_editor_html_css_js',
    demo: '#',
  },
  {
    id: 'project-3',
    name: 'QUOTEX BOT',
    description: 'AN (ADMIN + CLIENT) APPLICATION WHERE ADMIN CAN APPLY TRADE AND THE SAME TRADE GET APPLIED TO ALL THE LIVE CLIENTS AVAILABLE. TECHNOLOGY USED : PYTHON , SELENIUM , NODE JS, FASTAPI AND etc.',
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
    image: quotex,
    repo: '#',
    demo: '#',
  },
  {
    id: 'project-4',
    name: 'AI-LYSIS',
    description: `AN APPLICATION WHERE YOU CAN UPLOAD YOUR EXCEL SHEET AND IT WILL GIVE YOU THE DETAILED ANALYSIS. USER CAN HAVE BETTER VISUALIZATION WITH CHART AND QNA ON THE UPLOADED DOCUMENT. TECHNOLOGY USED : AI/ML, STREAMLIT, GEMINI AND etc.`,
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
    image: excelai,
    repo: 'https://github.com/Akash2002ison/akash2002ison.github.io/tree/main/python3/chatbot',
    demo: '#',
  },
  {
    id: 'project-5',
    name: 'Camp Community',
    description:
      'A SOCIAL MEDIA APPLICATION WHERE STUDENTS FROM DIFFERENT UNIVERSITIES CAN CONNECT AND SHARE CAMPUS/PLACEMENT INFO. TECHNOLOGY USED : REACTJS, WEBSOCKETS, NODE JS, MONGO DB AND etc.',
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
    image: community,
    repo: '#',
    demo: 'https://campcommunity.in',
  },
];

export { services, technologies, experiences, projects };
