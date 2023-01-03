import { combineReducers } from '@reduxjs/toolkit';

import ModalReducer from './modal';
import RecipesReducer from './recipes';

const rootReducer = combineReducers({
  modal: ModalReducer,
  recipes: RecipesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
