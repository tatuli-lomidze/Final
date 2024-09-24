import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './FramerAnimation.scss';
import image1 from '../../../assets/animation1.jpeg';
import image2 from '../../../assets/animation2.jpeg';
import image3 from '../../../assets/animation3.jpeg';
import routes from '../../../constants/routes'; 

const images = [image1, image2, image3];


const FramerAnimation = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background">
      <AnimatePresence>
        <motion.img
          key={currentImage}
          src={images[currentImage]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          alt="Food"
        />
      </AnimatePresence>
      <div className="overlay">
  <div className="overlay-text">
    <h1>Welcome to Food Paradise</h1>
    <p>Explore the best recipes from around the world</p>
  </div>
  <div className="buttons">
    <button onClick={() => navigate(routes.about)}>About Us</button>
    <button onClick={() => navigate(routes.recipes)}>Recipes</button>
  </div>
</div>

    </div>
  );
};

export default FramerAnimation;
