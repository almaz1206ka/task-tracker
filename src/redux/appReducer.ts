import { createSlice } from "@reduxjs/toolkit";

import { ITaskState } from "../types/data";

const initialState: ITaskState = {
    planned: [],
    inProgress: [],
    done: [],
    task: {
        id: 0,
        title: ''
    },
    isDropped: false,
    title: ''
};


export const rootSlice = createSlice({
    name: 'task-tracker',
    initialState,
    reducers: {
        handleChange(state, action) {
            state.title = action.payload;
        },
        addTask(state) {
            state.planned = [...state.planned, {...state.task, id: state.task.id += 1, title: state.title}];
            state.title = ''
        }
    }
});

export default rootSlice.reducer;