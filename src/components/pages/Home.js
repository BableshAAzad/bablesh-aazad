import '../../App.css';
import HeroSection from '../NavbarPages/HomePages/HeroSection';
import { Link } from 'react-router-dom';
import BableshAAzad from '../NavbarPages/HomePages/BableshAAzad';
import YoutubeData from '../NavbarPages/HomePages/YoutubeData'

function Home(props) {
  return (
    <>
      <HeroSection heading='Want Affordable Website'/>
      <BableshAAzad heading='Hi I am Bablesh AAzad'></BableshAAzad>
      <h3 className='my-3' style={{marginLeft: '10px'}}>Visit my projects and use on your requirment</h3>
      <div className='proje mb-4'>
        <Link to='/projects' className='projectN'>| 1.Text-Editor |</Link>
        <Link to='/' className='projectM'>| 2.Pdf-Merge |</Link>
        <Link to='/' className='projectM'>| 3.News-App |</Link>
      </div>
      <YoutubeData></YoutubeData>
    </>
  );
}

export default Home;