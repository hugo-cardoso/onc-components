import styled, { css, keyframes } from 'styled-components';
import { lighten } from 'polished';
import { theme } from '../../theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const GroupLabel = styled.div`
  font-size: ${ theme.sizes.sm };
  color: ${ theme.colors.neutral };
  font-family: ${ theme.fonts.primary };
  font-weight: 400;
  position: sticky;
  top: 0;
  z-index: 2;
  width: 100%;
  background-color: ${ theme.colors.primaryDark };
  margin-bottom: ${ theme.sizes.xxs };
  padding: ${ theme.sizes.xs } 0;
  letter-spacing: .6px;
`;

type ItemProps = {
  isActive: boolean;
}

export const Item = styled.div<ItemProps>`
  width: 100%;
  height: ${ theme.sizes.xxl };
  min-height: ${ theme.sizes.xxl };
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${ theme.sizes.xs };
  background-color: ${ theme.colors.primary };
  border-radius: ${ theme.sizes.xxs };
  border: 1px solid ${ theme.colors.primaryLight };
  padding: 0 ${ theme.sizes.sm };
  cursor: pointer;
  transition: border-color .1s ease-in-out;
  z-index: 0;

  &:hover {
    border-color: ${ theme.colors.primaryHighlight };
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${ (props) => props.isActive && css`
    border-color: ${ theme.colors.primaryHighlight };
  ` }
`;

export const ItemText = styled.p`
  font-size: ${ theme.sizes.sm };
  font-family: ${ theme.fonts.primary };
  font-weight: 400;
  color: ${ theme.colors.neutral };
  letter-spacing: .6px;
`;

export const ItemBtn = styled.button`
  appearance: none;
  background-color: ${ theme.colors.primaryLight };
  border: none;
  border-radius: ${ theme.sizes.xxs };
  width: ${ theme.sizes.lg };
  height: ${ theme.sizes.lg };
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${ theme.colors.primaryHighlight };
  z-index: 1;
  cursor: pointer;

  &:hover {
    background-color: ${ lighten(.05, theme.colors.primaryLight) };
  }
`;

const spin = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const Loader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid ${ theme.colors.primaryLight };
  border-top-color: ${ theme.colors.primaryHighlight };
  border-right-color: ${ theme.colors.primaryHighlight };
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: 50% 50%;
  z-index: 1;
  animation: ${ spin } 1s linear infinite;
`;

export const Message = styled.p`
  font-size: ${ theme.sizes.sm };
  font-family: ${ theme.fonts.primary };
  font-weight: 400;
  color: ${ theme.colors.primaryHighlight };
  letter-spacing: .6px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;