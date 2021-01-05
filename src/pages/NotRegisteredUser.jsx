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
  const [register] = useMutation(REGISTER);

  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const onSubmit = ({ email, password }) => {
          register({ variables: { input: { email, password } } }).then(activateAuth);
        };

        return (
          <>
            <UserForm title='Registrarse' onSubmit={onSubmit} />
            <UserForm title='Iniciar sesión' onSubmit={activateAuth} />
          </>
        );
      }}
    </Context.Consumer>
  );
};
