import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { StyledH2 } from '../../main/theme';
import { showModal } from '../../store/modal';
import { ModalTypes } from '../Modal/Modal';

import * as SC from './styled';

const LoginButton: FC = () => {
  const dispatch = useDispatch();

  return (
    <SC.StyledButton
      onClick={() =>
        dispatch(
          showModal({
            forceOpen: true,
            visible: true,
            modal: ModalTypes.LOGIN,
          }),
        )
      }
    >
      <StyledH2>Login/Sign Up</StyledH2>
    </SC.StyledButton>
  );
};

export default LoginButton;
