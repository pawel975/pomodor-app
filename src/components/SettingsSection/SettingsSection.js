import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { globalStateUpdate } from '../../actions';
import { formatSecondsToMinutes } from '../../helpers';
import SettingsSectionParam from '../SettingsSectionParam/SettingsSectionParam';
import './SettingsSection.scss';

const initGlobalState = 
    {
        initLearnTime: 1500,
        initBreakTime: 300,
        initLongBreakTime: 900,
        maxSession: 4,
        maxBlock: 2,
        currentBlock: 1,
        currentSession: 1,
        isLearnPhaseActive: true,
        isLearningBlockActive: false,
        isTimerRun: false,
        themeId: "infinite-ocean",
        fontId: "concert-one"
    }

const SettingsSection = ({setIsModalOpen, setRemainLearnTime, setRemainBreakTime}) => {

    const dispatch = useDispatch();
    const globalStateReducer = useSelector(state => state.globalState)

    const userStateData = [
        {
            paramId: "learning-time",
            paramName: "Learning Time",
            paramValue: formatSecondsToMinutes(globalStateReducer.initLearnTime),
            min: 10,
            max: 120,
            type: 'time',
            globalStatePropName: 'initLearnTime'
        },
        {
            paramId: "break-time",
            paramName: "Break Time",
            paramValue: formatSecondsToMinutes(globalStateReducer.initBreakTime),
            min: 2,
            max: 30,
            type: 'time',
            globalStatePropName: 'initBreakTime'
        },
        {
            paramId: "long-break-time",
            paramName: "Long Break Time",
            paramValue: formatSecondsToMinutes(globalStateReducer.initLongBreakTime),
            min: 5,
            max: 60,
            type: 'time',
            globalStatePropName: 'initLongBreakTime'
        },
        {
            paramId: "sessions-per-block",
            paramName: "Sessions Per Block",
            paramValue: globalStateReducer.maxSession,
            min: 2,
            max: 6,
            type: 'none',
            globalStatePropName: 'maxSession'
        },
        {
            paramId: "amount-of-blocks",
            paramName: "Amount Of Blocks",
            paramValue: globalStateReducer.maxBlock,
            min: 1,
            max: 4,
            type: 'none',
            globalStatePropName: 'maxBlock'
        },
    ]
    
    const [tempStateToSaveToGlobal, setTempStateToSaveToGlobal] = useState(globalStateReducer);

    const handleAcceptChanges = (e) => {
        e.preventDefault();
        setRemainLearnTime(tempStateToSaveToGlobal.initLearnTime)
        setRemainBreakTime(tempStateToSaveToGlobal.initBreakTime)

        dispatch(
            globalStateUpdate({
            ...tempStateToSaveToGlobal,
            isLearnPhaseActive: true,
            isLearningBlockActive: false,
            isTimerRun: false,
            })
        )

        setIsModalOpen(false)
    }

    const handleResetSettings = (e) => {
        e.preventDefault();
        setRemainLearnTime(globalStateReducer.initLearnTime);
        setRemainBreakTime(globalStateReducer.initBreakTime);

        dispatch(
            globalStateUpdate({
                ...initGlobalState,
                themeId: globalStateReducer.themeId,
            })
        )

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