import './Contact.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Support = () => {
  return (
    <>
       <div className="support text-center">
                <h3 className="text-secondary">Contact Details</h3>
                <br />
                <Link to="tel:+917898300815" className='boss'><FontAwesomeIcon icon={faPhone} shake />&nbsp;+91-7898300815</Link><br />
                <Link to="mailto:bableshaazad@outlook.com" className='boss'><FontAwesomeIcon icon={faEnvelope} flip />&nbsp;Bableshaazad@outlook.com</Link><br />
                <br /><br />
                <div className="container">
                <div className='row text-center'>
                    <div className='col-md-2'>
                        <p className='faceb socialP'>FaceBook Page</p>
                        <Link to="https://www.facebook.com/Bableshaazad/" target="_blank" rel="noopener noreferrer" className='sharad text-warning'><i className='fab fa-facebook-f' /></Link>
                        <br />
                        <Link to='https://www.facebook.com/Bableshaazad/' target="_blank" rel="noopener noreferrer">Facebook</Link>
                    </div>
                    <div className='col-md-2'>
                        <p className='twit socialP'>Twitter Page</p>
                        <Link to="https://twitter.com/bableshaazad" target="_blank" rel="noopener noreferrer" className='sharad text-info'><i className='fab fa-twitter' /></Link>
                        <br />
                        <Link to='https://twitter.com/bableshaazad' target="_blank" rel="noopener noreferrer">Twitter</Link>
                    </div>
                    <div className='col-md-2 socialP'>
                        <p className='inst'>Instagram Page</p>
                        <Link to="https://www.instagram.com/bableshaazad/" target="_blank" rel="noopener noreferrer" className='sharad'><i className='fab fa-instagram' /></Link>
                        <br />
                        <Link to='https://www.instagram.com/bableshaazad/' target="_blank" rel="noopener noreferrer">Instagram</Link>
                    </div>
                    <div className='col-md-2 socialP'>
                        <p className='yout'>Youtube Channel</p>
                        <Link to="https://www.youtube.com/channel/UCi1r-Lw0qoggZO0ri-7GyTQ" target="_blank" rel="noopener noreferrer" className='sharad text-danger'><i className='fab fa-youtube' /></Link>
                        <br />
                        <Link to='https://www.youtube.com/channel/UCi1r-Lw0qoggZO0ri-7GyTQ' target="_blank" rel="noopener noreferrer">Youtube</Link>
                    </div>
                    <div className='col-md-2 socialP'>
                        <p className='linke'>LinkedIn Page</p>
                        <Link to="https://www.linkedin.com/in/bableshaazad/" target="_blank" rel="noopener noreferrer" className='sharad'><i className='fab fa-linkedin' /></Link>
                        <br />
                        <Link to='https://www.linkedin.com/in/bableshaazad/' target="_blank" rel="noopener noreferrer">Linkedin</Link>
                    </div>
                    <div className='col-md-2 socialP'>
                        <p className='github'>GitHub</p>
                        <Link className="social-icon-link text-dark fhub githubi"to="https://github.com/bableshaazad"target="_blank"aria-label="GitHub" rel="noopener noreferrer"><i className="fab fa-github" /></Link>
                        <br />
                        <Link className="githubi"to="https://github.com/bableshaazad"target="_blank"aria-label="GitHub" rel="noopener noreferrer">GitHub</Link>
                    </div>
                </div>
                </div>
            </div>
    </>
  )
}

export default Support
