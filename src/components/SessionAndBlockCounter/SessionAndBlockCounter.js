import './SessionAndBlockCounter.scss';

const SessionAndBlockCounter = ({globalState}) => {

    const {currentSession, maxSession, currentBlock, maxBlock} = globalState;

    return (
        <div
            className="session-and-block-counter"
            data-testid="session-and-block-counter"
        >
            <p>
                Block 
                <span 
                    className="current-block" 
                    data-testid="current-block"> {currentBlock}
                </span>/
                <span 
                    className="max-block" 
                    data-testid="max-block">{maxBlock}
                </span>, 
                Session 
                <span 
                    className="current-session" 
                    data-testid="current-session"> {currentSession}
                </span>/
                <span 
                    className="max-session" 
                    data-testid="max-session">{maxSession}
                </span>
            </p>
        </div>
    )
}

export default SessionAndBlockCounter;