import { useState } from "react";
import Counter from "@/components/molecules/Counter.tsx";

const ToggleShowItem = () => {
    const [toggle, setToggle] = useState(true);
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
}

export default ToggleShowItem;