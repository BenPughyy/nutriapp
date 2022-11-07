import { FC } from 'react';
import { Button } from 'semantic-ui-react';
import * as SC from './ButtonStyle';

const LoginButton: FC = () => {
  return (
    <SC.ButtonContainer>
        <SC.ButtonFont>Login/SignUp</SC.ButtonFont>
    </SC.ButtonContainer>
  );
};

export default LoginButton;