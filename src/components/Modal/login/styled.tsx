import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 250px;
  max-height: 100%;
  width: 800px;
  max-width: 100%;
`;

export const StyledButton = styled(Button)`
  width: 100px;
  height: 50px;
`;

export const StyledCloseButton = styled(Button)`
  width: 40px;
  height: 40px;

`;

export const StyledLabel = styled.label`
  font-family: 'Happy Monkey';
`;
