import { FC } from "react";
import { useAppSelector } from "../../hooks/redux";

import style from './DragContainer.module.css'
import { TasksColumn } from "../TasksColumn/TasksColumn";
import { InputArea } from "../Input/Input";


export const DragContainer: FC = () => {

    const {tasks} = useAppSelector(state => state.rootSlice);
    
    return (
        <div className={style.container}>
            <InputArea />
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