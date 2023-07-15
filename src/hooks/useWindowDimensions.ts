import { useLayoutEffect, useState } from "react"

type TDimensions = { x: number, y: number }

/*
    calls a function on each passed number (which in here is 10) window size increment or decrement
 */
function onResize(callOnLength: number, callback: Function) {
    let size = window.innerWidth;

    window.addEventListener("resize", (e) => {
        if (e.target instanceof Window) {
            const x = e.target.innerWidth;

            if ((x - size) >= callOnLength || (x - size) <= -callOnLength) {
                size = x;
                callback();
            }
        }
    })
}

export default function useWindowDimensions(): TDimensions {
    const [dimensions, setDimensions] = useState({ x: window.innerWidth, y: window.innerHeight })

    useLayoutEffect(() => {
        onResize(10, () => {
            setDimensions({ x: window.innerWidth, y: window.innerHeight })
        });
    }, [])

    return dimensions;
}
