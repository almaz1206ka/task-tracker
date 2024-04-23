import { FC } from "react"

import style from './TasksColumn.module.css'

import { ITask } from "../../types/data";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { rootSlice } from "../../redux/appReducer";
import { DropArea } from "../DropArea/DropArea";
import { TaskCard } from "../TaskCard/TaskCard";

interface ITaskProps {
    title: string,
    tasks: ITask[],
    status: string,
}


export const TasksColumn:FC<ITaskProps> = ({...props}) => {

    const {tasks, title, status} = props;

    const {setActiveCard, changeTaskStatus, editTitle, handleChangeEditTitle, editTitleEnd} = rootSlice.actions;
    const {activeCard, editedTitle} = useAppSelector(state => state.rootSlice)
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
        <div
            className={style.table} 
            onDrop={() => onDrop(status, 0)} 
            onDragOver={e => e.preventDefault()}
        >
            <ul className={style.table__content} onKeyDown={(e) => e.key === 'Enter' && dispatch(editTitleEnd())}>
                <h4>{title}</h4>
                <DropArea onDrop={() => onDrop(status, 0)}/>
                {tasks.map((task, idx) => {
                    return task.status === status && (
                        <>
                            <TaskCard
                                key={idx} 
                                task={task}
                                dragStart={() => dispatch(setActiveCard(idx))}
                                dragEnd={() => dispatch(setActiveCard(null))}
                                changeEditStatus={() => dispatch(editTitle(idx))}
                            />
                            {task.edited === true
                                && 
                            <input type="text" value={editedTitle} autoFocus onChange={(e) => dispatch(handleChangeEditTitle(e.target.value))} />
                            }
                            <DropArea 
                                onDrop={() => onDrop(status, idx + 1)} 
                            />
                        </>
                    )
                })}
            </ul>
        </div>
    )
};