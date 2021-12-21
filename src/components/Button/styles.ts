import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { theme } from '../../theme';
import { defaultStyles } from '../../defaultStyles';

import type { ButtonColorTypes, ButtonSizeTypes } from './types';

const ColorMapper = {
  primary: theme.colors.primary,
  secondary: theme.colors.secondary,
} as {
  [key in ButtonColorTypes]: string;
}

type WrapperProps = {
  color: ButtonColorTypes;
  size: ButtonSizeTypes;
}

export const Wrapper = styled.button<WrapperProps>`
  ${ defaultStyles };

  border: 0;
  border-radius: 3px;
  background-color: ${ props => ColorMapper[props.color] };
  color: ${ theme.colors.neutral };
  font-family: ${ theme.fonts.primary };
  cursor: pointer;
  font-weight: 400;

  ${ props => props.size === 'small' && css`
    font-size: 10px;
    padding: 4px 8px;
  ` }

  ${ props => props.size === 'medium' && css`
    font-size: 12px;
    padding: 8px 16px;
  ` }

  ${ props => props.size === 'large' && css`
    font-size: 16px;
    padding: 12px 24px;
  ` }

  ${ props => props.disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
  ` }

  &:hover {
    background-color: ${ props => lighten(0.1, ColorMapper[props.color]) };
  }
`;
