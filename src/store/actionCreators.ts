// import * as actionTypes from "./actionTypes"

import { useDispatch } from "react-redux";
import { CLICK, RESTART } from "./actionTypes";

// export function addArticle(article: IArticle) {
//   const action: ArticleAction = {
//     type: actionTypes.ADD_ARTICLE,
//     article,
//   }

//   return simulateHttpRequest(action)
// }

// export function removeArticle(article: IArticle) {
//   const action: ArticleAction = {
//     type: actionTypes.REMOVE_ARTICLE,
//     article,
//   }
//   return simulateHttpRequest(action)
// }

// export function simulateHttpRequest(action: BoardAction) {
//   return (dispatch: DispatchType) => {
//     setTimeout(() => {
//       dispatch(action)
//     }, 1)
//   }
// }

// const actionCreators = () => {
// }
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

// const dispatch: DispatchType = useDispatch();

// export const cmdClicked = (r: number, c: number) => {
//     dispatch({
//         type: CLICK,
//         r: r,
//         c: c
//     })
// };

// export const cmdRestartBoard = () => {
//     dispatch({
//         type: RESTART,
//     })
// };

export default useBoardDispatch