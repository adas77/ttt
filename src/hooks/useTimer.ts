import { useEffect, useState } from 'react';

const useTimer = () => {
    const MOVE_TIME_MILLIS = 5000
    const [time, setTime] = useState(MOVE_TIME_MILLIS)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time - 1000)
        }, 1000);

        return () => clearInterval(interval);
    }, [time]);




    const resetClock = () => {
        setTime(MOVE_TIME_MILLIS)
    }
    return { time, resetClock }
}

export default useTimer