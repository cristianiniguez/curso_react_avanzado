import React from 'react';
import Context from '../Context';
import { UserForm } from '../components/UserForm';
import { gql, useMutation } from '@apollo/client';

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const NotRegisteredUser = () => {
  const [register, { data, loading, error }] = useMutation(REGISTER);

  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const onSubmit = ({ email, password }) => {
          register({ variables: { input: { email, password } } }).then(activateAuth);
        };

        const errorMsg = error && 'El usuario ya existe o hay algún problema';

        return (
          <>
            <UserForm title='Registrarse' onSubmit={onSubmit} error={errorMsg} disabled={loading} />
            <UserForm title='Iniciar sesión' onSubmit={activateAuth} />
          </>
        );
      }}
    </Context.Consumer>
  );
};
