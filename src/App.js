import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import HomeApp from './Components/Home/Home';
import AboutPage from './Components/About/About';
// import { Footer } from './Components/Home/Footer/Footer';
// import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';

import './App.css'; // Make sure to import the CSS for the fixed navbar
import Policy from './Components/PrivacyPolicy/Policy';

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on route change
  }, [location]); // Depend on location to trigger scroll on route change

  return null;
}

function App() {
  return (
    <Router>
       <ScrollToTop /> {/* Add the ScrollToTop component here */}
      
      {/* Fixed Navbar */}
      {/* <Navbar className="fixed-navbar">
        <Nav>
          <Nav.Link as={NavLink} to="/" exact>
            Home
          </Nav.Link>
          <Nav.Link 
            as={NavLink} 
            to="/about" 
            activeClassName="active-link"
          >
            Who We Are
          </Nav.Link>
          <Nav.Link 
            as={NavLink} 
            to="/privacypolicy" 
            activeClassName="active-link"
          >
            policy
          </Nav.Link>
        </Nav>
      </Navbar> */}

      <div className="content">
        <Routes>
          <Route path="/" element={<HomeApp />} />
          <Route path="/about" element={<AboutPage />} />
           <Route path="/privacy-policy" element={<Policy />} /> 
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
