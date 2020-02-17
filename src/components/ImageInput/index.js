import React, { useRef, useState, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdImage } from 'react-icons/md';

import api from '~/services/api';

import { Container } from './styles';

export default function ImageInput() {
  const { defaultValue, registerField } = useField('banner'); // initialData do form

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    registerField({
      name: 'banner_id',
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
      <label htmlFor="banner">
        <div>
          <img src={preview || ''} alt="" />
          {preview ? null : <MdImage />}
          <input
            type="file"
            id="banner"
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
