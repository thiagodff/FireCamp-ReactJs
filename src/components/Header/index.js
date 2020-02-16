import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile, Logout } from './styles';

import logo2 from '~/assets/logo2.svg';

export default function Header() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
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
            <strong>{profile.name}</strong>
            <Link to="profile">Meu perfil</Link>
          </div>
          <Logout onClick={handleSignOut}>Sair</Logout>
        </Profile>
      </Content>
    </Container>
  );
}
