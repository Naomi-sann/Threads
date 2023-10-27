/**
 * @function checkPath
 * 
 * @param path 
 * @param currentPath 
 * 
 * @returns {boolean}
 * 
 * returns a boolean depending on the current url path matches with the specific required url for showing activated icons
 * 
**/

import { TPosition } from "@/types";

function checkPaths(path: string | string[], currentPath: string): boolean;
function checkPaths(path: string | string[], currentPath: string) {
    const isEqualPath = (p: string) => {
        if (currentPath.startsWith(p) && p.length > 1) return true;
        else if (p === currentPath) return true;

        return false;
    }

    if (Array.isArray(path)) {
        for (const p of path) {
            if (isEqualPath(p)) return true;
        }
    }
    else {
        return isEqualPath(path);
    }
}

/**
 * 
 * @function getMultiDeviceCursorPosition
 * 
 * @param e the mouse or touch event
 * 
 * @returns {{x:number,y:number}} an object indicating the current mouse or touch position
 * 
 * pass the Mouse | touch event to receive an object of current x, y position
 */

function getMultiDeviceCursorPosition(e: (MouseEvent | TouchEvent) | (React.MouseEvent | React.TouchEvent)): TPosition {
    const event = e as Event;

    if (event.type.startsWith("mouse")) return { x: (event as (MouseEvent | React.MouseEvent)).pageX, y: (event as (MouseEvent | React.MouseEvent)).pageY }
    else if (event.type.startsWith("touch") && (event as TouchEvent | React.TouchEvent).touches[0]) {

        return { x: (event as (TouchEvent | React.TouchEvent)).touches[0].pageX, y: (event as (TouchEvent | React.TouchEvent)).touches[0].pageY }
    }
    console.log(event);

    return { x: 0, y: 0 }
}

function groupDigits(number: number | string = "12345678"): string {
    let initialValue;
    if (typeof number === "number")
        initialValue = number.toString();
    else initialValue = number;

    let i = initialValue.length;
    let digitCounter = 0;

    const result = initialValue.split("");

    while (i--) {
        if (digitCounter < 2)
            digitCounter++;
        else {
            result.splice(i, 0, ",");
            digitCounter = 0;
        }
    }

    return result.join("");
}

export { checkPaths, getMultiDeviceCursorPosition, groupDigits };
