import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import PhotoCollage from './PhotoCollage';
import '../styles/SuccessPage.css';

const SuccessPage = () => {
    useEffect(() => {
        // Fire confetti on mount
        const duration = 15 * 1000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ff4d6d', '#ff8fa3', '#ffffff']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ff4d6d', '#ff8fa3', '#ffffff']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    }, []);

    return (
        <div className="success-container">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="header-text"
            >
                <h1>YAY! ❤️</h1>
                <p>I knew you'd say yes!</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="message-box"
            >
                <p>
                    Even though we are miles apart, my heart is always with you in the UK.
                    <br />
                    I can't wait to hold you in my arms again.
                    <br />
                    Happy Valentine's Day, my love! 🌹
                </p>
            </motion.div>

            <div className="collage-section">
                <h2>Our Beautiful Memories</h2>
                <PhotoCollage />
            </div>

            <motion.div
                className="floating-hearts"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                {/* Decorative hearts */}
                {/* CSS animation handles the movement */}
            </motion.div>
        </div>
    );
};

export default SuccessPage;
