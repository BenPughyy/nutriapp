import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.system.grey};
  height: 8vh;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const StyledHeader = styled(Header)`
  align-self: center;
  margin: 0;
  font-weight: 400;
  font-family: Happy Monkey;
`;
