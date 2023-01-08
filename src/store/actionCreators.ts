import { useDispatch } from "react-redux";
import { CLICK, RESTART } from "./actionTypes";

const useBoardDispatch = () => {
    const dispatch: DispatchType = useDispatch();

    const cmdClicked = (r: number, c: number) => {
        dispatch({
            type: CLICK,
            r: r,
            c: c
        })
    };

    const cmdRestartBoard = () => {
        dispatch({
            type: RESTART,
        })
    };

    return { cmdClicked, cmdRestartBoard }
}

export default useBoardDispatch