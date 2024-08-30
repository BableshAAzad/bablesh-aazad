import React, { useEffect } from 'react';
import './BableshAAzad.css';
import bableshpic from './../../../images/bob.jpg';
import Aos from 'aos';

export default function BableshAAzad(props) {

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
        <div>
            <div className="container mt-2">
                <section className="custom-box">
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-9 col-lg-6 col-xl-5" data-aos="zoom-in">
                                <img src={bableshpic} className="img-fluid rounded-circle mb-2" alt="BableshAAzad" />
                            </div>
                            <div className="col-md-8 col-lg-6 offset-xl-1">

                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <h2 className="mb-0">{props.heading} &nbsp;: &nbsp;&nbsp;</h2>

                                </div>
                                <div className='founderOf mb-2'>
                                    <span>(Founder of BableshAAzad.com)</span>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                    <p className="lead fw-normal mb-0 me-3">"I am a Full Stack Web Developer Application and Electronics and Communication Engineer. My dream is to provide affordable personal and professional websites for startups and businesses. I aim to showcase all products and services online, enabling users to search and find anything they want with a single click."</p>
                                </div>
                                <footer className="blockquote-footer babFooter mt-4">From BableshAAzad.com</footer>
                                <br />

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
