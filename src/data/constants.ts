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
  { name: 'Git', icon: 'SiGit', category: 'tools' },
  { name: 'Postman', icon: 'SiPostman', category: 'tools' }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Relaxplzz Technologies',
    role: 'Full Stack Developer Intern',
    duration: 'Apr 2025 – Present',
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
    role: 'MERN Intern',
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
    title: 'ERP for Educational Institute',
    description: 'Comprehensive ERP system with REST APIs, admin dashboards, and scalable architecture for educational institutions.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    githubUrl: 'https://github.com/Amal-A-K/ins-client-side',
    // liveUrl: 'https://erp-demo.netlify.app'
  },
  {
    id: '2',
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce platform with product catalog, shopping cart, authentication, and admin panel.',
    technologies: ['React', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Node.js'],
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
    technologies: ['React', 'JavaScript', 'CSS Modules'],
    githubUrl: 'https://github.com/Amal-A-K/Dice_Game',
    // liveUrl: 'https://dice-game-demo.netlify.app'
  }
];
