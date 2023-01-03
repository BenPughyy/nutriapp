import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes, Recipe } from '../../store/recipes';
import { RootState } from '../../store/rootReducer';

const useRecipes = () => {
  const dispatch = useDispatch();

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const recipesState = useSelector((state: RootState) => state.recipes);
  const recipesData: Recipe[] = recipesState.data as Recipe[];

  const getRecipes = useCallback(async () => {
    await dispatch(fetchRecipes());
  }, [dispatch]);

  // Load recipes
  useEffect(() => {
    setRecipes(recipesData);
  }, [recipesData]);

  return {
    recipes,
    getRecipes,
  };
};

export default useRecipes;
