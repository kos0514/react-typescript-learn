import PostTextField from "@/components/atom/PostTextField.tsx";
import CommonButton from "@/components/atom/CommonButton.tsx";
import {useState} from "react";

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
        <>
            <PostTextField value={todoField} setValue={setTodoField} />
            <CommonButton label='追加' onClick={onClickAddTodo} />
        </>
    );
}

export default AddTodoForm;