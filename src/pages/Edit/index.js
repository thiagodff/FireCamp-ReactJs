import React, { useEffect, useState } from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { isBefore, subHours } from 'date-fns';
import { toast } from 'react-toastify';

import ImageInput from '~/components/ImageInput';
import history from '~/services/history';
import api from '~/services/api';

import { Container } from './styles';

export default function Edit({ activity }) {
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

  // useEffect(() => {
  //   async function findActivity() {
  //     const { id } = match.params;

  //     const response = await api.get('instructor-activities');

  //     const editActivity = await response.data.find(
  //       resp => resp.id === Number(id)
  //     );

  //     setActivity({
  //       ...editActivity,
  //       banner: {
  //         ...editActivity.banner,
  //         id: editActivity.banner_id,
  //       },
  //     });
  //   }

  //   findActivity();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <Container>
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
