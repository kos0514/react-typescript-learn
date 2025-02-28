import '@/App.css'
import * as React from "react";

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
        <div className="card">
            <h3>{componentText}</h3>
            <button onClick={onClickCounter}>
                count is {count}
            </button>
            <button onClick={onClickReset}>
                reset
            </button>
            <p>
                Edit <code>src/components/Counter.tsx</code> and save to test HMR
            </p>
        </div>
    );
};

export default Counter;