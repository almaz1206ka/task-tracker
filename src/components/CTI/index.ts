import { title } from "process";

export const sortArr = (arr: number[]) => {
    const even: number[] = [];
    const odd: number[] = [];
    arr.map(item => {
        if(item % 2 === 0) {
            even.push(item);
        } else {
            odd.push(item)
        }
    });
    return {even, odd}
};

type TType = {
    [key: number]: string
}
enum length {
    "error" = "3",
    "notConnect" = "0",
    "success" = "5"
}

export const arrLength = (arr: any[]) => {
    return length["notConnect"] ?? "success"
}