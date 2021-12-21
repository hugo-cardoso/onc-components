import styled from 'styled-components';
import { theme } from '../../theme';

export const Wrapper = styled.div`
  width: 300px;
  height: 100vh;
  background-color: ${ theme.colors.primaryDark };
  display: flex;
  flex-direction: column;
  padding: ${ theme.sizes.sm };
`;

export const SearchForm = styled.form`
  margin-bottom: ${ theme.sizes.sm };
`;

export const ProceduresTabWrapper = styled.div`
  width: 100%;
  margin-bottom: ${ theme.sizes.sm };
`;

export const FilterProceduresWrapper = styled.div`
  width: 100%;
  margin-bottom: ${ theme.sizes.xs };
`;