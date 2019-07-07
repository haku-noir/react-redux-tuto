import shortid from 'shortid';
import { push } from 'connected-react-router';

export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    id: shortid.generate(),
    task
  }
});

export const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
});

export const updateInput = (task) => ({
  type: 'UPDATE_INPUT',
  payload: {
    task
  }
});

export const resetTask = () => ({
  type: 'RESET_TASK'
});

export const redirectToError = () => {
  return push("/error");
};

export const addTaskAndClear = (task) => {
  return (dispatch) => {
    dispatch(addTask(task));
    dispatch(updateInput(''));
  }
};

export const addUniqueTask = (task) => {
  return (dispatch, getState) => {
    const {
      tasks: {
        tasks
      }
    } = getState();

    const isDuplicated = tasks.some(tasks => tasks.task === task);

    if(isDuplicated){
      return;
    }
    dispatch(addTaskAndClear(task));
  };
};

export const asyncRedirectToError = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(redirectToError());
    }, 1000);
  };
}

export const asyncAddTaskPromise = (task) => {
  return (dispatch) => {
    sleep1000ms.then(() => {
      dispatch(addTask(task));
    });
  };
}

export const asyncAddTaskAsync = (task) => {
  return async(dispatch) => {
    await sleep1000ms();
    dispatch(addTask(task));
  };
}

const sleep1000ms = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}
