import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useTimer from '../hooks/useTimer';
import useBoardDispatch from '../store/actionCreators';
import Alert from './Alert';
import Time from './Info';

const Score = () => {
    const { cmdRestartBoard } = useBoardDispatch()
    const [winner, all, whoNext] = useSelector((s: BoardState) => {
        return [s?.result?.length > 0 ? s.result[0] : null, s.all, s.whoNext];
    });
    const { time, resetClock, stopClock } = useTimer()
    useEffect(() => {
        if (winner || all) {
            stopClock()
        } else {
            resetClock()
        }
        return () => {

        }
    }, [whoNext, winner, all])

    const clear = () => {
        cmdRestartBoard()
        resetClock()
    }

    return (
        <div >
            <button onClick={clear} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">RESTART BOARD</button>
            {time <= 0 ?
                <Alert result={`Wygrywa ${whoNext === "X" ? "O" : "X"}`} msg={`Upłynął czas dla ${whoNext}`} cmdClear={clear} />
                :
                <>
                    <Time ms={time} title={'Czas'} />
                    <Time ms={whoNext} title={'Następny'} />
                </>
            }
            {winner ? <Alert result={`Wygrywa ${winner}`} msg={`Wygrana podczas gry`} cmdClear={clear} />
                :
                all ? <Alert result={`Remis`} msg={`Nikt nie wygrał`} cmdClear={clear} />
                    :
                    ""
            }
        </div>
    )
}

export default Score