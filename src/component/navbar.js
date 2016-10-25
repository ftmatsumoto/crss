import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { Authenticated, NotAuthenticated, LogoutLink, LoginLink } from 'react-stormpath';

const navbarComponent = () => (
  <Navbar fixedTop>
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
      {/*<Nav pullRight>
        <Authenticated>
          <LogoutLink>Logout</LogoutLink>
        </Authenticated>
        <NotAuthenticated>
          <a href="/login">Login</a>
        </NotAuthenticated>
        <NotAuthenticated>
          <a href="/register">Register</a>
        </NotAuthenticated>
      </Nav>*/}
    </Navbar.Collapse>
  </Navbar>
);

export default navbarComponent;
