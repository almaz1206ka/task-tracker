import { FC, useState } from "react";

import style from './DropArea.module.css'
import { rootSlice } from "../../redux/appReducer";
import { useAppDispatch } from "../../hooks/redux";

interface IDropAreaProps {
    status: string,
    index: number,
}

export const DropArea: FC<IDropAreaProps> = ({...props}) => {
    const {index, status} = props;
    const [showDrop, setShowDrop] = useState(false);

    const {onDrope} = rootSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <section 
            className={showDrop ? style.task : style.hide_task}
            onDragEnter={() => setShowDrop(true)} 
            onDragLeave={() => setShowDrop(false)}
            onDrop={() => {
                dispatch(onDrope(status))
                setShowDrop(false)
            }}
            onDragOver={e => e.preventDefault()}
        >
            Drop Here
        </section>
    )
};
