import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { theme } from '../../theme';

import type { ProceduresTypes } from '../../types';

export const Wrapper = styled.div`
  width: 100%;
  height: ${ theme.sizes.xxl };
  display: flex;
  justify-content: space-between;
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
  border-radius: ${theme.sizes.xxs};
  overflow: hidden;
  color: ${ theme.colors.neutral };
  font-family: ${ theme.fonts.primary };
  padding-bottom: 4px;
  position: relative;
  font-size: 14px;
  letter-spacing: .5px;
  cursor: pointer;
  margin-right: ${ theme.sizes.xs };
  background-color: ${ theme.colors.primary };
  border: 1px solid ${ theme.colors.primaryLight };

  &:hover {
    background-color: ${ theme.colors.primaryLight };
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${ props => theme.colors.procedures[props.type] };
    z-index: 1;
    transition: height .1s ease-in-out;
  }
  
  &:last-child {
    margin-right: 0;
  }

  ${ props => props.active && css`
    background-color: ${ lighten(0.05, theme.colors.primary) };
    font-weight: 500;

    &:after {
      height: 6px;
    }
  `};
`;
