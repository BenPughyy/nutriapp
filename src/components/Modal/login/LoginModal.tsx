import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Icon, Form } from 'semantic-ui-react';
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
    <SC.Wrapper>
      <StyledH1 black={true}>Login to Nutri!
        <SC.StyledCloseButton onClick={closeModal}>
            <Icon name="window close" size="large" style={{ margin: 0 }} />
        </SC.StyledCloseButton>
      </StyledH1>
        <Form>
            <Form.Field>
                <label>Username (usually an email address!)</label>
                <input placeholder='Username...'></input>
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder='Password...'></input>
            </Form.Field>
            <SC.StyledButton type='submit'>
                <StyledH4>Login</StyledH4>
            </SC.StyledButton>
        </Form>
      <a href="">No Account? Sign up for one here!</a>
    </SC.Wrapper>
  );
};

export default LoginModal;
