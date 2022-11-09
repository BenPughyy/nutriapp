import { FC } from 'react';
import { useDispatch } from 'react-redux';
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
      Login/Sign Up
    </SC.StyledButton>
  );
};

export default LoginButton;
