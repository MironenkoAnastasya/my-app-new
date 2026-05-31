import { nanoid } from "nanoid";
import Item from "../ToDoList/Item";

export const TaskActionTypes = {
    ADD_TASK: 'ADD_TASK',
    REMOVE_TASK: 'REMOVE_TASK',
    TOGGLE_DONE: 'TOGGLE_DONE',
    CHANGE_TITLE: 'CHANGE_TITLE',
    Fill_TASK: 'Fill_TASK',
}

const TaskReducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case TaskActionTypes.ADD_TASK:
            return [...state, { id: nanoid(), title: action.payload, done: false}]
        case TaskActionTypes.REMOVE_TASK:
            return state.filter((item) => item.id !== action.payload)
        case TaskActionTypes.TOGGLE_DONE:
            return state.map((item) =>
            item.id === action.payload ? {...item, done: !item.done } : item,
        )
        case TaskActionTypes.CHANGE_TITLE:
            return state.map((item) =>
            item.id === action.payload.id ? {...item, title: action.payload.title } : item,
        )
        case TaskActionTypes.Fill_TASK:
            return action.payload
            default:
                return state
    }
}
export default TaskReducer 