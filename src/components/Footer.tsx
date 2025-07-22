import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { CONTACT_INFO, PERSONAL_INFO } from '../data/constants.ts';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: CONTACT_INFO.github,
      icon: FiGithub
    },
    {
      name: 'LinkedIn',
      url: CONTACT_INFO.linkedin,
      icon: FiLinkedin
    },
    {
      name: 'Email',
      url: `mailto:${CONTACT_INFO.email}`,
      icon: FiMail
    }
  ];

  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700">
      <div className="container-custom py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-gradient mb-2">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Full Stack Developer
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-200 dark:border-dark-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} {PERSONAL_INFO.name}. Made with
            <FiHeart className="text-red-500" size={16} />
            using React & TypeScript
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
