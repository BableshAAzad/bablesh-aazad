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
              <nav className="col-sm-3 col-4" id="myScrollspy">
                <ul className="nav nav-pills flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="#section1">Section 1</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#section2">Section 2</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#section3">Section 3</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Section 4</a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#section41">Link 1</a>
                      <a className="dropdown-item" href="#section42">Link 2</a>
                    </div>
                  </li>
                </ul>
              </nav>
              <div className="col-sm-9 col-8 dide">
                <div id="section1" className="bg-success">
                  <h1>Section 1</h1>
                  <p>Try to scroll this section and look at the navigation list while scrolling!</p>
                </div>
                <div id="section2" className="bg-warning">
                  <h1>Section 2</h1>
                  <p>Try to scroll this section and look at the navigation list while scrolling!</p>
                </div>
                <div id="section3" className="bg-secondary">
                  <h1>Section 3</h1>
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