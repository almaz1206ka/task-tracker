import { createSlice } from "@reduxjs/toolkit";

import { ITaskState } from "../types/data";

const oldTasks = localStorage.getItem('tasks');


const initialState: ITaskState = {
    tasks: [
        {
            id: 2,
            title: '124',
            status: 'in progress'
        },
        {
            id: 2,
            title: '124',
            status: 'done'
        },
        {
            id: 2,
            title: '124',
            status: 'done'
        },
        {
            id: 2,
            title: '124',
            status: 'in progress'
        },
        {
            id: 2,
            title: '124',
            status: 'planned'
        },
    ],
    task: {
        id: 0,
        title: '',
        status: ''
    },
    isDropped: false,
    title: '',
    activeCard: null
};


export const rootSlice = createSlice({
    name: 'task-tracker',
    initialState,
    reducers: {
        handleChange(state, action) {
            state.title = action.payload;
        },
        addTask(state) {
            state.tasks = [...state.tasks, {...state.task, id: state.task.id += 1, title: state.title, status: 'planned'}];
            state.title = ''
        },
        setActiveCard(state, action) {
            state.activeCard = action.payload
        },
        onDrope(state, status) {
            console.log(`${state.activeCard} is going to place into ${status} and the position`);
            
        }
    }
});

export default rootSlice.reducer;