import React from 'react';
import { Carousel } from 'antd';

const SliderCarousel = ({ images }) => {

  const contentStyle = {
    width: '100%', 
    height: '600px', 
    objectFit: 'cover', 
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <Carousel autoplay autoplaySpeed={2000} focusOnSelect={false} >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} style={contentStyle} />
        </div>
      ))}
    </Carousel>
  );
};

export default SliderCarousel;
