import { createStore as reduxCreateStore, combineReducers, compose, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import tasksReducer from '../reducers/tasks';

export default function createStore(history){
  const rootReducer = combineReducers({
    tasks: tasksReducer,
    router: connectRouter(history),
  });
  const savedState = JSON.parse(localStorage.getItem('app-state'));

  return reduxCreateStore(
    connectRouter(history)(rootReducer),
    savedState ? savedState : rootReducer(undefined, {type: 'INIT'}),
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
        logger,
        storager
      )
    )
  );
}

const logger = store => next => action => {
  console.log(store.getState());
  console.log(action);

  const result = next(action);

  console.log(store.getState());
  console.log("--------------");

  return result;
};

const storager = store => next => action => {
  const result = next(action);
  window.localStorage.setItem('app-state', JSON.stringify(store.getState()));
  return result;
}
