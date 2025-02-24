import { useState } from "react";
import Counter from "./Counter";

const Tree = () => {
    const [toggle, setToggle] = useState(false);

    const onClickToggle = () => {
        setToggle((prev) => !prev);
    };

    return (
        <>
            <button onClick={onClickToggle} >
                切替
            </button>
            { toggle ? <Counter key='primary' /> : <Counter key='secondary' /> }
        </>

    );
};

export default Tree;