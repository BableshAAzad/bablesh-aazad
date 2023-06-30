import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';
import './Products.css';
import Cards from './../NavbarPages/Cards';


export default function Products(props) {

  return (
    <>
      {/* <h1 className='products'>PRODUCTS</h1> */}
      <Cards heading='Check out these EPIC Templates!'/>
      <div className='container' style={{marginBottom: '10px'}}>
        <h3>{props.heading}</h3>
        <p>Choose to template and given your order for fully functionly website, make and grow with online your bussiness
          and expand to world </p>

        <div className='didd' data-spy="scroll" data-target="#myScrollspy" data-offset="1">

          <div className="container">
            <div className="row">
              <nav className="col-sm-2 col-4" id="myScrollspy">
                <ul className="nav nav-pills flex-column">
                  <li className="nav-item">
                    <Link className="nav-link sect" to="#section1">School</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link sect" to="#section2">Restaurent</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link sect" to="#section3">Vloging</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link sect" to="#section4">Social Media</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link sect" to="#section5">Tourism</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link sect dropdown-toggle" data-toggle="dropdown" to="/">Projects</Link>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#section41">Research</Link>
                      <Link className="dropdown-item" to="#section42">Daily Plans Document </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link sect" to="#section6">More....</Link>
                  </li>
                </ul>
              </nav>
              <div className="col-sm-10 col-8 dide">
                <div id="section1">
                  <h2>Section 1</h2>
                  <p>Meke your school to online and all documents and daily activity maintain. and also update your daily
                    active in a single portal.
                  </p>
                  <div className="sec1"></div>
                </div>
                <div id="section2" className="bg-warning">
                  <h1>Section 2</h1>
                  <p>Try to scroll this section and look at the navigation list while scrolling!</p>
                </div>
                <div id="section3" className="bg-secondary">
                  <h1>Section 3</h1>
                  <p>Try to scroll this section and look at the navigation list while scrolling!</p>
                </div>
                <div id="section4" className="bg-info">
                  <h1>Section 4</h1>
                  <p>Try to scroll this section and look at the navigation list while scrolling!</p>
                </div>
                <div id="section5" className="bg-light">
                  <h1>Section 5</h1>
                  <p>Try to scroll this section and look at the navigation list while scrolling!</p>
                </div>
                <div id="section41" className="bg-danger">
                  <h1>Section 4-1</h1>
                  <p>Try to scroll this section and look at the navigation list while scrolling!</p>
                </div>
                <div id="section42" className="bg-info">
                  <h1>Section 4-2</h1>
                  <p>Try to scroll this section and look at the navigation list while scrolling!</p>
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>
    </>

  );
}