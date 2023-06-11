import React, { useState } from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import p4 from './../../images/p4.jpg';
import p5 from './../../images/p5.jpg';
import p6 from './../../images/p6.jpg';

export default function Services() {
    const fullText = "There Designing to various types of website static or dynamic and non-commerce or woo-commerce site etc. and also give daily requirement base service to data or product management."; // Replace with your actual text
    const fullText1 = "";
    const maxVisibleWords = 10;

    const words = fullText.split(' ');
    const visibleWords = words.slice(0, maxVisibleWords).join(' ');
    const hiddenWords = words.slice(maxVisibleWords).join(' ');

    const [isHiddenVisible, setIsHiddenVisible] = useState(false);

    const handleReadMore = () => {
        setIsHiddenVisible(true);
    };
    return (
        <div>
            <div className="container mt-3 websi1">
                <div className="jumbotron">
                    {/* <img src={p3} className="jumboImg" alt="BableshAAzad" /> */}
                    <h3 className='text-break text-light'>Welcome to BableshAAzad.com</h3>
                    <p className="lead">This is wonderful place for Website order</p>
                    {/* <hr className="my-4" /> */}
                    <p>here, Web Designing and web maintenance both worked taken </p>
                    <a className="btn btn-success btn-sm shadow" href="https://www.google.com/maps/place/ritesh/@21.2640812,81.6057601,19z/data=!4m6!3m5!1s0x3a28ddb496c9d577:0x5024e9ce26ee67a8!8m2!3d21.2641144!4d81.6055072!16s%2Fg%2F11fl5rsqt_" target="_blank" rel="noreferrer">View On Google Maps</a>
                </div>
            </div>
            <section className='section border-top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 mb-4 text-center'>
                            <h3 className='main-heading'>Our Services</h3>
                            <div className='underline mx-auto'></div>
                        </div>

                        <div className='col-md-4 mb-3'>
                            <div className='card shadow'>
                                <img src={p6} className='w-100 border-bottom cardImg' alt="Freinds" />
                                <div className='card-body'>
                                    <h5>Website Designing and maintenance</h5>
                                    <div className='underline mx-auto'></div>

                                    <div>
                                        <div>{visibleWords}</div>
                                        {!isHiddenVisible && (
                                            <button onClick={handleReadMore}>Read More</button>
                                        )}
                                        {isHiddenVisible && <div>{hiddenWords}</div>}
                                    </div>

                                    {/* <Link to="/services" className='btn btn-link'>read more...</Link> */}
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-3'>
                            <div className='card shadow'>
                                <img src={p4} className='w-100 border-bottom cardImg' alt="Freinds" />
                                <div className='card-body'>
                                    <h5>Treveling Guid</h5>
                                    <div className='underline mx-auto'></div>
                                    <p>All over India tourist places and all states traveling guide.</p>
                                    <Link to="/services" className='btn btn-link'>read more...</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-3'>
                            <div className='card shadow'>
                                <img src={p5} className='w-100 border-bottom cardImg' alt="Freinds" />
                                <div className='card-body'>
                                    <h5>Web Designing Learning</h5>
                                    <div className='underline mx-auto'></div>
                                    <p>If you want to learn web designing or want to raw materials then it is wornderful place for you</p>
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