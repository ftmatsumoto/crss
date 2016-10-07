import React from 'react';
import { RegistrationForm, LoginLink } from 'react-stormpath';

const Registration = () => (
  <div className="container-children registration-form">
    <RegistrationForm>
      <div data-spIf="account.created">
        <span data-spIf="!account.enabled">To verify your account, click the verification link that we sent to your email then proceed to login by going to <LoginLink />.</span>
      </div>
      <div data-spIf="!account.created">
        <p>
          <label htmlFor="firstName">Nome</label><br />
          <input id="firstName" type="text" name="givenName" />
        </p>
        <p>
          <label htmlFor="lastName">Sobrenome</label><br />
          <input id="lastName" type="text" name="surname" />
        </p>
        <p>
          <label htmlFor="email">Email</label><br />
          <input id="email" type="text" name="email" />
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
          <input type="submit" value="Register" />
        </p>
      </div>
    </RegistrationForm>
  </div>
);


export default Registration;
