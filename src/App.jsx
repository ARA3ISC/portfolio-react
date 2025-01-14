import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (!isLoading && scrollRef.current) {
      // Initialize Locomotive Scroll only after loading is complete
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

      // Update scroll on route change
      setTimeout(() => {
        locomotiveScrollRef.current?.update();
      }, 500);

      // Cleanup function
      return () => {
        if (locomotiveScrollRef.current) {
          locomotiveScrollRef.current.destroy();
        }
      };
    }
  }, [isLoading]); // Only run when loading state changes

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          className="fixed inset-0 bg-primary flex items-center justify-center z-50"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 border-4 border-secondary rounded-full border-t-transparent animate-spin"
          />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen w-full overflow-hidden"
        >
          <CustomCursor />
          <div className="max-w-[1920px] mx-auto relative">
            <Navbar />
            <main 
              className="relative bg-primary text-textPrimary"
              data-scroll-container 
              ref={scrollRef}
            >
              <div data-scroll-section>
                <Hero />
              </div>
              <div data-scroll-section>
                <About />
              </div>
              <div data-scroll-section>
                <Projects />
              </div>
              <div data-scroll-section>
                <Contact />
              </div>
            </main>
          </div>

          {/* Floating particles */}
          <div className="fixed inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-secondary/20"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                transition={{
                  duration: Math.random() * 20 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App
