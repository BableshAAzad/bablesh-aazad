import React, { useEffect, useState } from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import mobile from './../../images/mobile.png';
import travel from './../../images/travel.png';
import programming from './../../images/programming.png';
import Aos from 'aos';
import { Helmet } from 'react-helmet';

export default function Services(props) {
    const [isExpanded1, setIsExpanded1] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);
    const [isExpanded3, setIsExpanded3] = useState(false);

    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: false,
            offset: 100,
            easing: 'ease-out-cubic',
        });

        const handleScroll = () => {
            Aos.refresh(); // Refresh AOS animations on scroll
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup scroll event
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>Services - Website Designing | Training | Development</title>
                <meta name="description" content="Website design, web development, affordable websites, coding training, travel guidance, gym training etc." />
            </Helmet>
            <div className="container mt-3 websi1">
                <div className="jumbotron">
                    {/* <img src={p4} className="jumboImg" alt="BableshAAzad" /> */}
                    <h3 className='text-break text-light'>Welcome to BableshAAzad.com</h3>
                    <p className="lead">This is wonderful place for Website order</p>
                    {/* <hr className="my-4" /> */}
                    <p>here, Web Designing and web maintenance both worked taken </p>
                    <Link className="btn btn-success btn-sm shadow" to="https://www.google.com/maps/place/ritesh/@21.2640812,81.6057601,19z/data=!4m6!3m5!1s0x3a28ddb496c9d577:0x5024e9ce26ee67a8!8m2!3d21.2641144!4d81.6055072!16s%2Fg%2F11fl5rsqt_" target="_blank" rel="noreferrer">View On Google Maps</Link>
                </div>
            </div>
            <div className="container">
                <h4 className='mb-2'>{props.heading}</h4>
            </div>
            <section className="section border-bottom">
                <div className="container">
                    <div className="row">
                        {/* ... existing code ... */}
                        <div className="col-md-4 mb-3" data-aos="fade-down-right">
                            <div className="card shadow">
                                {/* <img src={p6} className="w-100 border-bottom cardImg" alt="Freinds" /> */}
                                <img src={mobile} className="w-100 border-bottom cardImg" alt="Freinds" />
                                <div className="card-body">
                                    <h5>Website Designing and maintenance</h5>
                                    <div className="underline mx-auto"></div>
                                    <p>
                                        {isExpanded1
                                            ? "There Designing to various types of website static or dynamic and non-commerce or woo-commerce site etc. and also give daily requirement base service to data or product management."
                                            : "There Designing to various types..."}
                                    </p>
                                    <div>
                                        <button
                                            className="btn btn-link"
                                            onClick={() => setIsExpanded1(!isExpanded1)}
                                        >
                                            {isExpanded1 ? "Read Less" : "Read More"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3" data-aos="flip-up">
                            <div className="card shadow">
                                {/* <img src={p4} className="w-100 border-bottom cardImg" alt="Freinds" /> */}
                                <img src={travel} className="w-100 border-bottom cardImg" alt="Freinds" />
                                <div className="card-body">
                                    <h5>Treveling Guide</h5>
                                    <div className="underline mx-auto"></div>
                                    <p>
                                        {isExpanded3
                                            ? "All over India tourist places and all states traveling guide."
                                            : "All over India tourist places and all states traveling guide...."}
                                    </p>
                                    <div>
                                        <button
                                            className="btn btn-link"
                                            onClick={() => setIsExpanded2(!isExpanded2)}
                                        >
                                            {isExpanded2 ? "Read Less" : "Read More"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3" data-aos="fade-down-left">
                            <div className="card shadow">
                                {/* <img src={p5} className="w-100 border-bottom cardImg" alt="Freinds" /> */}
                                <img src={programming} className="w-100 border-bottom cardImg" alt="Freinds" />
                                <div className="card-body">
                                    <h5>Web Designing Learning</h5>
                                    <div className="underline mx-auto"></div>
                                    <p>
                                        {isExpanded3
                                            ? "If you want to learn web designing or want to raw materials then it is wornderful place for you"
                                            : "If you want to learn web designing or want to raw materials..."}
                                    </p>
                                    <div>
                                        <button
                                            className="btn btn-link"
                                            onClick={() => setIsExpanded3(!isExpanded3)}
                                        >
                                            {isExpanded3 ? "Read Less" : "Read More"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}