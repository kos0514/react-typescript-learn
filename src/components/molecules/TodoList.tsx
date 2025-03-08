import CommonButton from "@/components/atom/CommonButton";
import { List, ListItem, ListItemText, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ReactElement } from "react";

type TodoListProps = {
  /**
   * Todoリストの項目を格納する配列でございますわ
   */
  todoList: string[];
  /**
   * Todoリストの項目を更新するための関数でございますの
   */
  setTodoList: React.Dispatch<React.SetStateAction<string[]>>;
};

/**
 * TodoListコンポーネントでございます
 *
 * @param {TodoListProps} props - Todoリストの「お持ち物」様でございますの
 * @param {string[]} props.todoList - Todoリストの項目を格納する配列でございますわ
 * @param {React.Dispatch<React.SetStateAction<string[]>>} props.setTodoList - Todoリストの項目を更新するための関数でございますの
 * @returns {ReactElement} Todoリストを表示するListコンポーネントを返しますの
 *
 * @example
 * // このように『TodoList』コンポーネントをお使いくださいませ
 * <TodoList todoList={todoList} setTodoList={setTodoList} />
 */
const TodoList = ({ todoList, setTodoList }: TodoListProps): ReactElement => {
  /**
   * Todo項目を完了としてリストから削除する処理でございますの
   * @param {number} index - 完了するTodo項目のインデックスでございますわ
   */
  const onClickCompleteTodo = (index: number) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  return (
    <List>
      {todoList.length === 0 ? (
        <Typography variant="body1">全て完了しています</Typography>
      ) : (
        todoList.map((todo, index) => (
          <ListItem key={`${index}${todo}`}>
            <Stack spacing={1} direction="row" alignItems="center">
              <CommonButton
                label="完了"
                onClick={() => onClickCompleteTodo(index)}
              />
              <ListItemText primary={todo} />
            </Stack>
          </ListItem>
        ))
      )}
    </List>
  );
};

export default TodoList;
