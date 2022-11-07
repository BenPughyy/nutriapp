import { FC } from 'react';
import { Button } from 'semantic-ui-react';
import * as SC from './styled';

const LoginButton: FC = () => {
  return (
    <SC.ButtonContainer>Login/Sign Up</SC.ButtonContainer>
  );
};

export default LoginButton;