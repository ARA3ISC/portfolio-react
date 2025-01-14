import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion'
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import BackToTop from './components/BackToTop'

const generateParticles = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 2 + 1,
    delay: Math.random()
  }));
};

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [glitchText, setGlitchText] = useState('WELCOME');
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);
  const particles = generateParticles(50);
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()[]{}/?';
      const randomText = Array.from({ length: 7 }, () =>
        chars.charAt(Math.floor(Math.random() * chars.length))
      ).join('');
      setGlitchText(randomText);
    }, 100);

    // Animate the counter from 0 to 100
    const animation = animate(count, 100, {
      duration: 2,
      ease: "easeOut",
    });

    setTimeout(() => {
      clearInterval(glitchInterval);
      setGlitchText('WELCOME');
      setTimeout(() => setIsLoading(false), 500);
    }, 2500);

    return () => {
      clearInterval(glitchInterval);
      animation.stop();
    };
  }, []);

  useEffect(() => {
    if (!isLoading && scrollRef.current) {
      locomotiveScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 0.8,
        lerp: 0.1,
        tablet: {
          smooth: true,
          breakpoint: 768,
        },
        smartphone: {
          smooth: true,
        },
      });

      setTimeout(() => {
        locomotiveScrollRef.current?.update();
      }, 500);

      return () => {
        if (locomotiveScrollRef.current) {
          locomotiveScrollRef.current.destroy();
        }
      };
    }
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          className="fixed inset-0 bg-primary dark:bg-primary-dark overflow-hidden perspective-1000 z-50"
          exit={{
            opacity: 0,
            scale: 1.5,
            filter: 'brightness(2)',
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
        >
          {/* 3D Rotating Cube */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              rotateY: [0, 360],
              rotateX: [0, 360],
            }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity
            }}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px"
            }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 border-2 border-secondary/30 dark:border-secondary-dark/30 backdrop-blur-sm"
                style={{
                  transform: `rotateY(${i * 60}deg) translateZ(80px)`,
                  backgroundColor: isDarkMode ? 'rgba(var(--secondary-dark-rgb), 0.1)' : 'rgba(var(--secondary-rgb), 0.1)'
                }}
                animate={{
                  borderColor: isDarkMode
                    ? ['rgba(var(--secondary-dark-rgb), 0.3)', 'rgba(var(--secondary-dark-rgb), 0.8)', 'rgba(var(--secondary-dark-rgb), 0.3)']
                    : ['rgba(var(--secondary-rgb), 0.3)', 'rgba(var(--secondary-rgb), 0.8)', 'rgba(var(--secondary-rgb), 0.3)']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>

          {/* Glitch Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <motion.div
                className="text-6xl font-bold text-secondary dark:text-secondary-dark relative"
                style={{ textShadow: isDarkMode ? '2px 2px 20px rgba(var(--secondary-dark-rgb), 0.5)' : '2px 2px 20px rgba(var(--secondary-rgb), 0.5)' }}
                animate={{
                  textShadow: isDarkMode
                    ? ['2px 2px 20px rgba(var(--secondary-dark-rgb), 0.5)', '2px 2px 40px rgba(var(--secondary-dark-rgb), 0.8)', '2px 2px 20px rgba(var(--secondary-dark-rgb), 0.5)']
                    : ['2px 2px 20px rgba(var(--secondary-rgb), 0.5)', '2px 2px 40px rgba(var(--secondary-rgb), 0.8)', '2px 2px 20px rgba(var(--secondary-rgb), 0.5)']
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {glitchText}
                <motion.div
                  className="absolute inset-0 text-primary dark:text-primary-dark mix-blend-difference"
                  animate={{ x: [-2, 2, -2] }}
                  transition={{ duration: 0.2, repeat: Infinity }}
                >
                  {glitchText}
                </motion.div>
                <motion.div
                  className="absolute inset-0 text-secondary/80 dark:text-secondary-dark/80 mix-blend-difference"
                  animate={{ x: [2, -2, 2] }}
                  transition={{ duration: 0.2, repeat: Infinity, delay: 0.1 }}
                >
                  {glitchText}
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Floating Particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-secondary/50 dark:bg-secondary-dark/50"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 40 - 20, 0],
                opacity: [0, 1, 0],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Circular Progress with Percentage */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="relative w-[60px] h-[60px]">
              <svg width="60" height="60" viewBox="0 0 60 60" className="absolute">
                <motion.circle
                  cx="30"
                  cy="30"
                  r="26"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  className="text-secondary/30 dark:text-secondary-dark/30"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-secondary dark:text-secondary-dark font-mono text-sm flex items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.span>{rounded}</motion.span>
                  <span>%</span>
                </motion.div>
              </div>
            </div>
            <motion.div
              className="text-secondary/50 dark:text-secondary-dark/50 text-sm font-mono tracking-wider"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              LOADING
            </motion.div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen w-full overflow-hidden bg-primary dark:bg-primary-dark text-textPrimary dark:text-textPrimary-dark"
        >
          <div className='hidden md:block'>
            <CustomCursor />
          </div>
          <div className="max-w-[1920px] mx-auto relative">
            <Navbar />
            <main
              className="relative"
              data-scroll-container
              ref={scrollRef}
            >
              <Hero />
              <About />
              <Projects />
              <Contact />
            </main>
          </div>
          <BackToTop />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function App() {
  return <AppContent />;
}

export default App;
