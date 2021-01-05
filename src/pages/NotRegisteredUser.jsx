import React, { useContext } from 'react';

import { Context } from '../Context';
import { RegisterMutation } from '../containers/RegisterMutation';
import { LoginMutation } from '../containers/LoginMutation';
import { UserForm } from '../components/UserForm';

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);

  return (
    <>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            register({ variables: { input: { email, password } } }).then(({ data }) => {
              const token = data.signup;
              activateAuth(token);
            });
          };

          const errorMsg = error && 'Hay algún problema, puede que el usuario ya exista';

          return (
            <UserForm title='Registrarse' onSubmit={onSubmit} error={errorMsg} disabled={loading} />
          );
        }}
      </RegisterMutation>
      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            login({ variables: { input: { email, password } } }).then(({ data }) => {
              const token = data.login;
              activateAuth(token);
            });
          };

          const errorMsg = error && 'Los datos parecen incorrectos';

          return (
            <UserForm
              title='Iniciar sesión'
              onSubmit={onSubmit}
              error={errorMsg}
              disabled={loading}
            />
          );
        }}
      </LoginMutation>
    </>
  );
};
