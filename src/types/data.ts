export interface ITask {
    id: number,
    title: string
};

export interface ITaskState {
    planned: ITask[],
    inProgress: ITask[],
    done: ITask[],
    task: ITask,
    isDropped: boolean,
    title: string
}