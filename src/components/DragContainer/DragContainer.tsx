import { FC } from "react";
import { rootSlice } from "../../redux/appReducer";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import style from './DragContainer.module.css'
import { TasksColumn } from "../TasksColumn/TasksColumn";


export const DragContainer: FC = () => {

    const {handleChange, addTask} = rootSlice.actions;

    const {tasks, title} = useAppSelector(state => state.rootSlice);
    
    const dispatch = useAppDispatch();

    return (
        <div className={style.container}>
            <label onKeyDown={(e) => e.key === 'Enter' && dispatch(addTask())}>
                <h4>Добавить задачу</h4>
                <input type="text" value={title} onChange={e => dispatch(handleChange(e.target.value))} placeholder="..." />
            </label>
            <div className={style.main}>
                <>
                    <TasksColumn    tasks={tasks}
                                    title="Planned"
                                    status='planned'
                    />
                    <TasksColumn    tasks={tasks} 
                                    title="In Progress"
                                    status="in progress"
                    />
                    <TasksColumn    tasks={tasks}
                                    title="Done"
                                    status="done"
                    />
                </>
            </div>
        </div>
    )
}