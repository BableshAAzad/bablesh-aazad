import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import traveling from "../../../images/img-9.jpg"
import developer from "../../../images/img-8.jpg"
import ground from "../../../images/img-4.jpg"
import { Helmet } from 'react-helmet';
import Aos from 'aos';

function Careers() {
    
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
                <title>Careers - BableshAAzad.com</title>
                <meta name="description" content="You can join our team and encourage our members to hit the apply button according to their interests." />
            </Helmet>
            <div className="container my-5">
                <header className="text-center mb-5">
                    <h1 className="display-4">Join Our Team</h1>
                    <p className="lead">Explore exciting career opportunities and be a part of our innovative team.</p>
                </header>

                <section className="mb-5">
                    <h2 className="mb-4">Current Openings</h2>
                    <div className="row" data-aos="flip-up">
                        {/* Job Listing 1 */}
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <img src={traveling} className="card-img-top" alt="Software Engineer" />
                                <div className="card-body">
                                    <h5 className="card-title">Software Engineer</h5>
                                    <p className="card-text">Develop and maintain cutting-edge applications. Experience with React and Node.js required.</p>
                                    <Link to="/" className="btn btn-primary">Apply Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* Job Listing 2 "https://via.placeholder.com/500x300?text=Product+Designer" */}
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm" data-aos="zoom-in">
                                <img src={developer} className="card-img-top" alt="Product Designer" />
                                <div className="card-body">
                                    <h5 className="card-title">Product Designer</h5>
                                    <p className="card-text">Design intuitive and engaging user interfaces. Expertise in UX/UI design is essential.</p>
                                    <Link to="/" className="btn btn-primary">Apply Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* Job Listing 3 */}
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm" data-aos="zoom-out-down">
                                <img src={ground} className="card-img-top" alt="Marketing Specialist" />
                                <div className="card-body">
                                    <h5 className="card-title">Marketing Specialist</h5>
                                    <p className="card-text">Create and implement effective marketing strategies. Experience in digital marketing preferred.</p>
                                    <Link to="/" className="btn btn-primary">Apply Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="mb-4">Why Work With Us?</h2>
                    <ul className="list-unstyled">
                        <li className="mb-3">
                            <h5>Competitive Salary</h5>
                            <p>We offer a competitive salary package to attract and retain top talent.</p>
                        </li>
                        <li className="mb-3">
                            <h5>Flexible Working Hours</h5>
                            <p>Enjoy flexible working hours that fit your lifestyle and needs.</p>
                        </li>
                        <li className="mb-3">
                            <h5>Health and Wellness Programs</h5>
                            <p>We provide comprehensive health insurance and wellness programs to keep you healthy and happy.</p>
                        </li>
                        <li className="mb-3">
                            <h5>Professional Development</h5>
                            <p>Take advantage of our professional development opportunities and advance your career.</p>
                        </li>
                    </ul>
                </section>

                <footer className="text-center mt-5">
                    <p className="mb-0">Ready to join us? <Link to="/" className="btn btn-secondary">Contact Us</Link></p>
                </footer>
            </div>
        </>
    );
}

export default Careers;
