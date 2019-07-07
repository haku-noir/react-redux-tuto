import { connect } from 'react-redux';
import TodoApp from '../components/TodoApp';
import { addTaskAndClear, inputTask, resetTask, asyncRedirectToError } from '../actions/tasks';

function mapStateToProps({tasks}){
  return {
    task: tasks.task,
    tasks: tasks.tasks
  };
}

function mapDispatchToProps(dispatch){
  return {
    addTask(task){
      dispatch(addTaskAndClear(task));
    },
    inputTask(task){
      dispatch(inputTask(task));
    },
    resetTask(){
      dispatch(resetTask());
    },
    redirectToError(){
      dispatch(asyncRedirectToError());
    }
  };
}

const connectedTodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default connectedTodoApp;
