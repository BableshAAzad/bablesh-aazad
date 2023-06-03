import React from 'react';
import './Services.css';
import {Link} from 'react-router-dom';

export default function Services() {
  return (
    <div>


      <div className="container mt-3 websi1">
        <div className="jumbotron">
        <img src="../images/p3.jpg" className="card-img-top" alt="BableshAAzad" />
          <h3 className='text-break text-primary'>Welcome to BableshAAzad.com</h3>
          <p className="lead">This is wonderful place for learning</p>
          {/* <hr className="my-4" /> */}
          <p>here, you can learn programing languages</p>
          <a className="btn btn-outline-primary btn-sm shadow" href="https://www.google.com/maps/place/ritesh/@21.2640812,81.6057601,19z/data=!4m6!3m5!1s0x3a28ddb496c9d577:0x5024e9ce26ee67a8!8m2!3d21.2641144!4d81.6055072!16s%2Fg%2F11fl5rsqt_" target="_blank" rel="noreferrer">View On Google Maps</a>
        </div>
      </div>

      <center>
        <div className="container card-deck">
            <img src="salesforcec2.PNG" className="card-img-top m-2" width="140px" height="140px" alt="BableshAAzad" />
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Website Purpose</h5>
              <p className="card-text">To provide all person's personal website and given to learning about web designing and resources.</p>
              <p className="card-text"><small className="text-muted">View Details...</small></p>
            </div>
          </div>
          <div className="card">
            <img src="../images/p3.jpg" className="card-img-top" alt="BableshAAzad" />
            <div className="card-body">
              <h5 className="card-title">Guide for traveling</h5>
              <p className="card-text">You want to visit in any place of India then want any information of placeses or personal Guide then contact us.</p>
              <p className="card-text"><small className="text-muted">View Details...</small></p>
            </div>
          </div>
          <div className="card">
            <img src="../images/p4.jpg" className="card-img-top" alt="BableshAAzad" />
            <div className="card-body">
              <h5 className="card-title">Learning</h5>
              <p className="card-text">If you learn about programing languages or web coding then contact for better knowledge.</p>
              <p className="card-text"><small className="text-muted">View Details...</small></p>
            </div>
          </div>
        </div>
      </center>





      <section className='section border-top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 mb-4 text-center'>
                            <h3 className='main-heading'>Our Services</h3>
                            <div className='underline mx-auto'></div>
                        </div>

                        <div className='col-md-4 mb-2'>
                            <div className='card shadow'>
                                <img src="p1.jpg" className='w-100 border-bottom' alt="Freinds" />
                                <div className='card-body'>
                                    <h6>Services 1</h6>
                                    <div className='underline mx-auto'></div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <Link to="/services" className='btn btn-link'>read more...</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-2'>
                            <div className='card shadow'>
                                <img src="p4.jpg" className='w-100 border-bottom' alt="Freinds" />
                                <div className='card-body'>
                                    <h6>Services 2</h6>
                                    <div className='underline mx-auto'></div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <Link to="/services" className='btn btn-link'>read more...</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-2'>
                            <div className='card shadow'>
                                <img src="p5.jpg" className='w-100 border-bottom' alt="Freinds" />
                                <div className='card-body'>
                                    <h6>Services 3</h6>
                                    <div className='underline mx-auto'></div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <Link to="/services" className='btn btn-link'>read more...</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


   

    </div>
  )
}