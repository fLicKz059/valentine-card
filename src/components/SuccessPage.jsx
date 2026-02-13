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
                    Munchi Booo... ❤️
                    <br /><br />
                    Sometimes I find myself wishing I could go back to those good old days, when we were both in here, close to each other, sharing the little moments that meant everything.
                    <br /><br />
                    I miss you more than words can explain.<br />
                    I especially miss seeing that cute Mavis face you make with your teeth.
                    <br /><br />
                    For 3 beautiful years, you’ve been my happiness, my comfort, and my safe place.<br />
                    No matter the distance, you will always be my home.
                    <br /><br />
                    Happy Valentine’s Day, Munchi Baba 😺
                    <br /><br />
                    — Boleee 🐻
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
