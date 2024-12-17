import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [menuActive, setMenuActive] = useState(false); // State to toggle mobile menu

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    setOpenSubDropdown(null); // Close sub-dropdown when switching
  };

  const toggleSubDropdown = (subDropdown) => {
    setOpenSubDropdown(openSubDropdown === subDropdown ? null : subDropdown);
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive); // Toggle mobile menu
    setOpenDropdown(null); // Close any open dropdowns
    setOpenSubDropdown(null); // Close any open sub-dropdowns
  };

  return (
    <nav className="navbar fixed-navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/images/logo.png" alt="Logo" className="logo" />
          </Link>
        </div>

        {/* Menu */}
        <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
          <li
            className={`menu-item dropdown ${openDropdown === 'who-we-are' ? 'open' : ''}`}
            onMouseEnter={() => !menuActive && toggleDropdown('who-we-are')}
            onMouseLeave={() => !menuActive && toggleDropdown(null)}
            onClick={() => menuActive && toggleDropdown('who-we-are')}
          >
            <span>Who We Are</span>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/about">About</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/careers">Careers</Link>
              </li>
            </ul>
          </li>

          <li
            className={`menu-item dropdown ${openDropdown === 'services' ? 'open' : ''}`}
            onMouseEnter={() => !menuActive && toggleDropdown('services')}
            onMouseLeave={() => !menuActive && toggleDropdown(null)}
            onClick={() => menuActive && toggleDropdown('services')}
          >
            <span>Services</span>
            <ul className="dropdown-menu">
              <li
                className={`dropdown-item ${openSubDropdown === 'confluent' ? 'open' : ''}`}
                onMouseEnter={() => !menuActive && toggleSubDropdown('confluent')}
                onMouseLeave={() => !menuActive && toggleSubDropdown(null)}
                onClick={() => menuActive && toggleSubDropdown('confluent')}
              >
                Confluent
                <ul className="sub-dropdown-menu">
                  <li className="sub-dropdown-item">
                    <Link to="/services/flink">Flink</Link>
                  </li>
                  <li className="sub-dropdown-item">
                    <Link to="/services/kafka">Apache Kafka</Link>
                  </li>
                  <li className="sub-dropdown-item">
                    <Link to="/services/kafka-cloud">Kafka Cloud</Link>
                  </li>
                </ul>
              </li>
              <li
                className={`dropdown-item ${openSubDropdown === 'mobile-dev' ? 'open' : ''}`}
                onMouseEnter={() => !menuActive && toggleSubDropdown('mobile-dev')}
                onMouseLeave={() => !menuActive && toggleSubDropdown(null)}
                onClick={() => menuActive && toggleSubDropdown('mobile-dev')}
              >
                Mobile Development
                <ul className="sub-dropdown-menu">
                  <li className="sub-dropdown-item">
                    <Link to="/services/ios">iOS</Link>
                  </li>
                  <li className="sub-dropdown-item">
                    <Link to="/services/android">Android</Link>
                  </li>
                  <li className="sub-dropdown-item">
                    <Link to="/services/cross-platform">Cross-Platform</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li
            className={`menu-item dropdown ${openDropdown === 'insights' ? 'open' : ''}`}
            onMouseEnter={() => !menuActive && toggleDropdown('insights')}
            onMouseLeave={() => !menuActive && toggleDropdown(null)}
            onClick={() => menuActive && toggleDropdown('insights')}
          >
            <span>Insights</span>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/case-studies">Case Studies</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/resources">Resources</Link>
              </li>
            </ul>
          </li>

          <li className="menu-item">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        <button className="navbar-cta">Get in Touch</button>

        {/* Toggler for mobile view */}
        <button
          className="navbar-toggler"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          &#9776; {/* Hamburger icon */}
        </button>
      </div>
    </nav>
  );
};
