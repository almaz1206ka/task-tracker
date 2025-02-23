import { createSlice } from "@reduxjs/toolkit";

import { ITaskState } from "../types/data";

const initialState: ITaskState = {
    tasks: [
        {
            title: 'Погулять с собакой',
            status: 'in progress',
            edited: false
        },
        {
            title: 'Поездка в деревню',
            status: 'done',
            edited: false
        },
        {
            title: 'Сходить в кино',
            status: 'done',
            edited: false
        },
        {
            title: 'Учить React',
            status: 'in progress',
            edited: false
        },
        {
            title: 'Заняться йогой',
            status: 'planned',
            edited: false
        },
        {
            title: 'Погулять',
            status: 'done',
            edited: false
        }
    ],
    task: {
        title: '',
        status: '',
        edited: false
    },
    isDropped: false,
    title: '',
    activeCard: null,
    editedTitle: ''
};

export const rootSlice = createSlice({
    name: 'task-tracker',
    initialState,
    reducers: {
        handleChange(state, action) {
            state.title = action.payload;
        },
        addTask(state) {
            if(state.title.trim() !== '') {
                state.tasks = [...state.tasks, {...state.task, title: state.title, status: 'planned'}];
            };
            state.title = ''
        },
        setActiveCard(state, action) {
            state.activeCard = action.payload
        },
        changeTaskStatus(state, action) {
            state.tasks = [...action.payload]
        },
        handleChangeEditTitle(state, action) {            
            state.editedTitle = action.payload
        },
        editTitle(state, action) {
            state.tasks = state.tasks.map((task, idx) => idx === action.payload ?
                {...task, edited: true }
                    : 
                {...task, edited: false}
            )
        },
        editTitleEnd(state) {
            state.tasks = state.tasks.map((task, idx) => {
                if(task.edited === true && state.editedTitle !== '') {
                    return {
                        ...task,
                        title: state.editedTitle,
                        edited: false
                    }
                } else {
                    return {
                        ...task,
                        title: task.title,
                        edited: false
                    }
                };
            })
            state.editedTitle = '';
        }
    }
});

export default rootSlice.reducer;