import React, { useState, useEffect, useRef } from 'react';
// import { Button } from './Button';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDragon, faHouse, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  let manuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!manuRef.current.contains(e.target)) {
        closeMobileMenu(false);
      }
    };
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container' ref={manuRef}>
          <NavLink to='https://bableshaazad.com/' aria-label='BableshAAzad' className='navbar-logo' onClick={closeMobileMenu}>
            BableshAAzad.com&nbsp;
            <FontAwesomeIcon icon={faDragon} beat />
          </NavLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink to='/' className='nav-links' style={({isActive})=>{
                return{backgroundColor: isActive ? 'rgb(26, 82, 236)' : ''}
              }} onClick={closeMobileMenu}>
                <FontAwesomeIcon icon={faHouse} />
                &nbsp;Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/services'
                className='nav-links'
                style={({isActive})=>{
                  return{backgroundColor: isActive ? 'rgb(26, 82, 236)' : ''}
                }}
                onClick={closeMobileMenu}
              >
                <i className="fa fa-fw fa-wrench" />
                &nbsp;Services
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink
                to='/products'
                className='nav-links'
                style={({isActive})=>{
                  return{backgroundColor: isActive ? 'rgb(26, 82, 236)' : ''}
                }}
                onClick={closeMobileMenu}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                &nbsp;Products
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/logIn'
                className='nav-links-mobile'
                style={({isActive})=>{
                  return{backgroundColor: isActive ? 'rgb(26, 82, 236)' : ''}
                }}
                onClick={closeMobileMenu}
              >
                <i className="fa fa-fw fa-user"></i>
                &nbsp;SignIn
              </NavLink>
            </li>
          </ul>
          {button && (
            <NavLink to='/logIn' className='loginCSS' style={({isActive})=>{
              return{backgroundColor: isActive ? 'rgb(26, 82, 236)' : ''}
            }}>
              <i className="fa fa-fw fa-user"></i>&nbsp;SignIn</NavLink>)}
        </div>
      </nav>
    </>
  );
}

export default Navbar;