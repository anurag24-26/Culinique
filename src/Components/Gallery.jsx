import React, { useState } from "react";
import "../styles/Gallery.css";
import { motion } from "framer-motion";

const images = [
  "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg",
  "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg",
  "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg",
  "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg",
  "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg",
];

// Duplicate images to create a loop effect
const galleryImages = [...images, ...images];

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery-contact-container">
      <div className="gallery-wrapper">
        {/* Text Section */}
        <div className="gallery-text">
          <h2>Photo Gallery</h2>
          <p>Explore our delicious food collection.</p>
          <a href="#" className="view-more">View More</a>
        </div>

        {/* Image Slider */}
        <div className="gallery-container">
          <div className="gallery-slider" style={{ transform: `translateX(-${index * 33.33}%)` }}>
            {galleryImages.map((src, i) => (
              <motion.div className="gallery-item" key={i} whileHover={{ scale: 1.1 }}>
                <img src={src} alt={`Gallery ${i}`} className="gallery-img" />
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="arrow left-arrow" onClick={prevImage}>←</div>
          <div className="arrow right-arrow" onClick={nextImage}>→</div>
        </div>
      </div>

      
    </div>
  );
};

export default Gallery;
