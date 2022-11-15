import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Icon, Form } from 'semantic-ui-react';
import { StyledH1, StyledH4, StyledLabel, ProjectsWrapper } from '../../../main/theme';
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
      <ProjectsWrapper>
        <StyledH1 black={true}>Login to Nutri!</StyledH1>
        <SC.StyledCloseButton onClick={closeModal}>
            <Icon name="window close" size="large" style={{ margin: 0 }} />
        </SC.StyledCloseButton>
      </ProjectsWrapper>
        <Form>
            <Form.Field>
                <SC.StyledLabel>Username (usually an email address!)</SC.StyledLabel>
                <input placeholder='Username...'></input>
            </Form.Field>
            <Form.Field>
                <SC.StyledLabel>Password</SC.StyledLabel>
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
