import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 800px;
  max-width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.margin.xlarge};
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display:flex !important;
  justify-content: center !important;
`;

export const StyledButton = styled(Button)`
  width: 100px;
  height: 50px;
`;

export const StyledCloseButton = styled(Button)`
  width: 40px;
  height: 40px;
  align-items: center;
  position: absolute;
  top: 30%;
  right: 38%;
`;

export const StyledLabel = styled.label`
  font-family: 'Happy Monkey';
`;
