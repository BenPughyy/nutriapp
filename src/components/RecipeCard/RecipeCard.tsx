import { FC, useEffect } from 'react';
import { Rating } from 'semantic-ui-react';
import { Card, Image } from 'semantic-ui-react';

//Hooks
import useRecipes from '../../hooks/recipes/useRecipes';

const RecipeCard: FC = (title: string, description: string) => {
return (
    <Card>
        <Image
        src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
        wrapped
        ui={false}
        />
        <Card.Content>
            <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className="date">Recipe by logged in user</span>
                </Card.Meta>
            <Card.Description>{description}</Card.Description>
        </Card.Content>
    </Card>
);
};

export default RecipeCard;
