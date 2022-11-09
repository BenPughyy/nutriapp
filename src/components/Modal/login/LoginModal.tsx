import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { hideModal } from '../../../store/modal';
import * as SC from './styled';

export enum LoginAction {
  LOGIN = 'login',
  SIGN_UP = 'sign-up',
}

export interface LoginModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginModal: FC<LoginModalProps> = ({ setShowModal }) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(hideModal());
  };

  // Set modal to display
  useEffect(() => {
    setShowModal(true);

    return () => setShowModal(false);
  }, [setShowModal]);

  return (
    <SC.Wrapper>
      <h1>Login</h1>

      <SC.ButtonContainer>
        <SC.StyledButton onClick={closeModal}>
          <Icon name="window close" size="large" style={{ margin: 0 }} />
        </SC.StyledButton>

        <SC.StyledButton>Sign Up</SC.StyledButton>
        <div>hi ben</div>

        <SC.StyledButton>Login</SC.StyledButton>
      </SC.ButtonContainer>
    </SC.Wrapper>
  );
};

export default LoginModal;
