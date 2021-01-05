import React from 'react';
import { Button } from './styles';

export const SubmitButton = ({ children, onclick, disabled }) => (
  <Button onClick={onclick} disabled={disabled}>
    {children}
  </Button>
);
