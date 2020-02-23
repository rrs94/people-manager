import React from 'react';
import PropTypes from 'prop-types';
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

Layout.propTypes = {
  children: PropTypes.shape([]),
};

Layout.defaultProps = {
  children: [],
};

export default Layout;
