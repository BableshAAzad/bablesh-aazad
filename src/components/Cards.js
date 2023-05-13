import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import {Link} from 'react-router-dom';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Templates!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/school.jpg'
              text='Publice your school or corporate and advertise to anyware'
              label='School'
              path='/services'
            />
            <CardItem
              src='images/restaurant.jpg'
              text='Publice your restarent on business to all over world'
              label='Restarent'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/vloging.jpg'
              text='Vlogging your daily activity and connect more to one plateform'
              label='Vloging'
              path='/services'
            />
            <CardItem
              src='images/social.jpg'
              text='Create your social media plateform and connect each other'
              label='Social Media'
              path='/products'
            />
            <CardItem
              src='images/tour.jpg'
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