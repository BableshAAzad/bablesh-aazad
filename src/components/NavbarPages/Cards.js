import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';
import school from './../../images/school.jpg';
import restaurant from './../../images/restaurant.jpg';
import vloging from './../../images/vloging.jpg';
import social from './../../images/social.jpg';
import tour from './../../images/tour.jpg';

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
          {/* <center><Link to="/">See more...</Link></center> */}
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <Link className="page-link">Previous</Link>
              </li>
              <li className="page-item active"><Link className="page-link" to="/">1</Link></li>
              <li className="page-item"><Link className="page-link" to="/">2</Link></li>
              <li className="page-item"><Link className="page-link" to="/">3</Link></li>
              <li className="page-item">
                <Link className="page-link" to="/">Next</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Cards;