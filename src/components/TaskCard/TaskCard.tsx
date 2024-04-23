import { FC } from "react"

import style from '../TasksColumn/TasksColumn.module.css';
import { ITask } from "../../types/data";

import editIcon from '../../img/edit.png'

interface ITaskCard {
    task: ITask,
    dragStart: () => void,
    dragEnd: () => void,
    changeEditStatus: () => void;
}

export const TaskCard: FC<ITaskCard> = ({...props}) => {
    const {task, dragEnd, dragStart, changeEditStatus} = props;
    return (
        <li 
            className={style.task}
            draggable 
            onDragStart={() => dragStart()} 
            onDragEnd={() => dragEnd()}
        >
            <span>Task: {task.title}</span>
            <img src={editIcon} alt="редактировать" className={style.edit_icon} onClick={() => changeEditStatus()}/>
        </li>
    )
}