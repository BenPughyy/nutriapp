import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 0;
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

export const ModalHeader = styled.div`
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;

`;

export const StyledButton = styled(Button)`
  width: 100px;
  height: 50px;
`;

export const StyledCloseButton = styled(Button)`
  width: 30px;
  height: 30px;
  font-size: 20px !important;
  margin-right: 0px !important;
  padding-right: 0 !important;
  padding-left: 0 !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  text-align: center !important;
  align-items: center !important;
`;

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

`;

export const StyledLabel = styled.label`
  font-family: 'Happy Monkey';
`;
