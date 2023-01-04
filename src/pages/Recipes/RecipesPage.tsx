import { FC, useEffect } from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';
import useRecipes from '../../hooks/recipes/useRecipes';
import RecipeCard from '../../components/RecipeCard/RecipeCard';

const RecipesPage: FC = () => {
  const { recipes, getRecipes } = useRecipes();

  useEffect(() => {
    if (!recipes.length) {
      (async () => {
        await getRecipes();
      })();
    }
  }, [getRecipes]);

  return (
    <Grid columns={3} divided>
      <Grid.Row>
        {recipes.length ? (
          recipes.map((recipe) => {
            return (
              <Grid.Column>
                <RecipeCard/>
              </Grid.Column>
            );
          })
        ) : (
          <div>NO RECIPES FOUND</div>
        )}
      </Grid.Row>
    </Grid>
  );
};

export default RecipesPage;
