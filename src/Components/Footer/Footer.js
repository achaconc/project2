import React from 'react';
import {Navbar, Container} from 'react-bootstrap';
import Logo from '../../Assets/img/logo-holaluz.svg';
import './Footer.scss'

const Footer = () => {
    return (
    <footer className='footer_component'>
        <Navbar bg="light" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand className='navbar-brand_component'>
      <img
        src={Logo}
        width="200"
        height="100"
        className="d-inline-block align-top"
        alt="holaluz logo"
      />
    </Navbar.Brand>
  </Container>
  </Navbar>
  </footer>
    );
}

export default Footer;