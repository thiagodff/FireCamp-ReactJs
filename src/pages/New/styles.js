import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 700px;
  margin: 50px auto 0 auto;

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

    p {
      color: #666;
      font-size: 16px;
    }

    div > input {
      padding: 0.5rem 1rem;
      margin-top: 10px;

      & + input {
        margin-left: 30px;
      }

      &#location {
        width: 332px;
      }
    }

    textarea {
      border: 1px solid #ddd;
      font-size: 16px;
      height: 80px;
      margin-bottom: 20px;
      resize: none;
      padding: 15px;
      font-family: sans-serif;
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
