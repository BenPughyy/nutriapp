import { FC } from 'react';
import * as SC from './ButtonStyle';

const LoginButton: FC = () => {
  return (
    <SC.ButtonStyle>
        <SC.ButtonFont>Login/SignUp</SC.ButtonFont>
    </SC.ButtonStyle>
  );
};

export default LoginButton;