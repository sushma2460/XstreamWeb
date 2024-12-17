import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import footerimg from "./logo2.png";
import { Link } from 'react-router-dom';

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
  
            <p>
              Location: <br />
              Sri Ganapati Towers, 402, NPU Rd, opposite The Forum Sujana Mall, Kukatpally Housing Board Colony, Hyderabad, Telangana 500072
            </p>
          </Col>
          <Col md={3} sm={6} className="footer-services">
            <h5>Services</h5>
            <ul>
              <li>Confluent Cloud</li>
              <li>Apache kafka</li>
              <li>Apache Flink</li>
              <li>Full Stack Development</li>
              
            </ul>
          </Col>
          <Col md={3} sm={6} className="footer-contact">
            <h5>Contact Us</h5>
            
            <p>
            <i class="bi bi-envelope m-2"></i> 
            info@xstreaminds.com <br />
             
            </p>
            
            <p> <i class="bi bi-telephone m-2"></i>  : +1 513 342 1033
            </p>
            <div className="social-icons">
              
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
              
              <i class="bi bi-twitter-x m-2"></i>
              </a>
              
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </Col>
          <Col md={3} sm={6} className="footer-cta">
            <Button className="cta-button">Join our Team</Button>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col>
            <p><Link to="/privacy-policy">Privacy Policy</Link> - teams of Services - Web Accessibility</p>
            <p>Copyright &copy; 2024 Xstream Minds Pvt Ltd. All rights Reserved by Xstream Minds Pvt Ltd.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
