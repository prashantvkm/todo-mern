import React, { useState } from "react";
import "../App.css";
import InputTodo from "../components/InputTodo";
import TodoList from "../components/TodoList";

export interface ITodoData {
  todoList: string[],
}

const Home = () => {
  const [todoData, setTodoData] = useState<ITodoData>({ todoList: [] });

  const getInputData = (newTodoDataValue: string) => {
    console.log("data from InputTodo");
    const newTodoData: ITodoData = {
      todoList: [...todoData.todoList, newTodoDataValue],
    };
    setTodoData(newTodoData);
  }

  const removeTaskFromList = (index: number) => {
    console.log("data from TodoTask: "+index);
    const newTodoData: ITodoData = {
        todoList: todoData.todoList.slice(),
    };
    newTodoData.todoList.splice(index,1);
    setTodoData(newTodoData);
  }

  return (
    <>
    <h1>TODO - MERN</h1>
      <div>
        <InputTodo getInputData={getInputData} />
      </div>
      <div>
        <TodoList todoListData={todoData} removeTask={removeTaskFromList}/>
      </div>
    </>
  );
}

export default Home;