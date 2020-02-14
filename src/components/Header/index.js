import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile, Logout } from './styles';

import logo2 from '~/assets/logo2.svg';

export default function Header() {
  function handleLogout() {
    console.tron.log('logout');
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo2} alt="firecamp" />
          </Link>
        </nav>

        <Profile>
          <div>
            <strong>Bear Gryls</strong>
            <Link to="profile">Meu perfil</Link>
          </div>
          <Logout onClick={handleLogout}>Sair</Logout>
        </Profile>
      </Content>
    </Container>
  );
}
