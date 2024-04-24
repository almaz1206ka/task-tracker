import { FC } from "react";
import { rootSlice } from "../../redux/appReducer";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import style from './Input.module.css'


export const InputArea: FC = () => {

    const {handleChange, addTask} = rootSlice.actions;

    const {title} = useAppSelector(state => state.rootSlice);

    const dispatch = useAppDispatch();

    return (
        <div className={style.input_area}>
            <label onKeyDown={(e) => e.key === 'Enter' && dispatch(addTask())}>
                <h4>Добавить задачу</h4>
                <input type="text" value={title} onChange={e => dispatch(handleChange(e.target.value))} placeholder="..." />
            </label>
            <button onClick={() => dispatch(addTask())}>Добавить</button>
        </div>
    )
}