import { useSelector } from 'react-redux';
import './SessionAndBlockCounter.scss';

const SessionAndBlockCounter = () => {
    
    const globalStateReducer = useSelector(state => state.globalState)

    const {currentSession, maxSession, currentBlock, maxBlock} = globalStateReducer;

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