import { useState } from 'react';
import { formatSecondsToMinutes } from '../../helpers';
import { initGlobalState } from '../App/App';
import SettingsSectionParam from '../SettingsSectionParam/SettingsSectionParam';
import './SettingsSection.scss';

const SettingsSection = ({globalState, setGlobalState, setIsModalOpen, setRemainLearnTime, setRemainBreakTime}) => {

    const userStateData = [
        {
            paramId: "learning-time",
            paramName: "Learning Time",
            paramValue: formatSecondsToMinutes(globalState.initLearnTime),
            min: 10,
            max: 120,
            type: 'time',
            globalStatePropName: 'initLearnTime'
        },
        {
            paramId: "break-time",
            paramName: "Break Time",
            paramValue: formatSecondsToMinutes(globalState.initBreakTime),
            min: 2,
            max: 30,
            type: 'time',
            globalStatePropName: 'initBreakTime'
        },
        {
            paramId: "long-break-time",
            paramName: "Long Break Time",
            paramValue: formatSecondsToMinutes(globalState.initLongBreakTime),
            min: 5,
            max: 60,
            type: 'time',
            globalStatePropName: 'initLongBreakTime'
        },
        {
            paramId: "sessions-per-block",
            paramName: "Sessions Per Block",
            paramValue: globalState.maxSession,
            min: 2,
            max: 6,
            type: 'none',
            globalStatePropName: 'maxSession'
        },
        {
            paramId: "amount-of-blocks",
            paramName: "Amount Of Blocks",
            paramValue: globalState.maxBlock,
            min: 1,
            max: 4,
            type: 'none',
            globalStatePropName: 'maxBlock'
        },
    ]
    
    const [tempStateToSaveToGlobal, setTempStateToSaveToGlobal] = useState(globalState);

    const handleAcceptChanges = (e) => {
        e.preventDefault();
        setRemainLearnTime(tempStateToSaveToGlobal.initLearnTime)
        setRemainBreakTime(tempStateToSaveToGlobal.initBreakTime)
        setGlobalState(prevState => ({
            ...prevState,
            ...tempStateToSaveToGlobal,
            isLearnPhaseActive: true,
            isLearningBlockActive: false,
            isTimerRun: false,
        }));
        setIsModalOpen(false);
    }

    const handleResetSettings = (e) => {
        e.preventDefault();
        setRemainLearnTime(initGlobalState.initLearnTime);
        setRemainBreakTime(initGlobalState.initBreakTime);
        setGlobalState(prevState => ({
            ...prevState,
            ...initGlobalState,
            themeId: prevState.themeId,
        }));
        setIsModalOpen(false);
    }

    const allUserSettingsParams = userStateData.map((param, index) => (
        <SettingsSectionParam
            key={index} 
            paramId={param.paramId} 
            paramName={param.paramName}
            paramValue={param.paramValue}
            min={param.min}
            max={param.max}
            type={param.type}
            setGlobalState={setGlobalState}
            globalStatePropName={param.globalStatePropName}
            tempStateToSaveToGlobal={tempStateToSaveToGlobal}
            setTempStateToSaveToGlobal={setTempStateToSaveToGlobal}
        />
    ))

    return (
        <div className="settings-section" data-testid="settings-section">
            <form 
                className='settings-section__form'
                data-testid='settings-section__form'
            >
                {allUserSettingsParams}
                
                <div className='submit-buttons-container'>
                    <input 
                        type="submit" 
                        value="Reset Settings" 
                        className='settings-section__reset-settings'
                        data-testid='settings-section__reset-settings'
                        onClick={(e) => handleResetSettings(e)}
                    />
                    <input 
                        type="submit" 
                        value="Accept changes" 
                        className='settings-section__accept-changes'
                        data-testid='settings-section__accept-changes'
                        onClick={(e) => handleAcceptChanges(e)}
                    />
                </div>

            </form>
        </div>
    )
}

export default SettingsSection;