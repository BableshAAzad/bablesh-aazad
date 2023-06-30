import "./../../App.css";
import { Button } from './Button';
import "./HeroSection.css";
import p9 from "./../../images/p9.jpg";
import { Link } from "react-router-dom";

function HeroSection(props) {
  return (
    <div className="hero-container">
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
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
          ORDER NOW <i className='far fa-hand-point-left' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
