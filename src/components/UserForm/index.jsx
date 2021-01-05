import React from 'react';

import { Title, Form, Input, Button } from './styles';
import { useInputValue } from '../../hooks/useInputValue';

export const UserForm = ({ onSubmit, title }) => {
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
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input type='email' placeholder='Email' {...email} required />
        <Input type='password' placeholder='Password' {...password} required />
        <Button type='submit'>{title}</Button>
      </Form>
    </>
  );
};
