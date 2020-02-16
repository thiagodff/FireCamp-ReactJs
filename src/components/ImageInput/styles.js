import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;

  label {
    cursor: pointer;

    div {
      border-radius: 4px;
      height: 180px;
      width: 700px;
      border: 1px solid #ddd;
      background: #fff;

      svg {
        height: 80px;
        width: 80px;
        color: #ddd;
        margin: 50px 300px;
      }

      &:hover {
        opacity: 0.7;
      }

      img {
        height: 100%;
        width: 100%;
        border-radius: 4px;
        border: 0px solid rgba(255, 255, 255, 0.5);
      }

      input {
        display: none;
      }
    }
  }
`;
