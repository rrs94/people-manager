import React from 'react';
import Router from 'next/router';
import {
  Container,
  Logo,
  NavBar,
  NavItem,
} from './styled';

const Header = () => (
  <Container>
    <Logo>
      People Manager
    </Logo>
    <NavBar>
      <NavItem onClick={() => Router.push('/')}>
        Home
      </NavItem>
    </NavBar>
  </Container>
);

export default Header;
