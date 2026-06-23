import { Experience, Project, ContactInfo, TechStack } from '../types';

export const PERSONAL_INFO = {
  name: "Amal A K",
  title: "Full-Stack Engineer | React · Node.js · TypeScript · AI Applications · SaaS",
  bio: "Full-Stack Engineer with production experience building scalable MERN and PERN applications using React.js, Next.js, Node.js, Express.js, PostgreSQL, MongoDB, and TypeScript. Experienced in multi-tenant SaaS architecture, AI-powered applications using Amazon Bedrock and Google Gemini, RESTful APIs, and cloud-native web development.",
  location: "Trivandrum, Kerala, India",
  githubUrl: "https://github.com/Amal-A-K",
  resumeUrl: "/Amal A K Resume.pdf",
};

export const CONTACT_INFO: ContactInfo = {
  email: 'amal.anandvijay@gmail.com',
  phone: '+91 9605655082',
  linkedin: 'https://www.linkedin.com/in/amal-a-k-3ab219218/',
  github: 'https://github.com/Amal-A-K'
};

export const TECH_STACK: TechStack[] = [
  { name: 'React', icon: 'SiReact', category: 'frontend' },
  { name: 'Next.js', icon: 'SiNextdotjs', category: 'frontend' },
  { name: 'JavaScript', icon: 'SiJavascript', category: 'frontend' },
  { name: 'TypeScript', icon: 'SiTypescript', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'SiTailwindcss', category: 'frontend' },
  { name: 'Shadcn UI', icon: 'SiShadcnui', category: 'frontend' },
  { name: 'Material UI', icon: 'SiMui', category: 'frontend' },
  { name: 'Redux', icon: 'SiRedux', category: 'frontend' },
  { name: 'Node.js', icon: 'SiNodedotjs', category: 'backend' },
  { name: 'Express', icon: 'SiExpress', category: 'backend' },
  { name: 'Prisma ORM', icon: 'SiPrisma', category: 'backend' },
  { name: 'Socket.IO', icon: 'SiSocketdotio', category: 'backend' },
  { name: 'Firebase', icon: 'SiFirebase', category: 'backend' },
  { name: 'MongoDB', icon: 'SiMongodb', category: 'database' },
  { name: 'PostgreSQL', icon: 'SiPostgresql', category: 'database' },
  { name: 'Vercel', icon: 'SiVercel', category: 'deployment' },
  { name: 'Netlify', icon: 'SiNetlify', category: 'deployment' },
  { name: 'Render', icon: 'SiRender', category: 'deployment' },
  { name: 'Docker', icon: 'SiDocker', category: 'deployment' },
  { name: 'Cloudflare', icon: 'SiCloudflare', category: 'deployment' },
  { name: 'AWS S3', icon: 'SiAmazons3', category: 'deployment' },
  { name: 'Recharts', icon: 'MdBarChart', category: 'frontend' },
  { name: 'Sequelize', icon: 'SiSequelize', category: 'backend' },
  { name: 'Mongoose', icon: 'SiMongoose', category: 'backend' },
  { name: 'JWT', icon: 'SiJsonwebtokens', category: 'backend' },
  { name: 'Express.js', icon: 'SiExpress', category: 'backend' },
  { name: 'Prisma', icon: 'SiPrisma', category: 'backend' },
  { name: 'Amazon Bedrock', icon: 'SiAmazonwebservices', category: 'ai' },
  { name: 'Google Gemini', icon: 'SiGooglegemini', category: 'ai' },
  { name: 'Tesseract.js', icon: 'SiJavascript', category: 'ai' },
  { name: 'Git', icon: 'SiGit', category: 'tools' },
  { name: 'Postman', icon: 'SiPostman', category: 'tools' }
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Softnotions Private Limited',
    role: 'Software Engineer Trainee',
    duration: 'Jan 2026 – Apr 2026',
    // description: [
    //   'Spearheaded the architectural migration of legacy healthcare systems into DiagnomIQ — a modern, scalable Multi-Tenant SaaS platform built on the PERN stack.',
    //   'Engineered a Database-per-Tenant architecture using PostgreSQL and Sequelize, achieving 100% data isolation and security across all tenant repositories.',
    //   'Built an automated tenant onboarding flow with Cloudflare DNS subdomain provisioning, dynamic database creation, and AWS S3 bucket folder isolation per tenant.',
    //   'Designed custom Tenant DB Middleware for dynamic request routing and implemented a JWT-integrated Role-Based Access Control (RBAC) system.',
    //   'Centralised global registrations and subscriptions via a dedicated Platform Database, cleanly separating core business logic from tenant-specific operations.',
    //   'Collaborated with the DevOps team to configure Amazon Bedrock with RAG implementation; created a knowledge base and tested the AI model via the Bedrock API.',
    // ],
    description: [
      "Built DiagnomIQ, a production multi-tenant healthcare SaaS (PERN stack) with Database-per-Tenant architecture, automated PostgreSQL provisioning, Cloudflare DNS subdomain setup, and AWS S3 folder isolation.",
      "Implemented JWT authentication with Role-Based Access Control (RBAC) and custom Tenant DB Middleware for secure request routing across isolated tenant databases.",
      "Integrated Amazon Bedrock RAG pipeline with a structured medical knowledge base to deliver real-time AI-powered clinical decision support."
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'AWS S3', "Amazon Bedrock", 'Cloudflare', 'JWT', 'RBAC', 'Tailwind CSS']
  },
  {
    id: '2',
    company: 'Relaxplzz Technologies',
    role: 'MERN Stack Developer',
    duration: 'Apr 2025 – Aug 2025',
    description: [
      'Developed the GiftoMart module — a gift creation and tracking platform — using React, TypeScript, and Tailwind CSS, improving usability and workflow efficiency.',
      'Implemented RESTful APIs and backend logic with Node.js and Express.js; designed reusable TypeScript components to reduce code redundancy.',
      'Collaborated cross-functionally with product leads, designers, and QA to translate requirements into scalable, production-ready features.',
      'Performed debugging and performance improvements, enhancing application responsiveness and system stability.',
    ],
    // description: [
    //   "Developed frontend features and RESTful APIs for GiftoMart, a production e-commerce platform using React.js, TypeScript, Tailwind CSS, MongoDB, Node.js, and Express.js.",
    //   "Built reusable TypeScript components that improved maintainability and collaborated with product, design, and QA teams in Agile sprints."
    // ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB']
  },
  {
    id: '3',
    company: 'SciPy Technologies',
    role: 'MERN Stack Developer',
    duration: 'Jun 2023 – Jan 2024',
    description: [
      'Contributed to a microservices-based ERP platform for an educational institute, improving system scalability and modularity.',
      'Engineered RESTful APIs in Node.js and built responsive client-side UIs using React.js and React-Bootstrap.',
      'Deployed Redux for centralised and predictable state management across the application.',
      'Managed MongoDB data storage, consumed external APIs via Axios, and validated all backend endpoints with Postman.',
    ],
    technologies: ['React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'React-Bootstrap', 'Axios', 'Postman']
  }
];

