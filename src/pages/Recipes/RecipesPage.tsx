import { FC, useEffect } from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';
import useRecipes from '../../hooks/recipes/useRecipes';

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
                <Card>
                  <Image
                    src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                    wrapped
                    ui={false}
                  />
                  <Card.Content>
                    <Card.Header>{recipe.title}</Card.Header>
                    <Card.Meta>
                      <span className="date">Recipe by logged in user</span>
                    </Card.Meta>
                    <Card.Description>{recipe.description}</Card.Description>
                  </Card.Content>
                </Card>
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
