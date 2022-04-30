import './StartPauseBtn.scss';
import {BsFillPlayFill as PlayIcon} from 'react-icons/bs';
import {BsFillPauseFill as PauseIcon} from 'react-icons/bs';

const StartPauseBtn = ({isTimerRun, handleStartPauseBtnClick}) => {

    return (
        <button 
            onClick={handleStartPauseBtnClick}
            className="start-pause-btn" 
            data-testid="start-pause-btn"
        >
            {isTimerRun ? 
                <PauseIcon className='start-pause-icon' data-testid="pause-icon"/> :
                <PlayIcon className='start-pause-icon' data-testid="play-icon"/> 
            }
        </button>
    )
}

export default StartPauseBtn;
