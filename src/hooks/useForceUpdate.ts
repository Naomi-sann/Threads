import { useState } from "react";

const useForceUpdate = () => {
    const [, setState] = useState<boolean>(false);

    const forceUpdate = () => {
        setState(false);
    }

    return forceUpdate;
}

export default useForceUpdate;