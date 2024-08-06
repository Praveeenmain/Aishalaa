import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

const MyNavbar = () => {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white navbar-brand-custom d-flex align-items-center">
         
          Aishaala
        </Navbar.Brand>
        <Nav.Link as={Link} to="/help" className="text-white d-flex align-items-center small-btn-custom " style={{ fontSize: '20px' }}>
              <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25D366', fontSize: '21px', marginRight: '8px' }} />
              Help
            </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle-custom" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about" className="text-white nav-link-custom">About</Nav.Link>
            <Nav.Link as={Link} to="/students" className="text-white nav-link-custom">Students</Nav.Link>
            <Nav.Link as={Link} to="/Teachers" className="text-white nav-link-custom">Teachers</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="/help" className="text-white d-flex align-items-center btn-custom " style={{ fontSize: '20px' }}>
              <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25D366', fontSize: '21px', marginRight: '8px' }} />
              Help
            </Nav.Link>
            <button className='signup-button' as={Link} to="/signup">Sign Up</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
