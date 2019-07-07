import {connect} from 'react-redux';
import TodoApp from '../components/TodoApp';
import {addTask, inputTask} from '../actions/tasks';

function mapStateToProps({task, tasks}){
  return {task, tasks};
}

function mapDispatchToProps(dispatch){
  return {
    addTask(task){
      dispatch(addTask(task));
    },
    inputTask(task){
      dispatch(inputTask(task));
    }
  };
}

const connectedTodoApp = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default connectedTodoApp;
