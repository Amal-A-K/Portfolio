import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiMui,
  SiRedux,
  SiPrisma,
  SiSocketdotio,
  SiFirebase,
  SiGit,
  SiPostman,
  SiExpress,
  SiVercel,
  SiNetlify,
  SiRender
} from 'react-icons/si';
import { TECH_STACK } from '../data/constants.ts';

type Category = 'all' | 'frontend' | 'backend' | 'database' | 'tools' | 'deployment';

const About: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const techIcons: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
    SiReact,
    SiNextdotjs,
    SiJavascript,
    SiNodedotjs,
    SiMongodb,
    SiPostgresql,
    SiTypescript,
    SiTailwindcss,
    SiShadcnui,
    SiMui,
    SiRedux,
    SiPrisma,
    SiSocketdotio,
    SiFirebase,
    SiGit,
    SiPostman,
    SiExpress,
    SiVercel,
    SiNetlify,
    SiRender
  };

  const categories: { label: string; value: Category }[] = [
    { label: 'All', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
    { label: 'Database', value: 'database' },
    { label: 'Deployment', value: 'deployment' },
    { label: 'Tools', value: 'tools' },
  ];

  const filteredStack = activeCategory === 'all'
    ? TECH_STACK
    : TECH_STACK.filter(t => t.category === activeCategory);

  const stats = [
    { value: '1+', label: 'Years Experience' },
    { value: '3', label: 'Companies' },
    { value: '10+', label: 'Projects Built' },
    { value: '1', label: 'SaaS Architected' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — Bio + Stats */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Building Scalable Systems
              </h3>

              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I'm a <span className="text-primary-600 dark:text-primary-400 font-medium">Full Stack Engineer</span> specialising
                  in architecting multi-tenant SaaS platforms and production-grade web applications.
                  I'm currently building <span className="font-medium text-gray-800 dark:text-gray-200">DiagnomIQ</span> at Softnotions —
                  a healthcare SaaS platform with Database-per-Tenant isolation, automated
                  Cloudflare DNS provisioning, AWS S3 security, and JWT-based RBAC.
                </p>
                <p>
                  My core stack spans both <span className="text-primary-600 dark:text-primary-400 font-medium">PERN</span> (PostgreSQL,
                  Express, React, Node.js) and <span className="text-primary-600 dark:text-primary-400 font-medium">MERN</span> (MongoDB)
                  alongside <span className="text-primary-600 dark:text-primary-400 font-medium">Next.js</span> and <span className="text-primary-600 dark:text-primary-400 font-medium">TypeScript</span>.
                  I've worked across the full lifecycle — from designing database schemas and
                  RESTful APIs to building responsive UIs with Tailwind CSS and Shadcn/ui.
                </p>
                <p>
                  I stay sharp using AI-powered IDEs like <span className="font-medium text-gray-800 dark:text-gray-200">Antigravity AI</span>, <span className="font-medium text-gray-800 dark:text-gray-200">Cursor AI</span> and <span className="font-medium text-gray-800 dark:text-gray-200">Windsurf AI</span>,
                  which let me maintain high code quality while shipping fast. I believe in clean
                  architecture, ownership, and building things that actually scale.
                </p>
              </div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10"
              >
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -4 }}
                    className="text-center p-4 rounded-xl bg-gray-50 dark:bg-dark-800 border border-gray-100 dark:border-dark-700"
                  >
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500 mt-1 leading-tight">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Additional Skills */}
              <motion.div variants={itemVariants} className="mt-8">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                  Core Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Multi-Tenant Architecture',
                    'RESTful APIs',
                    'Database Isolation',
                    'RBAC & JWT Auth',
                    'CI/CD',
                    'Agile',
                    'Performance Optimisation',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right — Tech Stack with Filter */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Tech Stack
                </h3>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setActiveCategory(cat.value)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${activeCategory === cat.value
                        ? 'bg-primary-600 text-white shadow-md'
                        : 'bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400'
                      }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Tech Grid */}
              <motion.div
                layout
                className="grid grid-cols-3 gap-4"
              >
                <AnimatePresence mode="popLayout">
                  {filteredStack.map((tech) => {
                    const IconComponent = techIcons[tech.icon];
                    return (
                      <motion.div
                        key={tech.name}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        whileHover={{ scale: 1.05, y: -4 }}
                        className="card text-center group cursor-pointer"
                      >
                        <div className="flex flex-col items-center">
                          {IconComponent && (
                            <IconComponent
                              size={40}
                              className="text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300 mb-2"
                            />
                          )}
                          <h4 className="font-medium text-gray-900 dark:text-white text-sm group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                            {tech.name}
                          </h4>
                          <span className="text-xs text-gray-400 dark:text-gray-600 mt-0.5 capitalize">
                            {tech.category}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;