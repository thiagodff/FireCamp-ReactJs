import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 700px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 45px;
      padding: 0 15px;
      margin: 0 0 20px 0;
      font-size: 16px;
    }

    hr {
      border: 0;
      height: 1px;
      background: #bbbb;
      margin: 10px 0 20px;
    }

    button {
      margin-top: -5px 0 0 0;
      height: 44px;
      background: #71c285;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      border: 0;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#71c285')};
      }
    }
  }
`;
