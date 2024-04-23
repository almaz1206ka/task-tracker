import { createSlice } from "@reduxjs/toolkit";

import { ITaskState } from "../types/data";

const initialState: ITaskState = {
    tasks: [
        {
            title: 'Погулять с собакой',
            status: 'in progress'
        },
        {
            title: 'Поездка в деревню',
            status: 'done'
        },
        {
            title: 'Сходить в кино',
            status: 'done'
        },
        {
            title: 'Учить React',
            status: 'in progress'
        },
        {
            title: 'Заняться йогой',
            status: 'planned'
        },
    ],
    task: {
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
            state.tasks = [...state.tasks, {...state.task, title: state.title, status: 'planned'}];
            state.title = ''
        },
        setActiveCard(state, action) {
            state.activeCard = action.payload
        },
        changeTaskStatus(state, action) {
            state.tasks = [...action.payload]
        }
    }
});

export default rootSlice.reducer;