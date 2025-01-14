import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useRef } from 'react';
import inceptionImg from '/src/assets/inception.avif';
import webservImg from '/src/assets/webserv.png';
import ft_transcendenceImg from '/src/assets/ft_trens.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Inception',
      description: 'A Dockerized project deploying multiple services like Nginx, WordPress, and MariaDB using Docker Compose.',
      tags: ['Docker', 'Nginx', 'WordPress', 'MariaDB', 'Docker Compose'],
      github: 'https://github.com/ara3isc/inception',
      image: inceptionImg
    },
    {
      title: 'Webserv',
      description: 'A custom web server built from scratch, handling HTTP requests and responses, inspired by Nginx. It supports multiple clients and dynamic configurations.',
      tags: ['C++', 'HTTP', 'Sockets', 'Web Server', 'Nginx'],
      github: 'https://github.com/ara3isc/webserv',
      image: webservImg
    },
    {
      title: 'ft_transcendence',
      description: 'A full-stack web application combining gaming and social features, built with modern frameworks. It includes real-time gameplay, user authentication, and chat functionalities.',
      tags: ['Django', 'Vanilla Js', 'Bootstrap', 'RestApi'],
      github: '#',
      image: ft_transcendenceImg,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-primary dark:bg-primary-dark">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-12"
        >
          Some Things I've Built
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-lg overflow-hidden bg-tertiary/30 dark:bg-tertiary-dark/30 backdrop-blur-sm"
            >
              <div className="relative aspect-video overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-textPrimary dark:text-textPrimary-dark mb-2">
                  {project.title}
                </h3>
                <p className="text-textSecondary dark:text-textSecondary-dark mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-sm px-2 py-1 rounded bg-secondary/10 dark:bg-secondary-dark/10 text-secondary dark:text-secondary-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-textSecondary dark:text-textSecondary-dark hover:text-secondary dark:hover:text-secondary-dark"
                  >
                    <FiGithub className="w-6 h-6" />
                  </motion.a>
                  {/* <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-textSecondary dark:text-textSecondary-dark hover:text-secondary dark:hover:text-secondary-dark"
                  >
                    <FiExternalLink className="w-6 h-6" />
                  </motion.a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
