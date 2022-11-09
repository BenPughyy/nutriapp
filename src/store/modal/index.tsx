import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalProps } from '../../components/Modal/Modal';
import InitialModal from './initial-state';

const ModalSlice = createSlice({
  name: 'modal',
  initialState: InitialModal,
  reducers: {
    showModal(state, action: PayloadAction<ModalProps>) {
      state.visible = action.payload.visible;
      state.modal = action.payload.modal;
      state.additionalProps = action.payload.additionalProps;
      state.style = action.payload.style;
      state.fullScreen = action.payload.fullScreen;
      state.forceOpen = action.payload.forceOpen;
    },
    hideModal(state) {
      state.visible = false;
      state.modal = undefined;
      state.additionalProps = undefined;
      state.style = undefined;
      state.fullScreen = undefined;
    },
  },
});

export const { showModal, hideModal } = ModalSlice.actions;

export default ModalSlice.reducer;
