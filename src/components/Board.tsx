import { useSelector } from 'react-redux';
import useBoardDispatch from '../store/actionCreators';

const Board = () => {
    const { cmdClicked } = useBoardDispatch()
    const board = useSelector((b: BoardState) => b.board);
    const rows = [1, 2, 3];
    const cols = [1, 2, 3];
    return (
        <>
            <table className="board">
                <tbody>
                    {rows.map((r) => (
                        <tr key={r} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            {cols.map((c) => {
                                return (
                                    <td
                                        key={r * 3 + c}
                                        onClick={() => {
                                            cmdClicked(r, c);
                                        }}
                                    >
                                        {board[(r - 1) * 3 + c - 1]}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>

    )
}

export default Board