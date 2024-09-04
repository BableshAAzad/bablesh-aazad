import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../../App';
import '../../App.css';
import Spinner from '../../components/spinner/Spinner';
import Home from "../navbar-pages/Home.js";
import Careers from '../footer/about-us/Careers.jsx';

// Lazy-loaded components
const HowItWorks = React.lazy(() => import('../../components/about-us/HowItWorks'));
const Error = React.lazy(() => import('../../components/Error'));
const Contact = React.lazy(() => import('../../components/footer/contact-us/Contact'));
const Support = React.lazy(() => import('../../components/footer/contact-us/Support'));
const VideoUpload = React.lazy(() => import('../../components/footer/videos/VideoUpload'));
const Products = React.lazy(() => import('../navbar-pages/Products.js'));
const Services = React.lazy(() => import('../navbar-pages/Services.js'));
const Dashboard = React.lazy(() => import('../user/login/Dashboard.js'));
const ForgetPassword = React.lazy(() => import('../user/ForgetPassword.js'));
const LogIn = React.lazy(() => import('../user/login/LogIn.js'));
const SignUp = React.lazy(() => import('../user/SignUp.js'));
const AgeCalculate = React.lazy(() => import('../projects/age-calculator/AgeCalculate'));
const AnalogWatch = React.lazy(() => import("../projects/analog-clock/AnalogWatch"));
const BasicCalculatorFirst = React.lazy(() => import('../projects/basic-calculator-first/BasicCalculatorFirst'));
const About = React.lazy(() => import("../projects/text-editor/About"));
const TextEditor = React.lazy(() => import('../projects/text-editor/TextEditor'));
const DotPuzzleGame = React.lazy(() => import('../projects/puzzle-game/DotPuzzleGame.jsx'));

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />}>

                {/* Navbar Pages */}
                <Route path='' element={
                    <Suspense fallback={<Spinner />}>
                        <Home />
                    </Suspense>
                } />
                <Route path='services' element={
                    <Suspense fallback={<Spinner />}>
                        <Services heading='There 3 Type of services providing' />
                    </Suspense>
                } />
                <Route path='products' element={
                    <Suspense fallback={<Spinner />}>
                        <Products heading='Templates: ' />
                    </Suspense>
                } />

                {/* Login Pages */}
                <Route path='logIn' element={
                    <Suspense fallback={<Spinner />}>
                        <LogIn heading='Login' />
                    </Suspense>
                } />
                <Route path='sign-up' element={
                    <Suspense fallback={<Spinner />}>
                        <SignUp heading='SignUp' />
                    </Suspense>
                } />
                <Route path='forget-password' element={
                    <Suspense fallback={<Spinner />}>
                        <ForgetPassword heading='Forget Password' />
                    </Suspense>
                } />
                <Route path="dashboard" element={
                    <Suspense fallback={<Spinner />}>
                        <Dashboard />
                    </Suspense>
                } />

                {/* Projects */}
                <Route path='projects/text-editor' element={
                    <Suspense fallback={<Spinner />}>
                        <TextEditor heading="Try Text Editor- Word counter, Charecter Counter, Remove Extra Spaces etc." />
                    </Suspense>
                } />

                <Route path='projects/text-editor/about' element={
                    <Suspense fallback={<Spinner />}>
                        <About />
                    </Suspense>
                } />
                <Route path="projects/age-calculate" element={
                    <Suspense fallback={<Spinner />}>
                        <AgeCalculate />
                    </Suspense>
                } />
                <Route path="projects/analog-clock" element={
                    <Suspense fallback={<Spinner />}>
                        <AnalogWatch />
                    </Suspense>
                } />
                <Route path="projects/basic-calculator-first" element={
                    <Suspense fallback={<Spinner />}>
                        <BasicCalculatorFirst />
                    </Suspense>
                } />
                <Route path='projects/puzzle-game' element={
                    <Suspense fallback={<Spinner />}>
                        <DotPuzzleGame />
                    </Suspense>
                } />
                <Route path='how-it-works' element={
                    <Suspense fallback={<Spinner />}>
                        <HowItWorks />
                    </Suspense>
                } />
                {/* Footer About us pages */}
                <Route path='careers' element={
                    <Suspense fallback={<Spinner />}>
                        <Careers />
                    </Suspense>
                } />

                {/* Footer Contact us pages */}
                <Route path='contact' element={
                    <Suspense fallback={<Spinner />}>
                        <Contact heading="Contact us for any Query" />
                    </Suspense>
                } />
                <Route path='support' element={
                    <Suspense fallback={<Spinner />}>
                        <Support />
                    </Suspense>
                } />

                {/* Footer Video pages */}
                <Route path='video-upload' element={
                    <Suspense fallback={<Spinner />}>
                        <VideoUpload />
                    </Suspense>
                } />

                {/* For Error Page */}
                <Route path='*' element={
                    <Suspense fallback={<Spinner />}>
                        <Error />
                    </Suspense>
                } />
            </Route>
        </Routes>
    );
}
export default AllRoutes
