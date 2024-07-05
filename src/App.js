import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import AnalogWatch from "../src/Projects/AnalogClock/AnalogWatch";
import About from "../src/Projects/TextEditor/About";
import BableshAAzad from './../../bablesh-aazad/src/components/NavbarPages/HomePages/BableshAAzad';
import Footer from './../src/components/FooterPages/Footer';
import ForgetPassword from './../src/components/LoginPages/ForgetPassword';
import LogIn from './../src/components/LoginPages/LogIn';
import SignUp from './../src/components/LoginPages/SignUp';
import Navbar from './../src/components/NavbarPages/Navbar';
import Home from './../src/components/pages/Home';
import Products from './../src/components/pages/Products';
import Services from './../src/components/pages/Services';
import './App.css';
import AgeCalculate from './Projects/AgeCalculator/AgeCalculate';
import ProjectComponent from './Projects/ProjectComponent';
import TextEditor from './Projects/TextEditor/TextEditor';
import Error from './components/Error';
import Contact from './components/FooterPages/ContactUs/Contact';
import Support from './components/FooterPages/ContactUs/Support';
import VideoUpload from './components/FooterPages/Video/VideoUpload';
import Dashboard from './components/LoginPages/Dashboard';
import HeroSection from './components/NavbarPages/HomePages/HeroSection';
import YoutubeData from './components/NavbarPages/HomePages/YoutubeData';
import Cards from './components/NavbarPages/ProductsPages/Cards';
import Cards2 from './components/NavbarPages/ProductsPages/Cards2';
import HowItWorks from './components/aboutUs/HowItWorks';
import BasicCalculatorFirst from './Projects/BasicCalculatorFirst/BasicCalculatorFirst';

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
          <Route path='/' element={<Home />} />
          <Route path='/heroSection' element={<HeroSection />} />
          <Route path='/bableshAAzad' element={<BableshAAzad />} />
          <Route path='/youtubeData' element={<YoutubeData />} />
          {/* Services page */}
          <Route path='/services' element={<Services heading='There 3 Type of services providing' />} />
          
          {/* Product page */}
          <Route path='/products' element={<Products heading='Templates: ' />} />
          <Route path='/cards' element={<Cards />} />
          <Route path="/cards2" element={<Cards2 />} />
          
          {/* Login Pages */}
          <Route path='/logIn' element={<LogIn heading='Login' />} />
          <Route path='/signUp' element={<SignUp heading='SignUp' />} />
          <Route path='/forgetPassword' element={<ForgetPassword heading='Forget Password' />} />
          <Route path="/dashboard" element={isLogged ? <Dashboard /> : <Navigate to="/logIn" replace state={data} />} />
          
          {/*^ Projects */}
          <Route path='/projectComponent' element={<ProjectComponent />}>
            <Route path='textEditor' element={<TextEditor heading="Try Text Editor- Word counter, Charecter Counter, Remove Extra Spaces etc." />}>
              <Route path='about' element={<About />} />
            </Route>
            <Route path="ageCalculate" element={<AgeCalculate />} />
            <Route path="analogClock" element={<AnalogWatch />} />
            <Route path="basicCalculatorFirst" element={<BasicCalculatorFirst/>} />
          </Route>

          <Route path='/howItWorks' element={<HowItWorks></HowItWorks>} />
          
          {/* 2 Footer Contact us pages */}
          <Route path='/contact' element={<Contact heading="Contact us for any Query" />} />
          <Route path='/support' element={<Support />} />
         
          {/* 3 Footer Video pages */}
          <Route path='/videoUpload' element={<VideoUpload />} />

          {/* For Error Page */}
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
