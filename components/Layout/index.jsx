import React from 'react';
import Header from '../Header';
import {
  Container,
} from './styled';

const Layout = ({ children }) => (
  <Container>
    <Header />
    {
      children
    }
  </Container>
);

export default Layout;
