import React from 'react';
import Navbar from './../src/components/NavbarPages/Navbar';
import './App.css';
import Home from './../src/components/pages/Home';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Services from './../src/components/pages/Services';
import Products from './../src/components/pages/Products';
import Error from './components/Error';
import Projects from './../src/Projects/Projects';
import AgeCalculate from './Projects/AgeCalculator/AgeCalculate';
import About from './Projects/TextEditor/About';
import TextForm from './Projects/TextEditor/TextForm';
import Cards from './components/NavbarPages/ProductsPages/Cards';
import LogIn from './../src/components/LoginPages/LogIn';
import SignUp from './../src/components/LoginPages/SignUp';
import ForgetPassword from './../src/components/LoginPages/ForgetPassword';
import Footer from './../src/components/FooterPages/Footer';
import BableshAAzad from './../../bablesh-aazad/src/components/NavbarPages/HomePages/BableshAAzad';
import Contact from './components/FooterPages/ContactUs/Contact';
import HeroSection from './components/NavbarPages/HomePages/HeroSection';
import VideoUpload from './components/FooterPages/Video/VideoUpload';
import Dashboard from './components/LoginPages/Dashboard';
import YoutubeData from './components/NavbarPages/HomePages/YoutubeData';
import HowItWorks from './components/aboutUs/HowItWorks';
import Cards2 from './components/NavbarPages/ProductsPages/Cards2';
import Support from './components/FooterPages/ContactUs/Support';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App(props) {
  let isLogged = false;
  let data = {
    "st": "User not loged In"
  }
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          {/* Navbar Pages */}
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/heroSection' element={<HeroSection></HeroSection>}></Route>
          <Route exact path='/bableshAAzad' element={<BableshAAzad></BableshAAzad>}></Route>
          <Route exact path='/youtubeData' element={<YoutubeData></YoutubeData>}></Route>
          {/* Services page */}
          <Route exact path='/services' element={<Services heading='There 3 Type of services providing' />}></Route>
          {/* Product page */}
          <Route exact path='/products' element={<Products heading='Templates: ' />}></Route>
          <Route exact path='/cards' element={<Cards></Cards>}></Route>
          <Route exact path="/cards2" element={<Cards2></Cards2>}></Route>
          {/* Login Pages */}
          <Route exact path='/logIn' element={<LogIn heading='Login'></LogIn>}></Route>
          <Route exact path='/signUp' element={<SignUp heading='SignUp'></SignUp>}></Route>
          <Route exact path='/forgetPassword' element={<ForgetPassword heading='Forget Password'></ForgetPassword>}></Route>
          <Route path="/dashboard" element={isLogged ? <Dashboard /> : <Navigate to="/logIn" replace state={data} />}></Route>
          {/* Project Text Editor Data */}
          <Route exact path='/projects' element={<Projects heading="Try Text Editor- Word counter, Charecter Counter, Remove Extra Spaces etc." />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/textForm' element={<TextForm />}></Route>

          <Route exact path="/ageCalulate" element={<AgeCalculate/>}></Route>
          {/* 1 Footer About us pages */}
          <Route exact path='/howItWorks' element={<HowItWorks></HowItWorks>}></Route>
          {/* 2 Footer Contact us pages */}
          <Route exact path='/contact' element={<Contact heading="Contact us for any Query"></Contact>}></Route>
          <Route exact path='/support' element={<Support></Support>}></Route>
          {/* 3 Footer Video pages */}
          <Route exact path='/videoUpload' element={<VideoUpload></VideoUpload>}></Route>

          {/* For Error Page */}
          <Route exact path='*' element={<Error />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
