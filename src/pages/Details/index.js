import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Details({ location }) {
  return <Container>{console.tron.log(location)}</Container>;
}

Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.any.isRequired,
  }).isRequired,
};
