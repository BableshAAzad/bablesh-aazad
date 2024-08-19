import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { useLocation, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App(props) {
  return <>
    <>
      <Navbar />
      <ScrollToTop />

      <Outlet />

      <Footer />
    </>

  </>
}

export default App;
