import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import createStore from './store';
import TodoApp from './containers/TodoApp';
import ErrorPage from './components/ErrorPage';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();
const store = createStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={TodoApp} />
          <Route exact path="/error" component={ErrorPage} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
