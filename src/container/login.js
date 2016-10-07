import React from 'react';
import { LoginForm } from 'react-stormpath';

const Login = () => (
  <div className="container-children">
  <LoginForm>
    <p>
      <label htmlFor="username">Email</label><br />
      <input id="username" type="text" name="username" />
    </p>
    <p>
      <label htmlFor="password">Senha</label><br />
      <input id="password" type="password" name="password" />
    </p>
    <p data-spIf="form.error">
      <strong>Erro:</strong><br />
      <span data-spBind="form.errorMessage" />
    </p>
    <p>
      <input type="submit" value="Login" />
    </p>
  </LoginForm>
  </div>
);

export default Login;