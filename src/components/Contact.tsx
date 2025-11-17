import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiMapPin, FiSend } from 'react-icons/fi';
import { CONTACT_INFO, PERSONAL_INFO } from '../data/constants.ts';
import { toast } from 'react-toastify';

// ⚠️ Environment variables: Replace the placeholders below with your actual .env variable names
// E.g., process.env.REACT_APP_EMAILJS_SERVICE_ID
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_EMAILJS_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_EMAILJS_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY';

const Contact: React.FC = () => {
  // 1. Add useRef to access the native form element
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    // Check if the IDs are available before sending
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast.error('Email service not configured. Please check your .env file.', { position: 'bottom-right' });
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current, // Pass the form ref
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('EmailJS Success:', result.text);
          // 🏆 Show success toast
          toast.success('🎉 Message Sent Successfully! I will get back to you shortly.', {
            position: 'bottom-right',
          });
          // Clear the form data
          setFormData({ name: '', email: '', subject: '', message: '' }); 
        },
        (error) => {
          console.error('EmailJS Failed:', error.text);
          // ❌ Show failure toast
          toast.error('😢 Failed to send message. Please try again or contact me directly.', {
            position: 'bottom-right',
          });
        }
      )
      .finally(() => {
        setLoading(false); // Stop loading regardless of success or failure
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-dark-800">
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
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
              Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information (No changes here) */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <motion.a
                  href={`mailto:${CONTACT_INFO.email}`}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-white dark:bg-dark-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors duration-300">
                    <FiMail className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">{CONTACT_INFO.email}</p>
                  </div>
                </motion.a>

                {/* Phone */}
                <motion.a
                  href={`tel:${CONTACT_INFO.phone}`}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-white dark:bg-dark-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors duration-300">
                    <FiPhone className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">{CONTACT_INFO.phone}</p>
                  </div>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-white dark:bg-dark-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors duration-300">
                    <FiLinkedin className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h4>
                    <p className="text-gray-600 dark:text-gray-400">Connect with me</p>
                  </div>
                </motion.a>

                {/* Location */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-white dark:bg-dark-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors duration-300">
                    <FiMapPin className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">{PERSONAL_INFO.location}</p>
                  </div>
                </motion.div>
              </div>

              {/* Availability */}
              <motion.div
                variants={itemVariants}
                className="mt-8 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-200 dark:border-primary-800"
              >
                <h4 className="font-semibold text-primary-800 dark:text-primary-200 mb-2">
                  Currently Available
                </h4>
                <p className="text-primary-700 dark:text-primary-300 text-sm">
                  I'm open to new opportunities and interesting projects. Let's discuss how we can work together!
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                Send a Message
              </h3>
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-6"> {/* 👈 ADD ref={form} */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name" // 👈 Name is crucial for EmailJS template variable
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email" // 👈 Name is crucial for EmailJS template variable
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject" // 👈 Name is crucial for EmailJS template variable
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message" // 👈 Name is crucial for EmailJS template variable
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                  disabled={loading} // 👈 Disable while loading
                >
                  <FiSend size={20} />
                  {/* 👈 Change button text based on loading state */}
                  {loading ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;