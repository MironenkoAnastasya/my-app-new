import React, { useEffect, useReducer, useState } from 'react';
import "./ToDoList.css";
import ToDoFormAdd from './ToDoFormAdd';
import Filters from './Filters';
import Item from './Item';
import items from './data';
import Model from '../model/Model';
import TaskReducer, { TaskActionTypes } from '../reducer/TaskReducer';
import { type } from '@testing-library/user-event/dist/type';



const ToDoList = () => {

    const [tasks, dispatch] = useReducer(TaskReducer, items);

    const [activeFilter, setActiveFilter] = useState('all');
    const [visible, setvisibleModel] = useState(false);
    const [currentTask, setcurrentTask] = useState(null);

    useEffect(() => {
        const data = localStorage.getItem('tasks');
        if (data) {
            dispatch({
                type: TaskActionTypes.Fill_TASK,
                payload: JSON.parse(data),
            });
        }
     }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
     }, [tasks])

     const setModelData = (task) => {
        setvisibleModel(true);
        setcurrentTask(task);
     }
    const addTask = (value) => {
        dispatch({
            type: TaskActionTypes.ADD_TASK,
            payload: value,
        });
        //setTasks([...tasks, {id: nanoid(), title: value, done: false}])
    }

    const removeTask = (id) => {
        dispatch({
            type: TaskActionTypes.REMOVE_TASK,
            payload: id,
        })
    }

    const toggleDone = (id) => {
        dispatch({
            type: TaskActionTypes.TOGGLE_DONE,
            payload: id,
        })
    }

    const changeTitle = (id, title) =>{
        dispatch({
            type: TaskActionTypes.CHANGE_TITLE,
            payload: {id, title},
        })
    }

    const filtersData = {
        all: () => true,
        done: (item) => item.done,
        todo: (item) => !item.done,
    }

    return (
        <div className='container-todo'>
            <h1> ToDoList</h1>

           <ToDoFormAdd addTask={addTask} />

            <div className="todo">
                
                <Filters setActiveFilter={setActiveFilter} activeFilter={activeFilter} filtersData={filtersData} />

                <div className="list">
                    {tasks.filter(filtersData[activeFilter]).map(item => 

                    <Item 
                    item={item} key={item.id} 
                    removeTask={removeTask} toggleDone={toggleDone}
                    changeTitle={changeTitle}
                    setModelData={setModelData}
                    />
                    )}
                    
                </div>

            </div>
            <Model visible={visible} 
            onClose={() => setvisibleModel(false)} 
            >
            <h1>Model</h1>
            <p>{currentTask?.title}</p>
            </Model>
        </div>
    );
}

export default ToDoList;
