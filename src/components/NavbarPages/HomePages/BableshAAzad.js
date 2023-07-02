import React from 'react';
import './BableshAAzad.css';
import bableshpic from './../../../images/bob.jpg';

export default function BableshAAzad(props) {
    return (
        <div>
            <div className="container mt-3">
                <section className="custom-box">
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-9 col-lg-6 col-xl-5">
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
                                    <p className="lead fw-normal mb-0 me-3">"I am a Full Stack Web Developer and Electronics and Communication Engineer.
                                        My dream is to all startup and bussiness to
                                        personal and profetional website provide in affortable prices.
                                        I want to make all producst and all of the thing to show in online.
                                        To one single click search and find anything you want."</p>

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
