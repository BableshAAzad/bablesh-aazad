import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDragon } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join for latest offer and updates news get in mail.
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link className='linka' to='/sign-up'>How it works</Link>
            <Link className='linka' to='/'>Careers</Link>
            <Link className='linka' to='/'>Investors</Link>
            <Link className='linka' to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link className='linka' to='/'>Contact</Link>
            <Link className='linka' to='/'>Support</Link>
            <Link className='linka' to='/'>Destinations</Link>
            <Link className='linka' to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link className='linka' to='/'>Submit Video</Link>
            <Link className='linka' to='/'>Ambassadors</Link>
            <Link className='linka' to='/'>Agency</Link>
            <Link className='linka' to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link className='linka' to='https://www.instagram.com/bableshaazad/' target='_blank' aria-label='Instagram'>Instagram</Link>
            <Link className='linka' to='https://www.facebook.com/aazadbablesh/' target='_blank' aria-label='Facebook'>Facebook</Link>
            <Link className='linka' to='https://www.linkedin.com/in/bableshaazad/' target='_blank' aria-label='Linkedin'>LinkedIn</Link>
            <Link className='linka' to='https://twitter.com/bableshaazad' target='_blank' aria-label='Twitter'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='https://bableshaazad.com/' aria-label='BableshAAzad' className='social-logo'>
              BableshAAzad.com&nbsp;
              <FontAwesomeIcon icon={faDragon} beat />
            </Link>
          </div>
          <small className='website-rights'>BableshAAzad © 2023</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='https://www.facebook.com/aazadbablesh/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='https://www.instagram.com/bableshaazad/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='https://www.youtube.com/channel/UCi1r-Lw0qoggZO0ri-7GyTQ'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='https://twitter.com/bableshaazad'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link linkedin'
              to='https://www.linkedin.com/in/bableshaazad/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;