import SkipBtn from '../SkipBtn/SkipBtn';
import './ControlPanel.scss';

const ControlPanel = () => {
    return (
        <div className="control-panel" data-testid='control-panel'>
            <SkipBtn/>
        </div>
    )
}

export default ControlPanel;