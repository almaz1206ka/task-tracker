export interface ITask {
    id?: number,
    title: string,
    status: string,
    edited: boolean
};

export interface ITaskState {
    tasks: ITask[],
    task: ITask,
    isDropped: boolean,
    title: string,
    activeCard: null | number,
    editedTitle: string
}

export type TTypes = {
    test: string
}