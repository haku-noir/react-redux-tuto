import React from 'react';
import MyButton from './MyButton';
import MyAppBar from './MyAppBar';
import MyList from './MyList';
import MyInput from './MyInput';

export default function TodoApp({task, tasks, inputTask, addTask, resetTask, redirectToError}){
  return (
    <div>
      <MyAppBar title="TodoApp" />
      <div style={{padding: '16px'}}>
        <MyInput onChange={(e) => inputTask(e.target.value)} value={task} />
        <MyButton variant="contained" color="blue" onClick={() => addTask(task)}>ADD</MyButton>
        <MyButton variant="contained" color="blue" onClick={() => resetTask()}>RESET</MyButton>
        <MyButton variant="contained" color="red" onClick={() => redirectToError()}>ERROR</MyButton>
        <MyList tasks={tasks} />
      </div>
    </div>
  );
}
