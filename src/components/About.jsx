import { motion, useInView } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useRef } from 'react';
import avatarImage from '/src/assets/avatar.jpeg';
import { FaReact, FaPython, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiTypescript } from 'react-icons/si';
import { TbBrandCpp, TbBrandDjango } from "react-icons/tb";


const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const skillsRow1 = [
    { name: 'JavaScript (ES6+)', icon: SiJavascript },
    { name: 'React', icon: FaReact },
    { name: 'Django', icon: TbBrandDjango },
    { name: 'Git', icon: FaGithub },
  ];

  const skillsRow2 = [
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Python', icon: FaPython },
    { name: 'C/C++', icon: TbBrandCpp },
    { name: 'TypeScript', icon: SiTypescript },

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
    <section id="about" className="py-20 w-full bg-primary dark:bg-primary-dark">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto px-4" ref={containerRef}>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            className="section-title text-center mb-12"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.p variants={itemVariants} className="text-textSecondary dark:text-textSecondary-dark mb-4">
                Hi there! I'm Mohamed, a passionate software engineer with a knack for developing robust backend systems and engaging frontend experiences. I specialize in crafting efficient, scalable solutions using modern technologies like React, Django, and Docker. When I'm not coding, I enjoy exploring new tech trends and contributing to open-source projects.
              </motion.p>
              <motion.p variants={itemVariants} className="text-textSecondary dark:text-textSecondary-dark">
                Here are a few technologies I've been working with recently:
              </motion.p>
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

          {/* Skills section - Centered with 50% width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full flex justify-center"
          >
            <div className="w-full overflow-hidden">
              {/* First row of sliding skills */}
              <div className="mb-4 overflow-hidden">
                <motion.div
                  className="flex gap-8 animate-slide"
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear",
                  }}
                >
                  {[...skillsRow1, ...skillsRow1, ...skillsRow1, ...skillsRow1].map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-tertiary dark:bg-tertiary-dark rounded-lg px-6 py-3 whitespace-nowrap"
                    >
                      {skill.icon && (
                        <skill.icon className="w-12 h-12 text-secondary dark:text-secondary-dark my-2" />
                      )}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Second row of sliding skills */}
              <div className="overflow-hidden">
                <motion.div
                  className="flex gap-8 animate-slide-reverse"
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear",
                  }}
                >
                  {[...skillsRow2, ...skillsRow2, ...skillsRow2, ...skillsRow2].map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-tertiary dark:bg-tertiary-dark rounded-lg px-6 py-3 whitespace-nowrap"
                    >
                      {skill.icon && (
                        <skill.icon className="w-12 h-12 text-secondary dark:text-secondary-dark my-2" />
                      )}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
