import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import routes, { RouteInterface } from '@/router/index';
import PageLayout from '@/page/layout/index';

import * as serviceWorker from '@/serviceWorker';

const RouteWithSubRoutes = (route: RouteInterface, index: number) => (
  <Route
    key={index}
    path={route.path}
    render={(props) => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);
class Root extends React.Component {
  render() {
    return (
      <PageLayout>
        <Router>
          <Switch>
            {routes.map((route: RouteInterface, i: number) => RouteWithSubRoutes(route, i))}
          </Switch>
        </Router>
      </PageLayout>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
