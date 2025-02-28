import {useState} from "react";
import AddTodoForm from "@/components/molecules/AddTodoForm.tsx";
import SubTitle from "@/components/atom/SubTitle.tsx";
import TodoList from "@/components/molecules/TodoList.tsx";

const Todo = () => {
    const [todoList, setTodoList] = useState<string[]>(
        ["交差点で100円を拾う", "唐揚げを買う", "荷物を取りに行く"]
    );

    const handleAddTodo = (todo: string) => {
        setTodoList([...todoList, todo]);
    };

    return (
        <>
            <SubTitle subTitle='Todoリスト' />
            <TodoList todoList={todoList} setTodoList={setTodoList} />
            <AddTodoForm handleAddTodo={handleAddTodo} />
        </>
    );
}

export default Todo;