import { FC } from 'react';
import { Button } from 'semantic-ui-react';
import * as BS from './buttonstyle';

const LoginButton: FC = () => {
  return (
    <BS.ButtonContainer>Login/Sign Up</BS.ButtonContainer>
  );
};

export default LoginButton;