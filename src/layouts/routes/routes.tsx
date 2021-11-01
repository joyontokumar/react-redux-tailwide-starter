import { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Card from '../../components/card';
import About from '../../pages/about';
import Home from '../../pages/home';
import Notfound from '../../pages/notfound';

const Routes = (): ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact={true}
          path={`${process.env.PUBLIC_URL}/`}
          component={Home}
        />
        <Route
          exact={true}
          path={`${process.env.PUBLIC_URL}/about`}
          component={About}
        />
        <Route
          exact={true}
          path={`${process.env.PUBLIC_URL}/card`}
          component={Card}
        />

        <Route exact path="*" component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
