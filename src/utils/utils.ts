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

type TCursorPosition = Record<"x" | "y", number>;

function getMultiDeviceCursorPosition(e: (MouseEvent | TouchEvent) | (React.MouseEvent | React.TouchEvent)): TCursorPosition {
    const event = e as Event;

    if (event.type.startsWith("mouse")) return { x: (event as (MouseEvent | React.MouseEvent)).pageX, y: (event as (MouseEvent | React.MouseEvent)).pageY }
    else if (event.type.startsWith("touch") && (event as TouchEvent | React.TouchEvent).touches[0]) {

        return { x: (event as (TouchEvent | React.TouchEvent)).touches[0].pageX, y: (event as (TouchEvent | React.TouchEvent)).touches[0].pageY }
    }
    console.log(event);

    return { x: 0, y: 0 }
}


export { checkPaths, getMultiDeviceCursorPosition };