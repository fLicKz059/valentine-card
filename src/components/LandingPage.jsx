import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/LandingPage.css'; // We'll create this next

const LandingPage = ({ onYes }) => {
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Function to move the "No" button
  const moveNoButton = () => {
    const x = Math.random() * (window.innerWidth - 100) - (window.innerWidth / 2 - 50);
    const y = Math.random() * (window.innerHeight - 100) - (window.innerHeight / 2 - 50);
    setNoBtnPosition({ x, y });
    setIsHovered(true);
  };

  return (
    <div className="landing-container">
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="valentine-text"
      >
        Will you be my Valentine? 💖
      </motion.h1>

      <div className="button-container">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="yes-btn"
          onClick={onYes}
        >
          Yes! 😍
        </motion.button>

        <motion.button
          initial={{ x: 100, opacity: 0 }}
          animate={isHovered ? { x: noBtnPosition.x, y: noBtnPosition.y, opacity: 1 } : { x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20, opacity: { duration: 0.5, delay: 0.4 } }}
          className="no-btn"
          onMouseEnter={moveNoButton}
          onTouchStart={moveNoButton}
          onClick={moveNoButton} // Just in case they manage to click it
        >
          No 😢
        </motion.button>
      </div>

      {/* Background Floating Hearts */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100, x: Math.random() * window.innerWidth - window.innerWidth / 2 }}
          animate={{
            opacity: [0, 0.5, 0],
            y: -window.innerHeight,
            x: Math.random() * 100 - 50
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            fontSize: `${Math.random() * 20 + 20}px`,
            zIndex: -1,
            pointerEvents: 'none'
          }}
        >
          {Math.random() > 0.5 ? '❤️' : '💖'}
        </motion.div>
      ))}
    </div>
  );
};

export default LandingPage;
