import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import footerimg from "./logo2.png";

import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={3} sm={6} className="footer-logo">
            <img
              src={footerimg} // Replace with your logo path
              alt="Xstream Minds Logo"
              className="logo"
            />
            <p>Software company in Hyderabad, Telangana</p>
            <p>
              Address: <br />
              Sri Ganapati Towers, 402, NPU Rd, opposite The Forum Sujana Mall, Kukatpally Housing Board Colony, Hyderabad, Telangana 500072
            </p>
          </Col>
          <Col md={3} sm={6} className="footer-services">
            <h5>Services</h5>
            <ul>
              <li>App Development</li>
              <li>Full Stack Development</li>
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Cloud Services</li>
            </ul>
          </Col>
          <Col md={3} sm={6} className="footer-contact">
            <h5>Contact Us</h5>
            <p>Email:</p>
            <p>
              xstreamminds@gmail.com <br />
              xstreammindsofficial@gmail.com
            </p>
            <p>Phone: +91 9999999999</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </Col>
          <Col md={3} sm={6} className="footer-cta">
            <Button className="cta-button">Join our Team</Button>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col className="text-center">
            <p>&copy; 2024 Xstream Minds. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
