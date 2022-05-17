import { useState } from 'react';
import { formatSecondsToMinutes } from '../../helpers';
import UserSettingsParam from '../UserSettingsParam/UserSettingsParam';
import './UserSettings.scss';

const UserSettings = ({globalState, setGlobalState, setIsModalOpen, setRemainLearnTime, setRemainBreakTime}) => {

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
            globalStatePropName: 'sessionspPerBlock'
        },
        {
            paramId: "amount-of-blocks",
            paramName: "Amount Of Blocks",
            paramValue: globalState.maxBlock,
            min: 1,
            max: 4,
            type: 'none',
            globalStatePropName: 'amountOfBlocks'
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

    const allUserSettingsParams = userStateData.map((param, index) => (
        <UserSettingsParam
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
        <div className="user-settings" data-testid="user-settings">
            <form 
                className='user-settings__form'
                data-testid='user-settings__form'
            >
                {allUserSettingsParams}
                <input 
                    type="submit" 
                    value="Accept changes" 
                    className='user-settings__accept-changes'
                    data-testid='user-settings__accept-changes'
                    onClick={(e) => handleAcceptChanges(e)}
                />
            </form>
        </div>
    )
}

export default UserSettings;