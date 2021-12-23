import styled from 'styled-components';
import { theme } from '../../theme';
import type { FontSizes, FontColors } from './types';

const SizeMapper = {
  small: theme.sizes.sm,
  medium: theme.sizes.md,
  large: theme.sizes.lg,
} as {
  [key in FontSizes]: string;
};

const ColorMapper = {
  highlight: theme.colors.primaryHighlight,
  light: theme.colors.primaryLight,
  dark: theme.colors.primaryDark,
  primary: theme.colors.primary,
  secondary: theme.colors.secondary,
} as {
  [key in FontColors]: string;
}

type TextProps = {
  size: FontSizes;
  color: FontColors;
};

export const Text = styled.p<TextProps>`
  font-family: ${ theme.fonts.primary };
  font-size: ${ props => SizeMapper[props.size] };
  color: ${ props => ColorMapper[props.color] };
`;