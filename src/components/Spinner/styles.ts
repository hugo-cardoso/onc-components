import styled, { keyframes } from 'styled-components';
import { theme } from '../../theme';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid ${ theme.colors.primaryLight };
  border-top-color: ${ theme.colors.primaryHighlight };
  border-right-color: ${ theme.colors.primaryHighlight };
  z-index: 1;
  animation: ${ spin } 1s linear infinite;
`;