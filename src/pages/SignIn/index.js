import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <div>
      <img src={logo} alt="Fire Camp" />

      <form action="">
        <strong>SEU E-MAIL</strong>
        <input type="email" placeholder="exemplo@email.com" />
        <strong>SUA SENHA</strong>
        <input type="password" placeholder="********" />

        <button type="submit">Entrar</button>
        <Link to="/register">Criar conta grátis</Link>
      </form>
    </div>
  );
}
