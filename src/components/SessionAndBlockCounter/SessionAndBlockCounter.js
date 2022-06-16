import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { globalStateUpdate } from '../../actions';
import './SessionAndBlockCounter.scss';

const SessionAndBlockCounter = ({remainBreakTime}) => {

    const dispatch = useDispatch();
    const globalStateReducer = useSelector(state => state.globalStateReducer)

    const {currentSession, maxSession, currentBlock, maxBlock} = globalStateReducer;

    useEffect(() => {
       
        if (remainBreakTime < 1) {
            
            if (currentSession < maxSession) {

                dispatch(
                    globalStateUpdate(prevState => ({
                    ...prevState,
                    currentSession: currentSession + 1,
                    }))
                )

            } else {

                if (currentBlock < maxBlock) {

                    dispatch(
                        globalStateUpdate(prevState => ({
                        ...prevState,
                        currentBlock: currentBlock + 1,
                        currentSession: 1,
                        }))
                    )

                } else {

                    dispatch(
                        globalStateUpdate(prevState => ({
                        ...prevState,
                        currentBlock: 1,
                        currentSession: 1,
                        }))
                    )

                }

            }
        }

        },[currentBlock, currentSession, dispatch, maxBlock, maxSession, remainBreakTime]
    )

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