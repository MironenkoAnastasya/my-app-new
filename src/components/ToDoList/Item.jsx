import React, { useState } from 'react';
import classNames from 'classnames';

const Item = ({item, removeTask, toggleDone, changeTitle, setModelData }) => {
    const [isChecked, setIsChecked] = useState(item.done);
    const [isEditable, setIsEditable] = useState(false);

const [newTitle, setNewTitle] = useState(item.title);


    const handleChecked = (e) => {
        setIsChecked(e.target.checked);
        toggleDone(item.id);
    }

    const handleSave = () => {
    changeTitle(item.id, newTitle);
    setIsEditable(false);
};

    if (isEditable)
        return(
        <div className="item">
            <input 
                type="text" 
                value={newTitle} 
                onChange={(e) => setNewTitle(e.target.value)} 
            />
            <button onClick={handleSave}>Save</button>
        </div>
    );


    
    else
    return (
        <div className="item">
                        <input type="checkbox" checked={isChecked} onChange={handleChecked} />
                        {/*<span className={`task-title ${item.done ? 'done' : ''}`}>{item.title}</span>*/}
                        <span className={classNames('task-title', {done: item.done})} onClick={()=> setIsEditable(true)}>
                            {item.title}</span>
                        <button className='remove-btn' onClick={() => removeTask(item.id)}>
                            Delete</button>
                            <button onClick={() => setModelData(item)}>Model</button>
                    </div>
    );
}

export default Item;
