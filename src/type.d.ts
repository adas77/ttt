type BoardState = {
    board: str[]
    whoNext: str
    result: str[]
    all: boolean
}

type BoardAction = {
    type: string
    r?: number
    c?: number
}

type DispatchType = (args: BoardAction) => BoardAction
