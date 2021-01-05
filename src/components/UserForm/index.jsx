import React from 'react';

import { Title, Form, Input, Button, Error } from './styles';
import { useInputValue } from '../../hooks/useInputValue';

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      email: email.value,
      password: password.value,
    });
  };

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input type='email' placeholder='Email' {...email} disabled={disabled} required />
        <Input type='password' placeholder='Password' {...password} disabled={disabled} required />
        <Button type='submit' disabled={disabled}>
          {title}
        </Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};
