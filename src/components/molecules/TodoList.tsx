import * as React from "react";
import CommonButton from "@/components/atom/CommonButton.tsx";

type TodoListProps = {
    todoList: string[];
    setTodoList: React.Dispatch<React.SetStateAction<string[]>>;
}

const TodoList = ({todoList, setTodoList}:TodoListProps) => {

    const onClickCompleteTodo = (index: number) => {
        setTodoList(todoList.filter((_, i) => i !== index));
    };

    return (
        <ul>
            {todoList.map((todo, index) => (
                <li key={`${index}${todo}`} style={{ listStylePosition: 'inside', textAlign: 'left'}}>
                    <CommonButton label='完了' onClick={() => onClickCompleteTodo(index)} />
                    {todo}
                </li>
            ))}
        </ul>
    )
}

export default TodoList;