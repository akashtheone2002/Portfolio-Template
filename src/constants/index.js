import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  portfolio,
  css,
  reactjs,
  pytorchse,
  redux,
  tailwind,
  nodejs,
  githubse,
  figma,
  docker,
  jquery,
  postgresql,
  mysqls,
  rubyrails,
  cplusplus,
  graphql,
  pythonse,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
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
    title: 'Fullstack Web Developer',
    icon: frontend,
  },
  {
    title: 'AI / ML',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Programming',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'pytorchse',
    icon: pytorchse,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
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
    name: 'mysqls',
    icon: mysqls,
  },
  {
    name: 'jquery',
    icon: jquery,
  },
];

const experiences = [
  {
    title: ' Junior Programmer',
    company_name: 'Introduced to programming languages and their concepts ',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'jan 2021 - jan 2022',
  },
  {
    title: 'Mini Project [Leader]',
    company_name: 'Introduced to hosting Terminologies like DNS system and SSL certification',
    icon: microverse,
    iconBg: '#333333',
    date: 'sept 2022 - dec 2022',
  },
  {
    title: 'Internship in codemate it-services',
    company_name: 'Introduced to MACHINE LEARNING and their libraries like Regex and pytorch',
    icon: kelhel,
    iconBg: '#333333',
    date: 'july 2023 - aug 2023',
  },
  {
    title: 'Major Project [leader]',
    company_name: 'making a social media website called camp community which contains full stack development',
    icon: dcc,
    iconBg: '#333333',
    date: 'Aug 2023 - Present',
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
