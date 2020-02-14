import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    a > img {
      height: 28px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    text-align: right;
    margin-right: 15px;
    align-items: center;
    align-self: center;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }
`;

export const Logout = styled.button`
  height: 37px;
  width: 66px;
  color: #fff;
  background: #d44059;
  font-weight: bold;
  font-size: 16px;
  border-radius: 4px;
  border: none;
`;
