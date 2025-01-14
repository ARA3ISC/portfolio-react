import { motion, useInView } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useRef } from 'react';
import avatarImage from '/src/assets/avatar.jpeg';

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const skills = [
    'JavaScript (ES6+)',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Python',
    'C/C++',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="about" className="py-20 w-full">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto px-4" ref={containerRef}>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            className="section-title"
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.p variants={itemVariants} className="text-textSecondary mb-4">
                Hello! My name is [Your Name] and I enjoy creating things that live on the internet.
                My interest in web development started back in [year] when I decided to try editing
                custom Tumblr themes — turns out hacking together a custom reblog button taught me
                a lot about HTML & CSS!
              </motion.p>
              <motion.p variants={itemVariants} className="text-textSecondary mb-4">
                Fast-forward to today, and I've had the privilege of working at [companies/projects].
                My main focus these days is building accessible, inclusive products and digital
                experiences.
              </motion.p>
              <motion.p variants={itemVariants} className="text-textSecondary">
                Here are a few technologies I've been working with recently:
              </motion.p>
              <motion.ul 
                className="grid grid-cols-2 gap-2 mt-4"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {skills.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={itemVariants}
                    className="flex items-center space-x-2 hover-trigger"
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-secondary">▹</span>
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <Tilt
                className="relative w-64 h-64 mx-auto"
                perspective={1000}
                scale={1.05}
                transitionSpeed={2000}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor="#64ffda"
                glarePosition="all"
              >
                <div className="absolute inset-0 border-2 border-secondary rounded transform translate-x-4 translate-y-4"></div>
                <div className="absolute inset-0 bg-secondary/20 rounded"></div>
                <img
                  src={avatarImage}
                  alt="Profile"
                  className="relative z-10 w-full h-full object-cover rounded hover-trigger"
                />
              </Tilt>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
