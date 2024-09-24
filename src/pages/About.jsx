import React from 'react'
import AboutUsComponent from '../components/Page Items/About Us /AboutUsComponent'
import SliderCarousel from '../components/UI components/SliderCarousel'; 
import '../components/Page Items/About Us /AboutUsComponent.scss'
import image1 from '../assets/banner1.jpeg';
import image2 from '../assets/banner2.jpeg';
import image3 from '../assets/banner3.jpeg'

const About = () => {
  const images = [image1, image2, image3];

  return (
    <div>
      <h1 
      style={{ fontFamily:"cursive",fontWeight:'600', fontSize:'2.5rem', textAlign:'center', marginTop:'20px'}}
      >About Us</h1>
      <SliderCarousel images={images} />

      <AboutUsComponent/>
    </div>
  )
}

export default About