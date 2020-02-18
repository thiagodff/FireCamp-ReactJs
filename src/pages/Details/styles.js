import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 700px;
  margin: 50px auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 32px;
      color: #444;
    }
  }

  body {
    margin-top: 20px;

    img {
      height: 180px;
      width: 700px;
      border-radius: 4px;
      border: none;
      background: #ccc;
      display: block;
    }

    p {
      margin-top: 15px;
      width: 100%;
      font-size: 18px;
    }
  }

  footer {
    display: flex;
    flex-direction: row;
    color: #666;
    font-size: 16px;
    align-items: flex-end;
    margin-top: 15px;

    & > p {
      margin-left: 5px;
      margin-right: 20px;
    }
  }
`;

export const Back = styled.button`
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 4px;
  color: #fff;
  background: #bbb;
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, '#bbb')};
  }
`;

export const Edit = styled.button`
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 4px;
  color: #fff;
  background: #4fba6f;
  margin-left: 20px;
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, '#4fba6f')};
  }
`;
