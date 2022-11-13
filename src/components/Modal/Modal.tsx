import React, { FC, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { hideModal } from '../../store/modal';
import FadeIn from '../FadeIn/FadeIn';
import LoginModal, { LoginModalProps } from './login/LoginModal';
import * as SC from './styled';

const ESC_KEY = 27;

export enum ModalTypes {
  LOGIN = 'login',
}

export interface ModalProps {
  visible: boolean;
  modal?: ModalTypes;
  additionalProps?: Record<string, unknown>;
  style?: React.CSSProperties;
  fullScreen?: boolean;
  forceOpen?: boolean;
}

const getModal = (
  modal: ModalTypes,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  additionalProps?: Record<string, unknown>,
) => {
  let addProps;
  switch (modal) {
    case ModalTypes.LOGIN:
      addProps = additionalProps as unknown as LoginModalProps;
      return <LoginModal setShowModal={setShowModal} {...addProps} />;
  }
};

const Modal: FC<ModalProps> = ({
  visible,
  modal,
  additionalProps,
  style,
  fullScreen,
  forceOpen,
}) => {
  const dispatch = useDispatch();
  const clickRef = useRef<HTMLDivElement>(null);

  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (!forceOpen) {
      const close = (e) => {
        // Use ESC to close modal
        if (e.keyCode === ESC_KEY) {
          dispatch(hideModal());
        }
      };

      // Click outside of the modal to also close it
      const handleClick = (e) => {
        if (clickRef.current && !clickRef.current?.contains(e.target)) {
          dispatch(hideModal());
        }
      };

      document.addEventListener('keydown', close);
      document.addEventListener('mousedown', handleClick);

      return () => {
        document.removeEventListener('keydown', close);
        document.removeEventListener('mousedown', handleClick);
      };
    }
  }, [dispatch, forceOpen]);

  if (!visible || !modal) {
    return null;
  }

  return (
    <FadeIn>
      <SC.Overlay>
        <SC.Wrapper
          ref={clickRef}
          showModal={showModal}
          style={style}
          fullScreen={fullScreen}
        >
          {getModal(modal, setShowModal, additionalProps)}
        </SC.Wrapper>
      </SC.Overlay>
    </FadeIn>
  );
};

export default Modal;
