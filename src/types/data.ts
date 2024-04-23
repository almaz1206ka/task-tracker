export interface ITask {
    id?: number,
    title: string,
    status: string
};

export interface ITaskState {
    tasks: ITask[],
    task: ITask,
    isDropped: boolean,
    title: string,
    activeCard: null | number
}