import React, { useMemo } from 'react';

const IsFive = ({value}) => {
    console.log('IsFive');

    const getResult = useMemo( () => {
        let i = 0;
        while (i < 1000000000) { i++ };
        return value === 5 ? 'Is Five' : 'Not Five';
    }, [value]);

    return (
        <div>
            {getResult}
        </div>
    );
}

export default React.memo(IsFive, (prevProps, nextProps)=> { 
    if (nextProps.value === 5 || prevProps.value === 5) return false;
    return true;
});
