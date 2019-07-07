import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';

const initialState = {
  task: '',
  tasks: []
};

function tasksReducer(state = initialState, action){
  switch(action.type){
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task
      };
    default:
      return state;
  }
}

const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});

const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
});

function resetReducer(state = initialState, action){
  switch(action.type){
    case 'RESET_TASK':
      return {
        ...state,
        tasks: []
      };
    default:
      return state
  }
}

const resetTask = () => ({
  type: 'RESET_TASK'
});

const store = createStore(tasksReducer);

// store.replaceReducer(resetReducer);
// store.dispatch(resetTask());

const unsubsribe = store.subscribe(() => renderApp(store));
//unsubscribe()を実行すると解除される

function TodoApp({store}){
  const {task, tasks} = store.getState();

  return (
    <div>
      <input type="text" onChange={(e) => store.dispatch(inputTask(e.target.value))} value={task} />
      <input type="button" onClick={() => store.dispatch(addTask(task))} value="ADD"/>
      <ul>
        {
          tasks.map((item, i) => {
            return (
              <li key={i}>{item}</li>
            );
          })
        }
      </ul>
    </div>
  );
}

function renderApp(store){
  ReactDOM.render(<TodoApp store={store}/>, document.getElementById('root'));
}

renderApp(store);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
