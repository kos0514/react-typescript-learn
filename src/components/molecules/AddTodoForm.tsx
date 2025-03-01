import PostTextField from "@/components/atom/PostTextField";
import CommonButton from "@/components/atom/CommonButton";
import { ReactElement, useState } from "react";
import Box from "@mui/material/Box";

type AddTodoFormProps = {
  /**
   * 新しいタスクを追加するための関数でございますわ
   * @param {string} handleAddTodo - 追加するタスクの内容でございますの
   */
  handleAddTodo: (todo: string) => void;
};

/**
 * AddTodoFormコンポーネントでございますの
 *
 * 新しいタスクを追加するためのフォームコンポーネントでございますわ
 *
 * @param {AddTodoFormProps} props - フォームの「お持ち物」様でございますの
 * @param {function} props.handleAddTodo - 新しいタスクを追加するための関数でございますわ
 * @returns {ReactElement} タスク追加フォームを表示するコンポーネントを返しますの
 *
 * @example
 * <AddTodoForm handleAddTodo={(todo) => console.log(todo)} />
 */
const AddTodoForm = ({ handleAddTodo }: AddTodoFormProps): ReactElement => {
  const [todoField, setTodoField] = useState<string>("");

  /**
   * タスク追加ボタンがクリックされたときの処理でございますの
   * フィールドが空でない場合、handleAddTodo関数を呼び出し、フィールドをリセットいたしますわ
   */
  const onClickAddTodo = () => {
    if (todoField.trim() === "") return;

    handleAddTodo(todoField);
    setTodoField("");
  };

  return (
    <Box sx={{ alignItems: "center", display: "flex" }}>
      <PostTextField label="タスク" value={todoField} setValue={setTodoField} />
      <CommonButton label="追加" onClick={onClickAddTodo} />
    </Box>
  );
};

export default AddTodoForm;
