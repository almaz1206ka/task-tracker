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

enum Directions {
    Up = 1,
    Down = 2,
    Left = 3,
    Right
}

console.log(Directions.Up); // 1
console.log(Directions[Directions.Up]); // Up