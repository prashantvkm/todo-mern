import React, { useEffect, useState } from "react";
import { ITodoData } from "../pages/Home";
import TodoTask from "./TodoTask";

interface TodoListProp {
  todoListData: ITodoData;
  removeTask: (args: number) => void;
}

const TodoList: React.FC<TodoListProp> = (props: TodoListProp) => {
  const [listDataJSX, setListDataJSX] = useState<JSX.Element>(
    <p>No content</p>
  );

  // onInit
  useEffect(() => {
    console.log("got the data");
    const newListDataJSX: any = props.todoListData.todoList.map(
      (value, index) => {
        return (
          <TodoTask
            key = {index}
            index={index}
            taskName={value}
            removeTask={props.removeTask}
          />
        );
      }
    );
    setListDataJSX(newListDataJSX);
  }, [props.todoListData.todoList, props.removeTask]);

  return (
    <div>
      <ul>{listDataJSX}</ul>
    </div>
  );
};

export default TodoList;
