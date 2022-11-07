import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

export const ButtonContainer = ButtonStyle.Button`
    background-color: #d9d9d9;
    height: 60px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-content: center;
`;

export const ButtonFont = styled(Button)`
  align-self: center;
  margin: 0;
  font-weight: 400;
  font-family: Happy Monkey;
`;