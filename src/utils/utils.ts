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
 */

function checkPaths(path: string | string[], currentPath: string): boolean;
function checkPaths(path: string | string[], currentPath: string) {
    const isEqualPath = (p: string) => {
        if (currentPath.startsWith(p) && p.length > 1) return true;
        else if (p === currentPath) return true;

        return false;
    }

    if (Array.isArray(path)) {
        for (const p of path) {
            return isEqualPath(p);
        }
    }
    else {
        return isEqualPath(path);
    }
}

export { checkPaths };