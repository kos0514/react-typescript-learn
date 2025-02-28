import * as React from "react";

type PostTextFieldProps = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const PostTextField = ({value, setValue}:PostTextFieldProps ) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <input
            type="text"
            value={value}
            onChange={handleInputChange}
        />
    )
}

export default PostTextField;