import React, { useEffect, useRef } from 'react';
import Counter from '../components/lern/counters/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { increment, setCount } from '../features/counter/counterSlice';

const About = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch();

    const inputRef = useRef(null);
    
    useEffect(() => {
        inputRef.current.focus();
        console.log(inputRef);
    }, [])

    return (
        <div>
            <div>{count}</div>
            <button className='border p-4' onClick={() =>dispatch(increment())}>+</button>
            <button className='border p-4' onClick={() =>dispatch(setCount(10))}>set 10</button>
            

            <h1 className='text-3xl font-bold text-blue-600'>About us</h1>
            <input ref={inputRef} type="text" className='border' ></input> 

            <Counter />
        </div>
    );
}

export default About;
