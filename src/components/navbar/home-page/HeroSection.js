import "./../../../App.css";
import { Button } from './Button';
import "./HeroSection.css";
import p9 from "./../../../images/p9.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandPointLeft } from '@fortawesome/free-solid-svg-icons';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from "aos";

function HeroSection(props) {

  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false, 
      offset: 100,
      easing: 'ease-out-cubic',
    });

    const handleScroll = () => {
      Aos.refresh(); // Refresh AOS animations on scroll
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup scroll event
    };
  }, []);

  return (
    <div className="hero-container" data-aos="flip-left">
      <img src={p9} alt="BableshAAzad" />
      <h2 className="my-2">{props.heading}</h2>
      <p>Want Your Own Website ?</p>
      <div className='hero-btns'>
        <Link to='/products'>
        <button className='btn btn-outline-light btnTamplate'>Select Template</button>
        </Link>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          to='mailto:bableshaazad@outlook.com'
        >
          ORDER NOW <FontAwesomeIcon icon={faHandPointLeft} fade />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
