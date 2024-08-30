import './Cards.css';
import CardItem from '../product-page/CardItem';
import ecommerce from "../../../images/ecommerce.png"
import restaurant from "../../../images/restaurant.jpg"
import vloging from "../../../images/vloging.jpg"
import social from "../../../images/social.jpg"
import tour from "../../../images/tour.jpg"

function Cards(props) {
  return (
    <div className='cards cardsDiv'>
      <h1 className='text-success'>{props.heading}</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={ecommerce}
              text='Shopping Applications, promote your business'
              label='E-Commerce-Shopping'
              path='https://ecommerce.bableshaazad.com'
              target="_blank"
            />
            <CardItem
              src={restaurant}
              // src="https://source.unsplash.com/1400x400/?restaurants, food"
              text='Publice your restaurants on business to all over world'
              label='Restaurants'
              path='/products'
              target=""
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={vloging}
              // src="https://source.unsplash.com/1400x400/?blogging, blogging"
              text='Vlogging your daily activity and connect more to one plateform'
              label='Vloging'
              path='/products'
              target=""
            />
            <CardItem
              src={social}
              // src="https://source.unsplash.com/1400x400/?socialmedia, facebook"
              text='Create your social media plateform and connect each other'
              label='Social Media'
              path='/products'
              target=""
            />
            <CardItem
              src={tour}
              // src="https://source.unsplash.com/1400x400/?tourist, hills"
              text='For tour and travels, get info to various place'
              label='Tourism'
              path='/products'
              target=""
            />
          </ul>
          <br />

        </div>
      </div>
    </div>
  );
}

export default Cards;