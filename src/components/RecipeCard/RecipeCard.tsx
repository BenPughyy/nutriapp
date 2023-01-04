import { FC, useEffect } from 'react';
import { Rating } from 'semantic-ui-react';
import { Card, Image } from 'semantic-ui-react';
import useRecipes from '../../hooks/recipes/useRecipes';

const RecipeCard: FC = () => {

return (
    <Card>
        <Image
        src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
        wrapped
        ui={false}
        />
        <Card.Content>
            <Card.Header>{useRecipes.recipes.title}</Card.Header>
                <Card.Meta>
                    <span className="date">Recipe by logged in user</span>
                </Card.Meta>
            <Card.Description>{useRecipes.recipes.description}</Card.Description>
        </Card.Content>
    </Card>
);
};

export default RecipeCard;
