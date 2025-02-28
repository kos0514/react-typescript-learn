import '@/App.css'
import * as React from "react";
import CommonButton from "@/components/atom/CommonButton.tsx";

type CounterProps = {
  componentText: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Counter = ( { componentText, count, setCount } : CounterProps ) => {
    const onClickCounter = () => {
        setCount((count) => count + 1);
    };

    const onClickReset = () => {
        setCount(0);
    };

    return (
        <>
            <h3>{componentText}</h3>
            <CommonButton label={`count is: ${count}`} onClick={onClickCounter} />
            <CommonButton label='reset' onClick={onClickReset} />
        </>
    );
};

export default Counter;