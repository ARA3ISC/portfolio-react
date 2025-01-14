import { motion, useScroll, useTransform } from 'framer-motion';
import { useSpring } from '@react-spring/web';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useGSAP(() => {
    const chars = textRef.current.querySelectorAll('.char');
    gsap.from(chars, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.02,
      ease: "back.out(1.7)",
    });
  }, { scope: containerRef });

  useEffect(() => {
    const text = textRef.current;
    text.innerHTML = text.textContent.replace(/\S/g, "<span class='char inline-block'>$&</span>");
  }, []);

  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  
  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    set({ xy: [x * 50, y * 50] });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-primary dark:bg-primary-dark relative overflow-hidden"
      data-scroll-section
      onMouseMove={handleMouseMove}
    >
      <motion.div
        style={{ y }}
        className="relative z-10 text-center"
        data-scroll
        data-scroll-speed="-3"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-secondary dark:text-secondary-dark text-lg md:text-xl font-mono mb-4 block"
          data-scroll
          data-scroll-speed="2"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          ref={textRef}
          className="text-4xl sm:text-6xl font-bold mb-4 relative hover-trigger text-textPrimary dark:text-textPrimary-dark"
          style={{
            textShadow: xy.to((x, y) => `${x / 5}px ${y / 5}px 10px rgba(100, 255, 218, 0.3)`)
          }}
          data-scroll
          data-scroll-speed="2"
        >
          <span 
            className="text-textPrimary dark:text-textPrimary-dark"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-2"
          >
            Mohamed
          </span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl sm:text-5xl font-bold text-textSecondary dark:text-textSecondary-dark mb-6"
          data-scroll
          data-scroll-speed="3"
        >
          I build things for the web
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto text-textSecondary dark:text-textSecondary-dark mb-8"
          data-scroll
          data-scroll-speed="4"
        >
          I'm a software developer specializing in building exceptional digital experiences.
          Currently, I'm focused on building accessible, human-centered products.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8"
          data-scroll
          data-scroll-speed="5"
        >
          <a 
            href="#projects" 
            className="btn-primary hover-trigger"
            data-scroll-to
          >
            Check out my work!
          </a>
        </motion.div>
      </motion.div>

      <div 
        className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-primary dark:to-primary-dark opacity-50"
        data-scroll
        data-scroll-speed="-8"
      ></div>

      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-secondary/20 dark:bg-secondary-dark/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
