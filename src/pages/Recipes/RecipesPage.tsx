import { FC, useEffect } from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';

//Hooks
import useRecipes from '../../hooks/recipes/useRecipes';

//Components
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
                <RecipeCard title={recipe.title} description={recipe.description}/>
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
