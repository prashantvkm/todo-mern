import React, { useState } from "react";

interface IInputTodoProps {
    getInputData : (taskName: string) => void
}

const InputTodo : React.FC<IInputTodoProps> = (props: IInputTodoProps) => {
  const [taskName, setTaskName] = useState("");

  return (
    <div>
      <input
        value={taskName}
        onInput={(e) => setTaskName((e.target as HTMLInputElement).value)}
      ></input>
      <button onClick={() => props.getInputData(taskName)}>Add Task</button>
    </div>
  );
};

export default InputTodo;
