import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../../App';
import '../../App.css';
import Spinner from '../../components/spinner/Spinner';
import Home from "../nabar-pages/Home";

// Lazy-loaded components
const HowItWorks = React.lazy(() => import('../../components/about-us/HowItWorks'));
const Error = React.lazy(() => import('../../components/Error'));
const Contact = React.lazy(() => import('../../components/footer/contact-us/Contact'));
const Support = React.lazy(() => import('../../components/footer/contact-us/Support'));
const VideoUpload = React.lazy(() => import('../../components/footer/videos/VideoUpload'));
const Products = React.lazy(() => import('../nabar-pages/Products'));
const Services = React.lazy(() => import('../nabar-pages/Services'));
const Dashboard = React.lazy(() => import('../../components/login/Dashboard'));
const ForgetPassword = React.lazy(() => import('../../components/login/ForgetPassword'));
const LogIn = React.lazy(() => import('../../components/login/LogIn'));
const SignUp = React.lazy(() => import('../../components/login/SignUp'));
const AgeCalculate = React.lazy(() => import('../../projects/age-calculator/AgeCalculate'));
const AnalogWatch = React.lazy(() => import("../../projects/analog-clock/AnalogWatch"));
const BasicCalculatorFirst = React.lazy(() => import('../../projects/basic-calculator-first/BasicCalculatorFirst'));
const About = React.lazy(() => import("../../projects/text-editor/About"));
const TextEditor = React.lazy(() => import('../../projects/text-editor/TextEditor'));
const DotPuzzleGame = React.lazy(() => import('../../projects/puzzle-game/DotPuzzleGame'));


function AllRoutes() {
    return (
        <Suspense fallback={<Spinner />}>
            <Routes>
                <Route path="/" element={<App />}>

                    {/* Navbar Pages */}
                    <Route path='' element={<Home />} />
                    <Route path='services' element={<Services heading='There 3 Type of services providing' />} />
                    <Route path='products' element={<Products heading='Templates: ' />} />

                    {/* Login Pages */}
                    <Route path='logIn' element={<LogIn heading='Login' />} />
                    <Route path='signUp' element={<SignUp heading='SignUp' />} />
                    <Route path='forgetPassword' element={<ForgetPassword heading='Forget Password' />} />
                    <Route path="dashboard" element={<Dashboard />} />

                    {/* Projects */}
                    <Route path='projects/textEditor' element={<TextEditor
                        heading="Try Text Editor- Word counter, Charecter Counter, Remove Extra Spaces etc." />} />
                    <Route path='projects/about' element={<About />} />
                    <Route path="projects/ageCalculate" element={<AgeCalculate />} />
                    <Route path="projects/analogClock" element={<AnalogWatch />} />
                    <Route path="projects/basicCalculatorFirst" element={<BasicCalculatorFirst />} />
                    <Route path='projects/puzzle-game' element={<DotPuzzleGame />} />
                    <Route path='projects/howItWorks' element={<HowItWorks />} />

                    {/* Footer Contact us pages */}
                    <Route path='contact' element={<Contact heading="Contact us for any Query" />} />
                    <Route path='support' element={<Support />} />

                    {/* Footer Video pages */}
                    <Route path='videoUpload' element={<VideoUpload />} />

                    {/* For Error Page */}
                    <Route path='*' element={<Error />} />
                </Route>
            </Routes>
        </Suspense>
    );
}
export default AllRoutes
