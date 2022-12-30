import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
`;

export const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexEndJustifiedItem = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ContentWrapper = styled.div`
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

export const StyledButton = styled(Button)<{ width?: number; height?: number }>`
  width: ${({ width }) => width || 120}px;
  height: ${({ height }) => height || 60}px;
  margin: 0;
`;
