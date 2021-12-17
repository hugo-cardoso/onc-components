import styled, { css } from 'styled-components';
import { defaultStyles } from '../../defaultStyles';
import { lighten, darken } from 'polished';
import { theme } from '../../theme';

import type { ProceduresTypes } from '../../types';

const ColorMapper = {
  STAR: '#84d15b',
  SID: '#dba57c',
  TAXI: '#4ac8ff',
  IAC: '#e57daf'
} as {
  [key in ProceduresTypes]: string
}

export const Wrapper = styled.div`
  ${ defaultStyles };

  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  background-color: ${ theme.colors.primary };
`;

type TabProps = {
  active: boolean;
  type: ProceduresTypes;
};

export const Tab = styled.div<TabProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${darken(.05, theme.colors.primary)};
  color: #FFF;
  font-family: ${ theme.fonts.primary };
  padding-bottom: 4px;
  position: relative;
  font-size: 14px;
  letter-spacing: .5px;
  cursor: pointer;

  &:hover {
    background-color: ${ lighten(0.05, theme.colors.primary) };
  }

  ${ props => props.active && css`
    background-color: ${ lighten(0.05, theme.colors.primary) };
  ` };
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${ props => ColorMapper[props.type] };
    z-index: 1;
  }
  
  &:last-child {
    border-right: none;
  }
`;
