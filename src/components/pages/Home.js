import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import { Link } from 'react-router-dom';
import BableshAAzad from '../BableshAAzad';

function Home(props) {
  return (
    <>
      <HeroSection heading='Want Affordable Website'/>
      <BableshAAzad heading='Hi I am Bablesh AAzad'></BableshAAzad>
      <h3 className='my-3 ml-4'>Visit my projects and use on your requirment</h3>
      <div className='proje'>
        <Link to='/projects' className='projectN'>| 1.Text-Editor |</Link>
        <Link to='/' className='projectN'>| 2.Pdf-Merge |</Link>
        <Link to='/' className='projectN'>| 3.News-App |</Link>
      </div>
      <Cards heading='Check out these EPIC Templates!'/>
    </>
  );
}

export default Home;