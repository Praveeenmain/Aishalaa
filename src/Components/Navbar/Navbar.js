import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CLogo from '../../assets/MainLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

const MyNavbar = () => {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white navbar-brand-custom d-flex align-items-center">
          <img
            src={CLogo}
            alt="Aishaala Logo"
            className="clogo-custom"
            style={{ width: '40px', marginRight: '10px', borderRadius: '10px' }} // Adjust size and spacing as needed
          />
          Aishaala
        </Navbar.Brand>
        <Button variant="outline-light" className="small-btn-custom" as={Link} to="/signup">Sign Up</Button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle-custom" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about" className="text-white nav-link-custom">About</Nav.Link>
            <Nav.Link as={Link} to="/students" className="text-white nav-link-custom">Students</Nav.Link>
            <Nav.Link as={Link} to="/Teachers" className="text-white nav-link-custom">Teachers</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/help" className="text-white d-flex align-items-center" style={{ fontSize: '20px' }}>
              <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25D366', fontSize: '21px', marginRight: '8px' }} />
              Help
            </Nav.Link>
            <Button variant="outline-light" className="btn-custom" as={Link} to="/signup">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
