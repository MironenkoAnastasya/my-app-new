import React, { useCallback, useState } from 'react';
import CounterValue from './CounterValue';
import IsFive from './IsFive';

const Counter = () => {
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(2);

    const someFunc = useCallback(() => console.log('someFunc'), []);

    return (
        <div>

        <div>
            <button onClick={() => setCount1(count1 + 1)}>+</button>
            <CounterValue value={count1} id="counter1" func={someFunc} />
            <button onClick={() => setCount1(count1 - 1)}>-</button>
        </div>
        
        <div>
            <button onClick={() => setCount2(count2 + 1)}>+</button>
            <CounterValue value={count2} id="counter2" />
            <button onClick={() => setCount2(count2 - 1)}>-</button>
            <IsFive value={count2} />
        </div>


        </div>
    );
}

export default Counter;