export const PROJECTS: Project[] = [
  {
    id: '0',
    title: 'DiagnomIQ — Multi-Tenant Healthcare SaaS',
    description: "Production healthcare SaaS built using the PERN stack with Database-per-Tenant architecture, automated PostgreSQL provisioning, Cloudflare DNS automation, AWS S3 tenant isolation, JWT-based RBAC, Amazon Bedrock RAG integration, and oncology dashboards built using Recharts.",
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'AWS S3', 'Amazon Bedrock', 'Recharts', 'Cloudflare', 'JWT', 'RBAC'],
    image: '/projects/DiagnomIQ.png',
    // No public GitHub for this one — it's a company project
  },
  {
    id: "1",
    title: "TripMind AI — AI Travel Planner",
    description:
      "AI-powered travel planning platform that extracts booking details from PDFs and images using OCR before generating structured travel itineraries with Google Gemini. Built with a layered Node.js architecture, JWT authentication, MongoDB Atlas, AI retry logic with model fallback, and deployed on Vercel and Render.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Google Gemini API",
      "Tesseract.js",
      "pdf-parse",
      "JWT",
      "Vercel",
      "Render"
    ],
    image: '/projects/TripMindAI.png',
    githubUrl: "https://github.com/Amal-A-K/TripMind_AI",
    liveUrl: "https://trip-mind-ai-eight.vercel.app/"
  },
  {
    id: '2',
    title: 'FinSight — Personal Finance Tracker',
    description: 'Full-stack personal finance application for real-time income and expense tracking with category-wise insights. Built with Next.js and TypeScript, Prisma ORM for type-safe database access, and PostgreSQL on NeonDB. Deployed on Vercel with CI/CD integration.',
    technologies: ['Next.js', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'NeonDB', 'Tailwind CSS', 'shadcn/ui', 'Vercel'],
    image: '/projects/FinSight.png',
    githubUrl: 'https://github.com/Amal-A-K/FinSight',
    liveUrl: 'https://fin-sight-nine.vercel.app/'
  },

  // {
  //   id: '2',
  //   title: 'MERN TODO App',
  //   description: 'Full-stack to-do application with secure user authentication, responsive UI, and cloud database integration. Handles both frontend and backend — React + Redux on the client, Node.js + Express + MongoDB Atlas on the server. Deployed on Render.',
  //   technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Redux', 'Redux Toolkit', 'Tailwind CSS', 'Render'],
  //   githubUrl: 'https://github.com/Amal-A-K/MERN-TO-DO-APP',
  //   liveUrl: 'https://mern-to-do-app-ui.onrender.com/'
  // },
  // {
  //   id: '3',
  //   title: 'E-Commerce Platform',
  //   description: 'Full-featured e-commerce platform with product catalog, shopping cart, user authentication, and an admin panel for inventory management. Built with React, TypeScript, and a Node.js/MongoDB backend.',
  //   technologies: ['React', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Node.js', 'Express.js'],
  //   githubUrl: 'https://github.com/Amal-A-K/Typescript_Learning/tree/main/E-Commerce',
  // },
  // {
  //   id: '3',
  //   title: 'Real-time Chat App',
  //   description: 'Modern real-time chat application with Socket.IO-powered messaging, user authentication, and a clean responsive UI. Supports multiple chat rooms and live message delivery.',
  //   technologies: ['React', 'TypeScript', 'Socket.IO', 'Node.js', 'MongoDB'],
  //   githubUrl: 'https://github.com/Amal-A-K/Typescript_Learning/tree/main/Day-9/ChatApp',
  // },
  {
    id: '3',
    title: 'Dice Game',
    description: 'Interactive dice game with score tracking, turn-based game logic, and a fully responsive design. A fun project showcasing clean React state management and UI design.',
    technologies: ['React', 'JavaScript', 'CSS Modules', 'Vercel'],
    image: '/projects/Dice Game.png',
    githubUrl: 'https://github.com/Amal-A-K/Dice_Game',
    liveUrl: 'https://dice-game-nine-inky-78.vercel.app/'
  }
];