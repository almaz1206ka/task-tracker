import { FC } from "react";
import { rootSlice } from "../../redux/appReducer";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import style from './DragContainer.module.css'


export const DragContainer: FC = () => {
    const {handleChange, addTask} = rootSlice.actions;

    const {planned, inProgress, done, title} = useAppSelector(state => state.rootSlice);
    console.log(planned);
    
    const dispatch = useAppDispatch();

    

    return (
        <div className={style.container}>
            <label onKeyDown={(e) => e.key === 'Enter' && dispatch(addTask())}>
                <h4>Добавить задачу</h4>
                <input type="text" value={title} onChange={e => dispatch(handleChange(e.target.value))} placeholder="..." />
            </label>
            <div className={style.main}>
                <ul className={style.table}>
                    <p>Planned</p>
                    {planned.map(task => {
                        return (
                            <div key={task.id} className={style.task} draggable={true}>
                                <p>id: {task.id}</p>
                                <p>{task.title}</p>                        
                            </div>
                        )
                    })}
                </ul>
                <ul className={style.table}>
                    <p>In progress</p>
                    {inProgress && inProgress.map(task => {
                        return (
                            <>
                                <p key={task.id} className={style.task}>{task.title}</p>                            
                            </>
                        )
                    })}
                </ul>
                <ul className={style.table}>
                    <p>Done</p>
                    {done && done.map(task => {
                        return (
                            <>
                                <p key={task.id} className={style.task}>{task.title}</p>
                            </>
                        )
                    })}
                </ul>
            </div>
        </div>
        
    )
}