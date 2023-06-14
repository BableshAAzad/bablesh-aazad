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
import ProductsScroll from './components/pages/ProductsScroll';
import Footer from './components/Footer';
import BableshAAzad from './components/BableshAAzad';
import Contact from './components/FooterPages/Contact';
import HeroSection from './components/HeroSection';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/services' element={<Services heading='There 3 Type of services providing' />}></Route>
          <Route exact path='/products' element={<Products heading='Templates: ' />}></Route>
          <Route exact path='/projects' element={<Projects heading="Try Text Editor- Word counter, Charecter Counter, Remove Extra Spaces etc."/>}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/textForm' element={<TextForm/>}></Route>
          <Route exact path='/logIn' element={<LogIn heading='Login'></LogIn>}></Route>
          <Route exact path='/signUp' element={<SignUp heading='SignUp'></SignUp>}></Route>
          <Route exact path='/forgetPassword' element={<ForgetPassword heading='Forget Password'></ForgetPassword>}></Route>
          <Route exact path='/cards' element={<Cards></Cards>}></Route>
          <Route exact path='/productsScroll' element={<ProductsScroll></ProductsScroll>}></Route>
          <Route exact path='/bableshAAzad' element={<BableshAAzad></BableshAAzad>}></Route>
          <Route exact path='/contact' element={<Contact heading="Contact us for any Query"></Contact>}></Route>
          <Route exact path='/heroSection' element={<HeroSection></HeroSection>}></Route>
          <Route exact path='*' element={<Error />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
