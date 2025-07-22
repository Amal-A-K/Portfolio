import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiJavascript,
  SiNodedotjs, 
  SiMongodb, 
  SiTypescript, 
  SiTailwindcss, 
  SiRedux, 
  SiSocketdotio, 
  SiFirebase,
  SiGit,
  SiPostman,
  SiExpress 
} from 'react-icons/si';
import { TECH_STACK } from '../data/constants.ts';

const About: React.FC = () => {
  const techIcons: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
    SiReact,
    SiJavascript,
    SiNodedotjs,
    SiMongodb,
    SiTypescript,
    SiTailwindcss,
    SiRedux,
    SiSocketdotio,
    SiFirebase,
    SiGit,
    SiPostman,
    SiExpress
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Passionate Full Stack Developer
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with strong expertise in the MERN stack, 
                  specializing in building modern, scalable web applications. My journey in web 
                  development has been driven by a love for clean code and innovative solutions.
                </p>
                <p>
                  With hands-on experience in React, Node.js, and real-time applications, I enjoy 
                  creating seamless user experiences and robust backend systems. I'm particularly 
                  enthusiastic about TypeScript, modern React patterns, and building applications 
                  that scale.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community. I believe 
                  in continuous learning and staying updated with the latest industry trends.
                </p>
              </div>

              {/* Stats */}
              {/* <motion.div 
                variants={itemVariants}
                className="grid grid-cols-2 gap-6 mt-8"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">2+</div>
                  <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">10+</div>
                  <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
              </motion.div> */}
            </motion.div>

            {/* Tech Stack */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center lg:text-left">
                Tech Stack
              </h3>
              
              <div className="grid grid-cols-3 gap-6">
                {TECH_STACK.map((tech, index) => {
                  const IconComponent = techIcons[tech.icon];
                  
                  return (
                    <motion.div
                      key={tech.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="card text-center group cursor-pointer"
                    >
                      <div className="flex flex-col items-center">
                        {IconComponent && (
                          <IconComponent 
                            size={48} 
                            className="text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300 mb-3" 
                          />
                        )}
                        <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {tech.name}
                        </h4>
                        <span className="text-xs text-gray-500 dark:text-gray-500 mt-1 capitalize">
                          {tech.category}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Additional Skills */}
              <motion.div variants={itemVariants} className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Additional Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['RESTful APIs', 'Microservices', 'Responsive Design', 'Agile', 'Problem Solving'].map((skill) => (
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
