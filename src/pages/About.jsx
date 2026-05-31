import React, { useEffect, useRef } from 'react';
import Counter from '../components/lern/counters/Counter';

const About = () => {
    const inputRef = useRef(null);
    
    useEffect(() => {
        inputRef.current.focus();
        console.log(inputRef);
    }, [])

    return (
        <div>
            <h1 className='text-3xl font-bold text-blue-600'>About us</h1>
            <input ref={inputRef} type="text" className='border' ></input> 

            <Counter />
        </div>
    );
}

export default About;
