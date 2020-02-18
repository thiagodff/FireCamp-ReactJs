import React, { useEffect, useState } from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { isBefore, subHours } from 'date-fns';
import { toast } from 'react-toastify';

import ImageInput from '~/components/ImageInput';
import history from '~/services/history';
import api from '~/services/api';

import { Container } from './styles';

export default function Edit({ location }) {
  const [activity] = useState(location.state);

  async function handleSubmit(data) {
    console.tron.log(data);
    const { choseDate, time } = data;

    const [year, month, day] = choseDate.split('-');
    const [hour, minute] = time.split(':');

    const date = new Date(year, month - 1, day, hour, minute);

    if (isBefore(subHours(date, 1), new Date())) {
      toast.error(
        'A atividade tem que ser cadastrada com até 1 hora de antecedência'
      );
      return;
    }

    try {
      const { title, description, location, image_id: banner_id } = data;

      await api.post('instructor-activities', {
        title,
        description,
        location,
        date,
        banner_id,
      });

      toast.success('Atividade cadastrada com sucesso');
      history.push('/dashboard');
    } catch (err) {
      console.tron.log(err);
      toast.error('Falha no cadastro de nova atividade, verifique os dados');
    }
  }

  return (
    <Container>
      {console.tron.log(activity)}
      <Form initialData={activity} onSubmit={handleSubmit}>
        <ImageInput name="banner_id" />

        <Input name="title" placeholder="Titulo da atividade" />

        <Textarea name="description" placeholder="Descrição completa" />

        <p>Data, hora e localização da atividade</p>
        <div>
          <Input name="choseDate" type="date" />
          <Input name="time" type="time" />

          <Input id="location" name="location" placeholder="Localização" />
        </div>

        <button type="submit">Salvar atividade</button>
      </Form>
    </Container>
  );
}

Edit.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.any.isRequired,
  }).isRequired,
};
