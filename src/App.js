import React, { Suspense } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Spinner from './components/spinner/Spinner';

// Lazy-loaded components
const HowItWorks = React.lazy(() => import('./components/about-us/HowItWorks'));
const Error = React.lazy(() => import('./components/Error'));
const Contact = React.lazy(() => import('./components/footer/contact-us/Contact'));
const Support = React.lazy(() => import('./components/footer/contact-us/Support'));
const VideoUpload = React.lazy(() => import('./components/footer/videos/VideoUpload'));
const Products = React.lazy(() => import('./components/home/Products'));
const Services = React.lazy(() => import('./components/home/Services'));
const Dashboard = React.lazy(() => import('./components/login/Dashboard'));
const ForgetPassword = React.lazy(() => import('./components/login/ForgetPassword'));
const LogIn = React.lazy(() => import('./components/login/LogIn'));
const SignUp = React.lazy(() => import('./components/login/SignUp'));
const BableshAAzad = React.lazy(() => import('./components/navbar/home-page/BableshAAzad'));
const HeroSection = React.lazy(() => import('./components/navbar/home-page/HeroSection'));
const YoutubeData = React.lazy(() => import('./components/navbar/home-page/YoutubeData'));
const Cards = React.lazy(() => import('./components/navbar/product-page/Cards'));
const Cards2 = React.lazy(() => import('./components/navbar/product-page/Cards2'));
const AgeCalculate = React.lazy(() => import('./projects/age-calculator/AgeCalculate'));
const AnalogWatch = React.lazy(() => import("./projects/analog-clock/AnalogWatch"));
const BasicCalculatorFirst = React.lazy(() => import('./projects/basic-calculator-first/BasicCalculatorFirst'));
const ProjectComponent = React.lazy(() => import('./projects/ProjectComponent'));
const About = React.lazy(() => import("./projects/text-editor/About"));
const TextEditor = React.lazy(() => import('./projects/text-editor/TextEditor'));
const DotPuzzel = React.lazy(() => import('./projects/puzzel-game/DotPuzzel'));

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

          <Route
            path='/heroSection'
            element={
              <Suspense fallback={<Spinner />}>
                <HeroSection />
              </Suspense>
            }
          />

          <Route
            path='/bableshAAzad'
            element={
              <Suspense fallback={<Spinner />}>
                <BableshAAzad />
              </Suspense>
            }
          />

          <Route
            path='/youtubeData'
            element={
              <Suspense fallback={<Spinner />}>
                <YoutubeData />
              </Suspense>
            }
          />

          {/* Services page */}
          <Route
            path='/services'
            element={
              <Suspense fallback={<Spinner />}>
                <Services heading='There 3 Type of services providing' />
              </Suspense>
            }
          />

          {/* Product page */}
          <Route
            path='/products'
            element={
              <Suspense fallback={<Spinner />}>
                <Products heading='Templates: ' />
              </Suspense>
            }
          />

          <Route
            path='/cards'
            element={
              <Suspense fallback={<Spinner />}>
                <Cards />
              </Suspense>
            }
          />

          <Route
            path='/cards2'
            element={
              <Suspense fallback={<Spinner />}>
                <Cards2 />
              </Suspense>
            }
          />

          {/* Login Pages */}
          <Route
            path='/logIn'
            element={
              <Suspense fallback={<Spinner />}>
                <LogIn heading='Login' />
              </Suspense>
            }
          />

          <Route
            path='/signUp'
            element={
              <Suspense fallback={<Spinner />}>
                <SignUp heading='SignUp' />
              </Suspense>
            }
          />

          <Route
            path='/forgetPassword'
            element={
              <Suspense fallback={<Spinner />}>
                <ForgetPassword heading='Forget Password' />
              </Suspense>
            }
          />

          <Route
            path="/dashboard"
            element={
              isLogged ?
                <Suspense fallback={<Spinner />}>
                  <Dashboard />
                </Suspense>
                :
                <Navigate to="/logIn" replace state={data} />
            }
          />

          {/* Projects */}
          <Route
            path='/projectComponent'
            element={
              <Suspense fallback={<Spinner />}>
                <ProjectComponent />
              </Suspense>
            }
          >
            <Route
              path='textEditor'
              element={
                <Suspense fallback={<Spinner />}>
                  <TextEditor heading="Try Text Editor- Word counter, Charecter Counter, Remove Extra Spaces etc." />
                </Suspense>
              }
            >
              <Route
                path='about'
                element={
                  <Suspense fallback={<Spinner />}>
                    <About />
                  </Suspense>
                }
              />
            </Route>

            <Route
              path="ageCalculate"
              element={
                <Suspense fallback={<Spinner />}>
                  <AgeCalculate />
                </Suspense>
              }
            />

            <Route
              path="analogClock"
              element={
                <Suspense fallback={<Spinner />}>
                  <AnalogWatch />
                </Suspense>
              }
            />

            <Route
              path="basicCalculatorFirst"
              element={
                <Suspense fallback={<Spinner />}>
                  <BasicCalculatorFirst />
                </Suspense>
              }
            />

            <Route
              path='puzzel-game'
              element={
                <Suspense fallback={<Spinner />}>
                  <DotPuzzel />
                </Suspense>
              }
            />
          </Route>

          <Route
            path='/howItWorks'
            element={
              <Suspense fallback={<Spinner />}>
                <HowItWorks />
              </Suspense>
            }
          />

          {/* Footer Contact us pages */}
          <Route
            path='/contact'
            element={
              <Suspense fallback={<Spinner />}>
                <Contact heading="Contact us for any Query" />
              </Suspense>
            }
          />

          <Route
            path='/support'
            element={
              <Suspense fallback={<Spinner />}>
                <Support />
              </Suspense>
            }
          />

          {/* Footer Video pages */}
          <Route
            path='/videoUpload'
            element={
              <Suspense fallback={<Spinner />}>
                <VideoUpload />
              </Suspense>
            }
          />

          {/* For Error Page */}
          <Route
            path='*'
            element={
              <Suspense fallback={<Spinner />}>
                <Error />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
