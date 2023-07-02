import './Cards.css';
import CardItem from '../ProductsPages/CardItem';
import school from './../../../images/school.jpg';
import restaurant from './../../../images/restaurant.jpg';
import vloging from './../../../images/vloging.jpg';
import social from './../../../images/social.jpg';
import tour from './../../../images/tour.jpg';

function Cards(props) {
  return (
    <div className='cards cardsDiv'>
      <h1 className='text-success'>{props.heading}</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={school}
              text='Publice your school or corporate and advertise to anyware'
              label='School'
              path='/products'
            />
            <CardItem
              src={restaurant}
              text='Publice your restarent on business to all over world'
              label='Restarent'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={vloging}
              text='Vlogging your daily activity and connect more to one plateform'
              label='Vloging'
              path='/products'
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
              path='/products'
            />
          </ul>
          <br />
        
        </div>
      </div>
    </div>
  );
}

export default Cards;