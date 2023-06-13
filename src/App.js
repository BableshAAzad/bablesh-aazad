import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Error from './components/Error';
import Projects from './components/Projects';
import About from './Projects/TextEditor/About';
import TextForm from './Projects/TextEditor/TextForm';
import LogIn from './components/pages/LogIn';
import Cards from './components/Cards';
import SignUp from './components/pages/SignUp';
import ForgetPassword from './components/pages/ForgetPassword';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/services' element={<Services />}></Route>
          <Route exact path='/products' element={<Products />}></Route>
          <Route exact path='/projects' element={<Projects />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/textForm' element={<TextForm/>}></Route>
          <Route exact path='/logIn' element={<LogIn></LogIn>}></Route>
          <Route exact path='/signUp' element={<SignUp></SignUp>}></Route>
          <Route exact path='/forgetPassword' element={<ForgetPassword></ForgetPassword>}></Route>
          <Route exact path='/Cards' element={<Cards></Cards>}></Route>
          <Route exact path='*' element={<Error />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
