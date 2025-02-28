import * as React from "react";
import TextField from '@mui/material/TextField';

type PostTextFieldProps = {
    label: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const PostTextField = ({ label, value, setValue}:PostTextFieldProps ) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <TextField
            label={label}
            value={value}
            onChange={handleInputChange}
        />
    )
}

export default PostTextField;