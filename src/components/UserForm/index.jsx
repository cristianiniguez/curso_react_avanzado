import React from 'react';

import { useInputValue } from '../../hooks/useInputValue';

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  return (
    <form onSubmit={onSubmit}>
      <input type='email' placeholder='Email' {...email} required />
      <input type='password' placeholder='Password' {...password} required />
      <button type='submit'>Iniciar sesión</button>
    </form>
  );
};
