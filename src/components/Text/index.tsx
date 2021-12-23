import React from 'react';
import * as Styles from './styles';

import type { TextProps } from './types';

export const Text = ({
  text = '',
  color = 'primary',
  size = 'medium',
}: TextProps) => (
  <Styles.Text
    color={color}
    size={size}
  >
    { text }
  </Styles.Text>
)