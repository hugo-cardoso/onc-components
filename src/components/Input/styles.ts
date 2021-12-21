import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { theme } from '../../theme';

import { InputSizeTypes, InputColors } from './types';

export const FieldLabel = styled.label`
  font-size: ${ theme.sizes.sm };
  color: ${ theme.colors.neutral };
  font-family: ${ theme.fonts.primary };
  font-weight: 400;
  margin-bottom: ${ theme.sizes.xs };
  letter-spacing: .6px;
`;

export const Field = styled.input`
  width: 100%;
  height: ${ theme.sizes.xxl};
  border: 1px solid ${ theme.colors.primaryLight};
  background-color: ${ theme.colors.primaryLight};
  border-radius: ${ theme.sizes.xxs};
  padding: 0 ${ theme.sizes.sm};
  color: ${ theme.colors.neutral};
  font-family: ${ theme.fonts.primary};
  font-weight: 400;

  &:focus {
    outline: none;
    border: 1px solid ${ theme.colors.primaryHighlight };
  }
`;

type Props = {
  size?: InputSizeTypes;
  color?: InputColors;
}

export const Wrapper = styled.div<Props>`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  ${ (props) => css`

    ${ Field } {
      ${ props.size === 'small' && css`
        height: ${ theme.sizes.xl};
      `}

      ${ props.color === 'dark' && css`
        background-color: ${ darken(0.01, theme.colors.primaryDark) };
      `}
    }

  `}
`;