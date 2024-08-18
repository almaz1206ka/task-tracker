import React, { useEffect, useState } from "react";
import { arrLength, sortArr } from ".";


export const Cti = () => {

    const [time, setTime] = useState({minutes: "00", seconds: "00"});
    const [toggle, setToggle] = useState(false);
    const arr: any[] = [1, 2, 3, 4, 5];
    // const even = sortArr(arr).even;
    // const odd = sortArr(arr).odd;
    // console.log(odd)
    // console.log(even);
    const test = arrLength(arr);
    console.log(test);
    

    const play = () => {
        setTime(({minutes, seconds}): {minutes: string, seconds: string} => {
            return {
                minutes: seconds === "59" ? "0" + String(Number(minutes[1]) + 1) : (minutes[1] === "9" && seconds === "59") ? String(Number(minutes[0]) + 1) + minutes[1] : minutes,
                seconds: seconds === "59" ? "00" : seconds[1] === "9" ? String(Number(seconds[0]) + 1) + "0" : seconds[0] + String(Number(seconds[1]) + 1)
            }
        });
        setToggle(true)
    };
    const pause = () => {
        setToggle(false)
    }

    const reset = () => {
        setTime({seconds: "00", minutes: "00"})
    }

    useEffect(() => {
        const timer = setInterval(() => toggle && play(), 30);

        return () => clearInterval(timer)
    });


    return <div style={{position: "fixed", top: 0, marginBottom: "20px", backgroundColor: "ButtonShadow", width: "100%", display: "flex", justifyContent: "space-around"}}>
        <button onClick={() => play()}>play</button>
        <button onClick={() => pause()}>pause</button>
        <button onClick={() => reset()}>reset</button>
        <span>{`${time.minutes}:${time.seconds}`}</span>
        </div>
}