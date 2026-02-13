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
          className="yes-btn"
          onClick={onYes}
        >
          Yes! 😍
        </motion.button>

        <motion.button
          animate={isHovered ? { x: noBtnPosition.x, y: noBtnPosition.y } : {}}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="no-btn"
          onMouseEnter={moveNoButton}
          onTouchStart={moveNoButton} 
          onClick={moveNoButton} // Just in case they manage to click it
        >
          No 😢
        </motion.button>
      </div>
    </div>
  );
};

export default LandingPage;
