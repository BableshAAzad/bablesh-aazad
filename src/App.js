import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/Products';
import Error from './components/Error';
import Projects from './components/Projects';
import About from './Projects/TextEditor/About';
import TextForm from './Projects/TextEditor/TextForm'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/services' exact element={<Services />}></Route>
          <Route path='/products' exact element={<Products />}></Route>
          <Route path='/sign-up' exact element={<SignUp />}></Route>
          <Route path='/projects' exact element={<Projects />}></Route>
          <Route path='/about' exact element={<About />}></Route>
          <Route path='/textForm' exact element={<TextForm/>}></Route>
          <Route path='*' exact element={<Error />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
