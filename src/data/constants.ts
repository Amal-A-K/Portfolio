import { Experience, Project, ContactInfo, TechStack } from '../types';

export const PERSONAL_INFO = {
  name: 'Amal A K',
  title: 'Full Stack Developer | React | Node.js | TypeScript',
  bio: 'Building modern, scalable full-stack web apps using the MERN stack. Clean code enthusiast with strong experience in real-time apps and RESTful APIs.',
  location: 'Trivandrum, Kerala',
  resumeUrl: '/Amal A K Resume.pdf'
};

export const CONTACT_INFO: ContactInfo = {
  email: 'amal.anandvijay@gmail.com',
  phone: '+91 9605655082',
  linkedin: 'https://linkedin.com/in/amal-a-k-3ab219218',
  github: 'https://github.com/Amal-A-K'
};

export const TECH_STACK: TechStack[] = [
  { name: 'React', icon: 'SiReact', category: 'frontend' },
  { name: 'JavaScript', icon: 'SiJavascript', category: 'frontend' },
  { name: 'TypeScript', icon: 'SiTypescript', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'SiTailwindcss', category: 'frontend' },
  { name: 'Redux', icon: 'SiRedux', category: 'frontend' },
  { name: 'Node.js', icon: 'SiNodedotjs', category: 'backend' },
  { name: 'Express', icon: 'SiExpress', category: 'backend' },
  { name: 'Socket.IO', icon: 'SiSocketdotio', category: 'backend' },
  { name: 'Firebase', icon: 'SiFirebase', category: 'backend' },
  { name: 'MongoDB', icon: 'SiMongodb', category: 'database' },
  { name: 'Vercel', icon: 'SiVercel', category: 'deployment' },
  { name: 'Netlify', icon: 'SiNetlify', category: 'deployment' },
  { name: 'Render', icon: 'SiRender', category: 'deployment' },
  { name: 'Git', icon: 'SiGit', category: 'tools' },
  { name: 'Postman', icon: 'SiPostman', category: 'tools' }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Relaxplzz Technologies',
    role: 'MERN Stack Developer ',
    duration: 'Apr 2025 – Aug 2025',
    description: [
      'Worked on e-commerce based project with modern tech stack',
      'Developed real-time chat application using Socket.IO',
      'Built responsive frontend with React + TypeScript + Tailwind CSS',
      'Implemented backend services with Node.js + Express + MongoDB'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Socket.IO']
  },
  {
    id: '2',
    company: 'Scipy Technologies',
    role: 'MERN Stack Developer',
    duration: 'Jun 2023 – Jan 2024',
    description: [
      'Built comprehensive ERP system with microservice architecture',
      'Implemented state management using Redux',
      'Designed responsive UI with React-Bootstrap',
      'Improved backend response time by 25% and frontend performance by 40%'
    ],
    technologies: ['React', 'Redux', 'MongoDB', 'Node.js', 'Express', 'React-Bootstrap']
  }
];

export const PROJECTS: Project[] = [
  
  {
    id: '1',
    title: 'MERN TODO App',
    description: 'Built and deployed a full-stack to-do application using MongoDB, Express.js, React.js, and Node.js. Responsible for both front-end and back-end development, including secure user authentication, responsive UI, and database integration. Deployed on Render for scalable cloud hosting.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Redux', 'Redux Toolkit', 'Tailwind CSS', 'Render'],
    githubUrl: 'https://github.com/Amal-A-K/MERN-TO-DO-APP',
    liveUrl: 'https://mern-to-do-app-ui.onrender.com/'
  },
  {
    id: '2',
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce platform with product catalog, shopping cart, authentication, and admin panel.',
    technologies: ['React', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Node.js', 'Express.js'],
    githubUrl: 'https://github.com/Amal-A-K/Typescript_Learning/tree/main/E-Commerce',
    // liveUrl: 'https://ecommerce-demo.netlify.app'
  },
  {
    id: '3',
    title: 'Real-time Chat App',
    description: 'Modern chat application with real-time messaging, user authentication, and push notifications.',
    technologies: ['React', 'TypeScript', 'Socket.IO', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/Amal-A-K/Typescript_Learning/tree/main/Day-9/ChatApp',
    // liveUrl: 'https://chat-app-demo.netlify.app'
  },
  {
    id: '4',
    title: 'Dice Game',
    description: 'Interactive dice game with score tracking, game logic, and responsive design.',
    technologies: ['React', 'JavaScript', 'CSS Modules', 'Vercel'],
    githubUrl: 'https://github.com/Amal-A-K/Dice_Game',
    liveUrl: 'https://dice-game-nine-inky-78.vercel.app/'
  }
];
