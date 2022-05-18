import { useEffect } from 'react';
import './SessionAndBlockCounter.scss';

const SessionAndBlockCounter = ({globalState, setGlobalState, remainBreakTime}) => {

    const {currentSession, maxSession, currentBlock, maxBlock} = globalState;

    useEffect(() => {
       
        if (remainBreakTime === 0) {

            if (currentSession < maxSession) {

                setGlobalState(prevState => ({
                    ...prevState,
                    currentSession: currentSession + 1,
                }))

            } else {

                if (currentBlock < maxBlock) {

                    setGlobalState(prevState => ({
                        ...prevState,
                        currentBlock: currentBlock + 1,
                        currentSession: 1,
                    }))

                } else {

                    setGlobalState(prevState => ({
                        ...prevState,
                        currentBlock: 1,
                        currentSession: 1,
                    }))

                }

            }
        }

    },[currentBlock, currentSession, maxBlock, maxSession, remainBreakTime, setGlobalState])

    return (
        <div
            className="session-and-block-counter"
            data-testid="session-and-block-counter"
        >
            <p>
                Session 
                <span 
                    className="current-session" 
                    data-testid="current-session"> {currentSession}
                </span>/
                <span 
                    className="max-session" 
                    data-testid="max-session">{maxSession} 
                 </span>, 
                Block 
                <span 
                    className="current-block" 
                    data-testid="current-block"> {currentBlock}
                </span>/
                <span 
                    className="max-block" 
                    data-testid="max-block">{maxBlock}
                </span>, 
            </p>
        </div>
    )
}

export default SessionAndBlockCounter;