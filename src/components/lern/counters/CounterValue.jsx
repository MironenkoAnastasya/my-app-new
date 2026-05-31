import React, { memo } from 'react';

const CounterValue = ({value, id}) => {
    console.log(id);
    return (
        <div>
            <span>
                {value}
            </span>
        </div>
    );
}

export default memo(CounterValue);
