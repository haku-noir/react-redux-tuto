const initialState = {
  task: '',
  tasks: []
};

export default function tasksReducer(state = initialState, action){
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
    case 'RESET_TASK':
      return {
        ...state,
        ...initialState
      };
    case 'UPDATE_INPUT':
      return {
        ...state,
        task: action.payload.task
      }
    default:
      return state;
  }
}
