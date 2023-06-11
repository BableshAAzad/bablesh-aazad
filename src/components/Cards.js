import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import {Link} from 'react-router-dom';
import school from './../images/school.jpg';
import restaurant from './../images/restaurant.jpg';
import vloging from './../images/vloging.jpg';
import social from './../images/social.jpg';
import tour from './../images/tour.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Templates!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={school}
              text='Publice your school or corporate and advertise to anyware'
              label='School'
              path='/services'
            />
            <CardItem
              src={restaurant}
              text='Publice your restarent on business to all over world'
              label='Restarent'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={vloging}
              text='Vlogging your daily activity and connect more to one plateform'
              label='Vloging'
              path='/services'
            />
            <CardItem
              src={social}
              text='Create your social media plateform and connect each other'
              label='Social Media'
              path='/products'
            />
            <CardItem
              src={tour}
              text='For tour and travels, get info to various place'
              label='Tourism'
              path='/sign-up'
            />
          </ul>
          <br />
          <center><Link to="/Tempaltes">See more...</Link></center>
        </div>
      </div>
    </div>
  );
}

export default Cards;