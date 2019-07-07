import { createStore as reduxCreateStore, combineReducers, compose, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import tasksReducer from '../reducers/tasks';

export default function createStore(history){
  const rootReducer = combineReducers({
    tasks: tasksReducer,
    router: connectRouter(history),
  });

  return reduxCreateStore(
    connectRouter(history)(rootReducer),
    compose(
      applyMiddleware(
        routerMiddleware(history)
      )
    )
  );
}
