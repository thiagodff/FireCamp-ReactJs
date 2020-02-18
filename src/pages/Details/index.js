import React, { useState } from 'react';
import { MdDateRange, MdLocationOn } from 'react-icons/md';
import PropTypes from 'prop-types';

import history from '~/services/history';

import { Container, Back, Edit } from './styles';

export default function Details({ location }) {
  const [activity] = useState(location.state);

  function handleBack() {
    history.push('/dashboard');
  }

  function handleEdit(act) {
    history.push({
      pathname: '/edit',
      state: act,
    });
  }

  return (
    <Container>
      <header>
        <strong>{activity.title}</strong>
        <div>
          <Back onClick={handleBack}>VOLTAR</Back>
          <Edit onClick={() => handleEdit(activity)}>EDITAR</Edit>
        </div>
      </header>

      <body>
        <img src={activity.banner.url} alt={activity.title} />
        <p>{activity.description}</p>
      </body>

      <footer>
        <MdDateRange size={22} />
        <p>{activity.dateFormatted}</p>
        <MdLocationOn size={22} />
        <p>{activity.location}</p>
      </footer>
    </Container>
  );
}

Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.any.isRequired,
  }).isRequired,
};
