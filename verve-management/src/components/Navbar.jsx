// ✅ NavigationBar.jsx
import React from 'react';
import Logo from '../assets/images/logo.png';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';

const NavigationBar = ({ onConferencesHover, onBespokeHover, onAddEventClick }) => {
  return (
    <Navbar expand="lg" className="bg-light shadow-sm px-4">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={Logo} alt="Verve Logo" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>

            <Nav.Link
              onMouseEnter={onConferencesHover}
              onClick={onConferencesHover}
              className="d-flex align-items-center gap-1"
              style={{ cursor: 'pointer' }}
            >
              Conferences <FaChevronDown size={12} />
            </Nav.Link>

            <Nav.Link
              onMouseEnter={onBespokeHover}
              onClick={onBespokeHover}
              className="d-flex align-items-center gap-1"
              style={{ cursor: 'pointer' }}
            >
              Bespoke Engagements <FaChevronDown size={12} />
            </Nav.Link>

            <Nav.Link href="#">Masterclass</Nav.Link>
            <Nav.Link href="#">Partners</Nav.Link>
            <Nav.Link href="#">Careers</Nav.Link>

            <button
              className="btn btn-danger px-4 btn-add-event"
              onClick={onAddEventClick}
            >
              Add Event
            </button>
            <Button variant="danger" className="ms-3">Contact</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
