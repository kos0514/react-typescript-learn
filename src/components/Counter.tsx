import { useState } from 'react'
import '../App.css'

const Counter = () => {
    const [count, setCount] = useState(0)

    const onClickCounter = () => {
        setCount((count) => count + 1);
    };

    const onClickCounterReset = () => {
        setCount(0);
    };

    return (
        <div className="card">
            <button onClick={onClickCounter}>
                count is {count}
            </button>
            <button onClick={onClickCounterReset}>
                reset
            </button>
            <p>
                Edit <code>src/components/Counter.tsx</code> and save to test HMR
            </p>
        </div>
    );
};

export default Counter;