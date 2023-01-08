import { useEffect, useState } from 'react';

const useTimer = () => {
    const MOVE_TIME_MILLIS = 5000
    const [time, setTime] = useState(MOVE_TIME_MILLIS)
    const [stop, setStop] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            stop || setTime(time - 1000)
        }, 1000);

        return () => clearInterval(interval);
    }, [time, stop]);

    const resetClock = () => {
        setStop(false)
        setTime(MOVE_TIME_MILLIS)
    }

    const stopClock = () => {
        setStop(true)
    }
    return { time, resetClock, stopClock }
}

export default useTimer