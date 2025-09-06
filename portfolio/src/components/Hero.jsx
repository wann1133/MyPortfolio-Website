import { motion } from 'framer-motion';
import TypingText from './TypingText';
import '../lanyard.css';

const Hero = () => {
  const roles = ["Web Developer", "AI Engineer", "ML Engineer"];
  
  return (
    <section id="home" className="hero">
      <div className="hero-shooting-stars">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
      <div className="hero-floating-elements">
        <div className="hero-floating-element"></div>
        <div className="hero-floating-element"></div>
        <div className="hero-floating-element"></div>
        <div className="hero-floating-element"></div>
      </div>
      <div className="container">
        {/* Left Lanyard with JavaScript Logo */}
        <motion.div 
          className="lanyard-container left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div 
            className="lanyard"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className="badge js-badge"
            animate={{ 
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="logo-text">JS</span>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            WECOME TO <span style={{ color: '#8f94fb' }}>MYPORTFOLIO</span><br />
            <TypingText texts={roles} speed={150} delay={2000} />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            MUHAMMAD ALWAN FARRAS
          </motion.p>
          <motion.div 
            className="hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a 
              href="https://github.com/wann1133" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VIEW MY GITHUB
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/muhammad-alwan-farras-76829728b/" 
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect with me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Lanyard with Python Logo */}
        <motion.div 
          className="lanyard-container right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div 
            className="lanyard"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className="badge py-badge"
            animate={{ 
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="logo-text">PY</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;