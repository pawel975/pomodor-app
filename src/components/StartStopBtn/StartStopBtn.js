import './StartStopBtn.scss';
import {BsFillPlayFill as PlayIcon} from 'react-icons/bs';
import {BsFillPauseFill as StopIcon} from 'react-icons/bs';

const StartStopBtn = () => {

    return (
        <button className="start-stop-btn" data-testid="start-stop-btn">
            {/* <PlayIcon className='start-stop-icon play-icon'/> */}
            <StopIcon className='start-stop-icon stop-icon'/>
        </button>
    )
}

export default StartStopBtn;
