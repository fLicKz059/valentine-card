import React from 'react';
import { motion } from 'framer-motion';
import '../styles/SuccessPage.css'; // Shared styles

const photos = [
    { id: 1, src: 'https://placehold.co/600x400/ff99ac/white?text=Our+Adventure', alt: 'Memory 1', size: 'large' },
    { id: 2, src: 'https://placehold.co/400x600/ffccd5/white?text=Silly+Faces', alt: 'Memory 2', size: 'tall' },
    { id: 3, src: 'https://placehold.co/400x400/ffb3c1/white?text=Date+Night', alt: 'Memory 3', size: 'square' },
    { id: 4, src: 'https://placehold.co/600x400/ff8fa3/white?text=Traveling', alt: 'Memory 4', size: 'wide' },
    { id: 5, src: 'https://placehold.co/400x600/ff4d6d/white?text=Hugs', alt: 'Memory 5', size: 'tall' },
    { id: 6, src: 'https://placehold.co/400x400/c9184a/white?text=Sweet+Times', alt: 'Memory 6', size: 'square' },
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
