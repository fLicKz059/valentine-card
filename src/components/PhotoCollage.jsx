import React from 'react';
import { motion } from 'framer-motion';
import '../styles/SuccessPage.css'; // Shared styles

import adventureImg from '../assets/memories/Adventure.jpg';
import sillyFacesImg from '../assets/memories/Silly Faces.jpg';
import dateNightImg from '../assets/memories/Date Night.jpg';
import travellingImg from '../assets/memories/Travelling.jpg';
import hugsImg from '../assets/memories/Hugs.jpeg';
import sweetTimesImg from '../assets/memories/Sweet Times.jpeg';

const photos = [
    { id: 1, src: adventureImg, alt: 'Adventure', size: 'square' },        // 1024x988
    { id: 2, src: sillyFacesImg, alt: 'Silly Faces', size: 'wide' },       // 1280x960
    { id: 3, src: hugsImg, alt: 'Hugs', size: 'tall' },                    // 852x1280
    { id: 4, src: dateNightImg, alt: 'Date Night', size: 'wide' },         // 1280x960
    { id: 5, src: sweetTimesImg, alt: 'Sweet Times', size: 'tall' },       // 959x1280
    { id: 6, src: travellingImg, alt: 'Travelling', size: 'wide' },        // 1280x960
];

const PhotoCollage = () => {
    return (
        <div className="collage-grid">
            {photos.map((photo, index) => (
                <motion.div
                    key={photo.id}
                    className={`collage-item ${photo.size}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02, rotate: Math.random() * 4 - 2 }}
                >
                    <img src={photo.src} alt={photo.alt} loading="lazy" />
                </motion.div>
            ))}
        </div>
    );
};

export default PhotoCollage;
