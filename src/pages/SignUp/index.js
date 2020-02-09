import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <div>
      <img src={logo} alt="Fire Camp" />

      <form action="">
        <strong>NOME COMPLETO</strong>
        <input type="text" placeholder="Nome completo" />
        <strong>SEU E-MAIL</strong>
        <input type="email" placeholder="exemplo@email.com" />
        <strong>SUA SENHA</strong>
        <input type="password" placeholder="********" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </div>
  );
}
