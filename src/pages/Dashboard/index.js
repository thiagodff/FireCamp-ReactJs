import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Menu, ActivitiesList, Activity } from './styles';

export default function Dashboard() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function getActivities() {
      const response = await api.get('instructor-activities');

      const formatResponse = response.data.map(act => {
        return {
          ...act,
          dateFormatted: format(
            parseISO(act.date),
            "d 'de' MMMM', às' hh:mm'h'",
            {
              locale: pt,
            }
          ),
          banner: {
            ...act.banner,
            banner_id: act.banner_id,
          },
        };
      });

      setActivities(formatResponse);
    }

    getActivities();
  }, []);

  function handleActivity(act) {
    history.push({
      pathname: '/details',
      state: act,
    });
  }

  return (
    <Container>
      <Menu>
        <strong>Minhas atividades</strong>
        <Link to="/new">NOVA ATIVIDADE</Link>
      </Menu>

      <ActivitiesList>
        {activities.map(activity => (
          <Activity onClick={() => handleActivity(activity)}>
            <div>
              <strong>{activity.title}</strong>
              <p>{activity.dateFormatted}</p>
            </div>
          </Activity>
        ))}
      </ActivitiesList>
    </Container>
  );
}
