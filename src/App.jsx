import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LandingPage from './components/LandingPage';
import SuccessPage from './components/SuccessPage';
import './index.css';

function App() {
  const [isValentine, setIsValentine] = useState(false);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {!isValentine ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
          >
            <LandingPage onYes={() => setIsValentine(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SuccessPage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
