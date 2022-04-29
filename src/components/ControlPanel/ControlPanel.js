import EndBtn from '../EndBtn/EndBtn';
import SkipBtn from '../SkipBtn/SkipBtn';
import StartStopBtn from '../StartStopBtn/StartStopBtn';
import './ControlPanel.scss';

const ControlPanel = () => {
    return (
        <div className="control-panel" data-testid='control-panel'>
            <SkipBtn/>
            <StartStopBtn/>
            <EndBtn/>
        </div>
    )
}

export default ControlPanel;