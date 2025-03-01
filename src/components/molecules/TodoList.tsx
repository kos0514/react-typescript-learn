import CommonButton from "@/components/atom/CommonButton";
import { List, ListItem, ListItemText } from '@mui/material';
import Typography from "@mui/material/Typography";

type TodoListProps = {
    todoList: string[];
    setTodoList: React.Dispatch<React.SetStateAction<string[]>>;
}

const TodoList = ({todoList, setTodoList}:TodoListProps) => {

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
                        <CommonButton label='完了' onClick={() => onClickCompleteTodo(index)} />
                        <ListItemText primary={todo} />
                    </ListItem>
                ))
            )}
        </List>
    )
}

export default TodoList;