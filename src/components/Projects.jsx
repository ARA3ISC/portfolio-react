import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useRef } from 'react';
import  inceptionImg  from '/src/assets/inception.avif';
import  webservImg  from '/src/assets/webserv.png';
import  ft_transcendenceImg  from '/src/assets/ft_trens.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Inception',
      description: 'A web application that helps users track their daily habits and goals. Built with React, Node.js, and MongoDB.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: '#',
      live: '#',
      image: inceptionImg
    },
    {
      title: 'Webserv',
      description: 'An e-commerce platform with real-time inventory management and secure payment processing.',
      tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'PostgreSQL'],
      github: '#',
      live: '#',
      image: webservImg,
    },
    {
      title: 'ft_transcendence',
      description: 'An e-commerce platform with real-time inventory management and secure payment processing.',
      tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'PostgreSQL'],
      github: '#',
      live: '#',
      image: ft_transcendenceImg,
    },
  ];

  return (
    <section id="projects" className="bg-tertiary py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-title text-center mb-20"
        >
          Some Things I've Built
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-primary/10 backdrop-blur-sm rounded-xl overflow-hidden"
              whileHover={{ y: -10 }}
            >
              {/* Project Image with Overlay */}
              <div className="relative h-[300px] overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/90 z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Hover Content */}
                <motion.div
                  className="absolute inset-0 z-20 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-secondary transition-colors"
                    >
                      <FiGithub size={24} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-secondary transition-colors"
                    >
                      <FiExternalLink size={24} />
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Tags */}
              <div className="px-6 py-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + tagIndex * 0.1 }}
                      className="px-3 py-1 bg-secondary/20 rounded-full text-xs text-secondary backdrop-blur-sm
                               hover:bg-secondary hover:text-white transition-all duration-300 cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Glowing Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/30 to-secondary/0 opacity-0
                           group-hover:opacity-20 blur-xl transition-opacity duration-500"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 180 }}
                transition={{ duration: 1, ease: "linear" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
