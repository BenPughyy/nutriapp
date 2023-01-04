import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import RecipeService from '../../services/recipes/RecipeService';
import { AppThunk } from '../store';

export interface Recipe {
  title: string;
  description: string;
  ingredients: {
    ingredient: string;
    quantity: string;
  }[];
  method: {
    step: number;
    stepDescription: string;
  }[];
}

export interface RecipesState {
  data: Recipe[];
  loading: boolean;
  error: string | null;
}

const initialState: RecipesState = {
  data: [],
  loading: false,
  error: null,
};

const RecipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    // Fetch recipes
    fetchRecipesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchRecipesSuccess(state, action: PayloadAction<Recipe[]>) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchRecipesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchRecipesStart, fetchRecipesSuccess, fetchRecipesFailure } =
  RecipesSlice.actions;

export default RecipesSlice.reducer;

export const fetchRecipes = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchRecipesStart());
    const fetched = await RecipeService.getRecipes();

    dispatch(fetchRecipesSuccess(fetched));
  } catch (error) {
    const err = error as string;
    dispatch(fetchRecipesFailure(err.toString()));
  }
};
