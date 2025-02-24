import { useState } from "react";
import Counter from "./Counter";

const Tree = () => {
    const [toggle, setToggle] = useState(false);
    const [countPrimary, setCountPrimary] = useState(0)
    const [countSecondary, setCountSecondary] = useState(0)

    const onClickToggle = () => {
        setToggle((prev) => !prev);
    };

    return (
        <>
            <button onClick={onClickToggle} >
                切替
            </button>
            { toggle ?
                <Counter key='primary' componentText='primary' count={countPrimary} setCount={setCountPrimary} /> :
                <Counter key='secondary' componentText='secondary' count={countSecondary} setCount={setCountSecondary} />
            }
        </>

    );
};

export default Tree;