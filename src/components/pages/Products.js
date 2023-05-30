import React from 'react';
import '../../App.css';
import './Products.css';


export default function Products() {

  return (
    <>
      {/* <h1 className='products'>PRODUCTS</h1> */}
      <div>
        <h3>Templates: </h3>
        <p>Choose to template and given your order for fully functionly website, make and grow with online your bussiness
          and expand to world </p>

        <div className='didd' data-spy="scroll" data-target="#myScrollspy" data-offset="1">

          <div className="container-fluid">
            <div className="row">
              <nav className="col-sm-2 col-4" id="myScrollspy">
                <ul className="nav nav-pills flex-column">
                  <li className="nav-item">
                    <a className="nav-link sect" href="#section1">School</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link sect" href="#section2">Restaurent</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link sect" href="#section3">Vloging</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link sect" href="#section4">Social Media</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link sect" href="#section5">Tourism</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link sect dropdown-toggle" data-toggle="dropdown" href="/">Projects</a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#section41">Research</a>
                      <a className="dropdown-item" href="#section42">Daily Plans Document </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link sect" href="#section6">More....</a>
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