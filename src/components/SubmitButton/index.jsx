import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './styles';

export const SubmitButton = ({ children, onclick, disabled }) => (
  <Button onClick={onclick} disabled={disabled}>
    {children}
  </Button>
);

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onclick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
