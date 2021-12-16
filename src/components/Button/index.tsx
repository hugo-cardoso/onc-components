import React from 'react';
import * as Styles from './styles';
import type { ButtonProps } from './types';

export const Button = ({
  text = '',
  color = 'primary',
  size = 'medium',
  disabled = false,
  onClick = () => {},
}: ButtonProps) => (
  <Styles.Wrapper
    size={size}
    color={color}
    disabled={disabled}
    onClick={onClick}
  >
    { text }
  </Styles.Wrapper>
);
