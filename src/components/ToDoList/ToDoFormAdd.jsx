import React, { useState } from 'react';

const ToDoFormAdd = ( {addTask} ) => {
    const [newTitle, setNewTitle] = useState('');
    const [titleError, setTtitleError] = useState(null);

    const handleSubmit = () => {

        if (newTitle.length < 3) {
            setTtitleError("Title must be at least 3 characters");
            return;
        }


        addTask(newTitle);
        setNewTitle("");
        setTtitleError(null);
     };

    return (
        <div>
            <div className='Form-add'>
                <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} 
                onKeyDown={(e)=> e.key === 'Enter' && handleSubmit()}
                />
                <button onClick={handleSubmit}>Add</button>
                {titleError && <div style={{color: 'red', fontSize: '.9em'}}>{titleError}</div>}
            </div>
        </div>
    );
}

export default ToDoFormAdd;
