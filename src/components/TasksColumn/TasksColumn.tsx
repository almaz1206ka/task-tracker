import { FC } from "react"

import style from './TasksColumn.module.css'

import { ITask } from "../../types/data";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import appReducer, { rootSlice } from "../../redux/appReducer";
import { DropArea } from "../DropArea/DropArea";

interface ITaskProps {
    title: string,
    tasks: ITask[],
    status: string,
}


export const TasksColumn:FC<ITaskProps> = ({...props}) => {

    const {tasks, title, status} = props;

    const {setActiveCard} = rootSlice.actions;
    const {activeCard} = useAppSelector(state => state.rootSlice)
    const dispatch = useAppDispatch();

    return (
        <div className={style.table}>
            <ul>
                <h4>{title}</h4>
                {tasks.map((task, idx) => {
                    return task.status === status && (
                        <>
                            <li key={idx} 
                            className={style.task}
                            draggable 
                            onDragStart={() => dispatch(setActiveCard(task.id))} 
                            onDragEnd={() => dispatch(setActiveCard(null))}
                            >
                                <span>id: {task.id}</span>
                                <span>{task.title}</span>
                            </li>
                            <DropArea status={status} index={task.id + 1} />
                        </>
                        
                    )
                })}
            </ul>
        </div>
    )
}