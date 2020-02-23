import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Element,
  Info,
} from './styled';

const PeopleList = ({ data }) => {
  const elements = data.map((person) => (
    <Element>
      <Info>
        <b>
          {
            person.display_name
          }
        </b>
      </Info>
      <Info>
        {
          person.email_address
        }
      </Info>
      <Info>
        {
          person.title
        }
      </Info>
    </Element>
  ));

  return (
    <Container>
      {
        elements
      }
    </Container>
  );
};

PeopleList.propTypes = {
  data: PropTypes.shape([]),
};

PeopleList.defaultProps = {
  data: [],
};

export default PeopleList;
