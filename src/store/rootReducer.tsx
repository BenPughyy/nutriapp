import { combineReducers } from '@reduxjs/toolkit';

import ModalReducer from './modal';

const rootReducer = combineReducers({
  modal: ModalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
