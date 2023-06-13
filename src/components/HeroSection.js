import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import p9 from './../images/p9.jpg';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      <img src={p9} alt="BableshAAzad" />
      <h2 className='my-2'>Affordable Website</h2>
      <p>Want Your Own Website ?</p>
      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Select Template
        </Button> */}
        
        <Link to='/products'>
        <button className='btn btn-outline-light btnTamplate'>Select Template</button>
        </Link>
        <Link to='mailto:bableshaazad@outlook.com'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          ORDER NOW <i className='far fa-hand-point-left' />
        </Button>
        </Link>
        
        {/* <Link to='/products'>
        <button className='btn btn-light btnOrder'>
          ORDER NOW<i className='far fa-hand-point-left' />
          </button>
        </Link> */}
      </div>
    </div>
  );
}

export default HeroSection;