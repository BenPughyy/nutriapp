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
        <Grid.Column>
          {recipes.length ? (
            <Card>
              <Image
                src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>{recipes[0].title}</Card.Header>
                <Card.Meta>
                  <span className="date">Recipe by logged in user</span>
                </Card.Meta>
                <Card.Description>{recipes[0].description}</Card.Description>
              </Card.Content>
            </Card>
          ) : (
            <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
          )}
        </Grid.Column>
        <Grid.Column>
          <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
        </Grid.Column>
        <Grid.Column>
          <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
        </Grid.Column>
        <Grid.Column>
          <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
        </Grid.Column>
        <Grid.Column>
          <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default RecipesPage;
