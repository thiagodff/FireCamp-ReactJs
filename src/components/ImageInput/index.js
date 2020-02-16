import React, { useRef, useState, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdImage } from 'react-icons/md';

import api from '~/services/api';

import { Container } from './styles';

export default function ImageInput() {
  const { registerField } = useField('image');

  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  const ref = useRef();

  useEffect(() => {
    registerField({
      name: 'image_id',
      ref: ref.current,
      path: 'dataset.file',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="image">
        <div>
          <img src={preview || ''} alt="" />
          {preview ? null : <MdImage />}
          <input
            type="file"
            id="image"
            accept="image/*"
            data-file={file}
            onChange={handleChange}
            ref={ref}
          />
        </div>
      </label>
    </Container>
  );
}
