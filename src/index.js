import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
import TodoApp from './components/TodoApp';
import tasksReducer from './reducers/tasks';

const store = createStore(tasksReducer);
store.subscribe(() => renderApp(store));

function renderApp(store){
  ReactDOM.render(<TodoApp store={store}/>, document.getElementById('root'));
}

renderApp(store);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
