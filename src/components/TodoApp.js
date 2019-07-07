import React from 'react';

export default function TodoApp({task, tasks, inputTask, addTask, resetTask, redirectToError}){
  return (
    <div>
      <input type="text" onChange={(e) => inputTask(e.target.value)} value={task} />
      <input type="button" onClick={() => addTask(task)} value="ADD" />
      <ul>
        {
          tasks.map((item, i) => {
            return (
              <li key={i}>{item}</li>
            );
          })
        }
      </ul>
      <input type="button" onClick={() => resetTask()} value="RESET" />
      <input type="button" onClick={() => redirectToError()} value="ERROR" />
    </div>
  );
}
