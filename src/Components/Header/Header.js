import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './Header.scss';
import Logo from '../../Assets/img/logo-holaluz.svg';

const Header = () => {
  return (
    <Navbar className='nav_component' variant="dark" >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="200"
            height="100"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );

}

export default Header;