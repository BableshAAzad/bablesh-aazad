import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <HeroSection />
      <h3 className='my-3 ml-4'>Visit my projects and use on your requirment</h3>
      <div className='proje'>
        <Link style={{ fontSize: '30px', textDecoration: 'none' }} to='/projects' className='mx-4'>| 1.Text-Editor |</Link>
        <Link style={{ fontSize: '30px', textDecoration: 'none' }} to='/' className='mx-4'>| 2.Pdf-Merge |</Link>
        <Link style={{ fontSize: '30px', textDecoration: 'none' }} to='/' className='mx-4'>| 3.News-App |</Link>
      </div>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;