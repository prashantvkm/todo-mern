import React from "react";

interface ITodoTaskProps {
    taskName: string,
    index: number,
    removeTask: (args:number) => void,
}

const TodoTask: React.FC<ITodoTaskProps> = (props: ITodoTaskProps) => {

    return (
        <li>
            <button onClick={() => props.removeTask(props.index)}>x</button>
            {props.taskName}
        </li>
    );
}

export default TodoTask;