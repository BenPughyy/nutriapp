import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { StyledH1, StyledH4 } from '../../../main/theme';
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
    <SC.FlexWrapper>
      <SC.FlexColumnWrapper>
        <SC.FlexEndJustifiedItem>
          <SC.StyledButton width={60} height={45} onClick={closeModal}>
            <Icon name="window close" size="large" />
          </SC.StyledButton>
        </SC.FlexEndJustifiedItem>
        <SC.ContentWrapper>
          <StyledH1 black={true}>Login</StyledH1>

          <SC.ButtonContainer>
            <SC.StyledButton>
              <StyledH4> Sign Up</StyledH4>
            </SC.StyledButton>

            <SC.StyledButton>
              <StyledH4>Login</StyledH4>
            </SC.StyledButton>
          </SC.ButtonContainer>
        </SC.ContentWrapper>
      </SC.FlexColumnWrapper>
    </SC.FlexWrapper>
  );
};

export default LoginModal;
