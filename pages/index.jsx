import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import PeopleList from '../components/PeopleList';

const Home = ({ data }) => (
  <PeopleList data={data.data} />
);

Home.getInitialProps = async () => {
  const res = await fetch(`${process.env.API_ENDPOINT}/people`);
  const json = await res.json();
  return { data: json };
};

Home.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.shape([]),
  }),
};

Home.defaultProps = {
  data: {},
};

export default Home;
