import { FC } from "react"

import style from './TasksColumn.module.css'

import { ITask } from "../../types/data";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { rootSlice } from "../../redux/appReducer";
import { DropArea } from "../DropArea/DropArea";

interface ITaskProps {
    title: string,
    tasks: ITask[],
    status: string,
}


export const TasksColumn:FC<ITaskProps> = ({...props}) => {

    const {tasks, title, status} = props;

    const {setActiveCard, changeTaskStatus} = rootSlice.actions;
    const {activeCard} = useAppSelector(state => state.rootSlice)
    const dispatch = useAppDispatch();    

    const onDrop = (status: string, position: number) => {
        if(activeCard === null || activeCard === undefined) return;

        const taskToMove = tasks[activeCard];
        const updatedTasks = tasks.filter((task, idx) => idx !== activeCard);
        
        updatedTasks.splice(position, 0, {
            ...taskToMove,
            status: status
        })
        dispatch(changeTaskStatus(updatedTasks));
    };  

    return (
        <div className={style.table}>
            <ul>
                <h4>{title}</h4>
                <DropArea onDrop={() => onDrop(status, 0)}/>
                {tasks.map((task, idx) => {
                    return task.status === status && (
                        <>
                            <li key={idx} 
                                className={style.task}
                                draggable 
                                onDragStart={() => dispatch(setActiveCard(idx))} 
                                onDragEnd={() => dispatch(setActiveCard(null))}
                            >
                                <span>Task: {task.title}</span>
                            </li>
                            <DropArea onDrop={() => onDrop(status, idx + 1)} />
                        </>
                    )
                })}
            </ul>
        </div>
    )
}