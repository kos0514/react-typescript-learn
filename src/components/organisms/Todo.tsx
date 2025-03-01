import { ReactElement, useState } from "react";
import AddTodoForm from "@/components/molecules/AddTodoForm";
import SubTitle from "@/components/atom/SubTitle";
import TodoList from "@/components/molecules/TodoList";

/**
 * Todoコンポーネントでございます
 *
 * @returns {ReactElement} Todoリストを表示するコンポーネントを返しますの
 *
 * @example
 * // このように『Todo』コンポーネントをお使いくださいませ
 * <Todo />
 */
const Todo = (): ReactElement => {
  const [todoList, setTodoList] = useState<string[]>([
    "交差点で100円を拾う",
    "唐揚げを買う",
    "荷物を取りに行く",
  ]);

  /**
   * 新しいTodo項目を追加する処理でございますの
   * @param {string} todo - 追加するTodo項目でございますわ
   */
  const handleAddTodo = (todo: string) => {
    setTodoList([...todoList, todo]);
  };

  return (
    <>
      <SubTitle subTitle="Todoリスト" />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <AddTodoForm handleAddTodo={handleAddTodo} />
    </>
  );
};

export default Todo;
