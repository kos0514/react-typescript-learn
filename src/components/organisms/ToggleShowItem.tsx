import { useState } from "react";
import Counter from "@/components/molecules/Counter";
import SubTitle from "@/components/atom/SubTitle";

const ToggleShowItem = () => {
    const [toggle, setToggle] = useState(true);
    const [countPrimary, setCountPrimary] = useState(0)
    const [countSecondary, setCountSecondary] = useState(0)

    const onClickToggle = () => {
        setToggle((prev) => !prev);
    };

    return (
        <>
            <SubTitle subTitle='カウントボタン' />
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