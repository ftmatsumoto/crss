import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const navbarComponent = () => (
  <Navbar fixedTop="true">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">CrossFit Ki</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/horarios">
          <NavItem eventKey={1}>Horarios</NavItem>
        </LinkContainer>
        <LinkContainer to="/precos">
          <NavItem eventKey={2}>Preços</NavItem>
        </LinkContainer>
        <LinkContainer to="/equipe">
          <NavItem eventKey={3}>Equipe</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Login</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default navbarComponent;
