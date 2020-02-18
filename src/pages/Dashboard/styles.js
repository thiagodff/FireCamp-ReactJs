import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 700px;
  margin: 50px auto;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    color: #444;
    font-weight: bold;
    font-size: 32px;
  }

  a {
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    display: flex;
    width: 140px;
    height: 35px;
    justify-content: center;
    align-items: center;
    background: #4fba6f;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#4fba6f')};
    }
  }
`;

export const ActivitiesList = styled.div`
  display: flex;
  flex-direction: column;
  align-content: stretch;
  margin-top: 15px;
`;

export const Activity = styled.button`
  margin-top: 10px;
  background: #71c285;
  border-radius: 4px;
  transition: background 0.2s;
  border: none;
  color: #fff;

  &:hover {
    background: ${darken(0.05, '#71c285')};
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 50px;
    font-size: 16px;
  }
`;
