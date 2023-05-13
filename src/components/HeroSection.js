import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      <img src="/images/p9.jpg" alt="BableshAAzad" />
      <h1>Affordable Website</h1>
      <p>Want Your Own Website ?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Select Template
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          // onClick={console.log('hey')}
        >
          ORDER NOW <i className='far fa-hand-point-left' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;