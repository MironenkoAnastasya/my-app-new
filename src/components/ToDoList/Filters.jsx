import React from 'react';
import Item from './Item';
import items from './data';

const Filters = ({setActiveFilter, activeFilter, filtersData}) => {
     const filters = Object.keys(filtersData);
    return (
        <div className='filters'>
            {filters.map(item => 
            <button 
            key={item}
            onClick={() =>setActiveFilter(item)} 
            style={{
                backgroundColor: activeFilter === item ? "dodgerblue": "#bbff1d"}}>ALL</button>)}
                    
                </div>
    );
}

export default Filters;
