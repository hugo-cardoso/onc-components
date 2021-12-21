import React, { useState } from 'react';
import * as Styles from './styles';

import type { InputProps } from './types';

export const Input = ({
  label,
  placeholder = '',
  color = 'default',
  size = 'default',
  initialValue = '',
  onChange,
}: InputProps) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event.target.value);
    setValue(event.target.value);
  }

  return (
    <Styles.Wrapper
      color={color}
      size={size}
    >
      { label && <Styles.FieldLabel>{ label }</Styles.FieldLabel> }
      <Styles.Field
        onChange={handleChange}
        placeholder={ placeholder }
        value={value}
      />
    </Styles.Wrapper>
  )
};