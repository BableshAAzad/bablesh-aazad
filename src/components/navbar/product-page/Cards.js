import './Cards.css';
import CardItem from '../product-page/CardItem';
import onlineshopping from "../../../images/onlineshopping.png"
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
              src={onlineshopping}
              text='Shopping Applications, promote your business'
              label='E-Commerce-Shopping'
              path='/products'
            />
            <CardItem
              src={restaurant}
              // src="https://source.unsplash.com/1400x400/?restaurants, food"
              text='Publice your restarent on business to all over world'
              label='Restarent'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={vloging}
              // src="https://source.unsplash.com/1400x400/?blogging, blogging"
              text='Vlogging your daily activity and connect more to one plateform'
              label='Vloging'
              path='/products'
            />
            <CardItem
              src={social}
              // src="https://source.unsplash.com/1400x400/?socialmedia, facebook"
              text='Create your social media plateform and connect each other'
              label='Social Media'
              path='/products'
            />
            <CardItem
              src={tour}
              // src="https://source.unsplash.com/1400x400/?tourist, hills"
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