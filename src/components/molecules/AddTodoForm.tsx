import PostTextField from "@/components/atom/PostTextField";
import CommonButton from "@/components/atom/CommonButton";
import {useState} from "react";
import Box from '@mui/material/Box';

type AddTodoFormProps = {
    handleAddTodo: (todo: string) => void;
}

const AddTodoForm = ({handleAddTodo}: AddTodoFormProps) => {
    const [todoField, setTodoField] = useState<string>("");

    const onClickAddTodo = () => {
        if (todoField.trim() === "") return;

        handleAddTodo(todoField);
        setTodoField("");
    }

    return (
        <Box sx={{ alignItems: 'center', display: 'flex' }}>
            <PostTextField label='タスク' value={todoField} setValue={setTodoField} />
            <CommonButton label='追加' onClick={onClickAddTodo} />
        </Box>
    );
}

export default AddTodoForm;