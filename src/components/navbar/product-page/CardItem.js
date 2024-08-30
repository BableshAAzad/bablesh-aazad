import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {

  useEffect(() => {
    Aos.init({
      duration: 1000,
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
    <>
      <li className='cards__item' data-aos="zoom-in">
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='image_not_loaded'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;