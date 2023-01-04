import { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Enums
import { RouteName } from '../enums/RouteName';

// Pages
import LandingPage from '../pages/Landing/LandingPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import RecipesPage from '../pages/Recipes/RecipesPage';

const Routing: FC = () => {
  return (
    <Switch>
      <Route path={RouteName.LANDING} exact={true} component={LandingPage} />
      <Route path={RouteName.RECIPES} exact={true} component={RecipesPage} />
      <Route path={RouteName.NOT_FOUND} component={NotFoundPage} />
      <Redirect to={RouteName.NOT_FOUND} />
    </Switch>
  );
};

export default Routing;
