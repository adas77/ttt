import * as actionTypes from "./actionTypes";

/* Tablica współrzędnych punktów w każdym wierszu
definiujących zwycięstwa: 
[ 
  [row1,col2, r2,c2, r3,c3], 
  ...
]
*/

const coords = [
    [0, 0, 0, 1, 0, 2],
    [1, 0, 1, 1, 1, 2],
    [2, 0, 2, 1, 2, 2],
    [0, 0, 1, 0, 2, 0],
    [0, 1, 1, 1, 2, 1],
    [0, 2, 1, 2, 2, 2],
    [0, 0, 1, 1, 2, 2],
    [0, 2, 1, 1, 2, 0]
];
function check(b: number[], c: number[]) {
    /* Sprawdzamy daną kombinację (c) w macierzy b,
       Jako wynik zwracamy wartość macierzy (b) - czy kółko
       czy krzyżyk (b[i1]) gdy kombinacja jest zwycięska. */
    let i1 = c[0] * 3 + c[1];
    let i2 = c[2] * 3 + c[3];
    let i3 = c[4] * 3 + c[5];
    return b[i1] === b[i2] && b[i2] === b[i3] ? b[i1] : null;
}
function determineResult(b: number[]) {
    /* Sprawdzamy wszystkie kombinacje rozwiązań,
       i filtrem zwracamy listę wyników pozytywnych.
    */
    return coords.map((c) => check(b, c)).filter((x) => x);
}

function all(b: number[]) {
    return b.filter((v) => v).length === 9;
}

const initialState: BoardState = {
    board: [],
    whoNext: "O",
    result: [],
    all: false
}

const reducer = (
    state: BoardState = initialState,
    action: BoardAction
): BoardState => {

    switch (action.type) {
        case actionTypes.CLICK:
            if (!action.r || !action.c) {
                break
            }
            let b = [...state.board];

            if (b[(action.r - 1) * 3 + action.c - 1]) {
                break
            }
            b[(action.r - 1) * 3 + action.c - 1] = state.whoNext;
            let s = {
                ...state,
                board: b,
                whoNext: state.whoNext === "X" ? "O" : "X",
                result: determineResult(b),
                all: all(b)
            };
            console.log(s);
            return s;
        case actionTypes.RESTART:
            return initialState

    }
    return state
}

export default reducer