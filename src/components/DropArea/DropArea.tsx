import { FC, useState } from "react";

import style from './DropArea.module.css';

interface IDropAreaProps {
    onDrop: () => void;
}

export const DropArea: FC<IDropAreaProps> = ({...props}) => {
    const {onDrop} = props;
    const [showDrop, setShowDrop] = useState(false);

    return (
        <section 
            className={showDrop ? style.task : style.hide_task}
            onDragEnter={() => setShowDrop(true)} 
            onDragLeave={() => setShowDrop(false)}
            onDrop={() => {
                onDrop();
                setShowDrop(false)
            }}
            onDragOver={e => e.preventDefault()}
        >
            Drop Here
        </section>
    )
};
