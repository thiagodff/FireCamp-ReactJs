import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #4fba6f;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  text-align: center;

  div {
    background: #fff;
    border-radius: 4px;
    padding: 30px;
  }

  img {
    height: 100px;
    width: 100px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    strong {
      display: flex;
      font-size: 14px;
      color: #444;
      font-weight: bold;
      margin-bottom: 8px;
      align-items: flex-start;
    }

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 45px;
      width: 300px;
      padding: 0 15px;
      margin: 0 0 20px 0;
      font-size: 16px;

      &::placeholder {
      }
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
        background: ${darken(0.03, '#71c285')};
      }
    }

    a {
      color: #444;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
