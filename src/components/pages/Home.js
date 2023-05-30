import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
      <HeroSection />
      <h3 className='my-3'>Visit my projects and use on your requirment</h3>
      <Link style={{fontSize: '30px', textDecoration: 'none'}} to='/projects'> 1. Text Editor</Link>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;