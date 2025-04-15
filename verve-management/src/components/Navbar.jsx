import React from 'react';
import Logo from '../assets/images/logo.png';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavigationBar = ({ onConferencesClick, onBespokeClick, onAddEventClick }) => {
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

            <Nav.Link onClick={onConferencesClick}>Conferences</Nav.Link>
            <Nav.Link onClick={onBespokeClick}>Bespoke Engagements</Nav.Link>

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
