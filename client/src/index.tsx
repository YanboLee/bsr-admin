import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import routes, { RouteInterface } from '@/router/index';
import reducer from '@/store';
import * as serviceWorker from '@/serviceWorker';

const store = createStore(reducer, composeWithDevTools());

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
      <Router>
        <Switch>
          {routes.map((route: RouteInterface, i: number) => RouteWithSubRoutes(route, i))}
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
