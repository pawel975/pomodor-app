import { formatSecondsToMinutes } from '../../helpers';
import UserSettingsParam from '../UserSettingsParam/UserSettingsParam';
import './UserSettings.scss';

const UserSettings = ({globalState}) => {

    const userStateData = [
        {
            paramId: "learning-time",
            paramName: "Learning Time",
            paramValue: formatSecondsToMinutes(globalState.initLearnTime),
            min: 10,
            max: 60,
        },
        {
            paramId: "break-time",
            paramName: "Break Time",
            paramValue: formatSecondsToMinutes(globalState.initBreakTime),
            min: 2,
            max: 30,
        },
        {
            paramId: "long-break-time",
            paramName: "Long Break Time",
            paramValue: formatSecondsToMinutes(globalState.initLongBreakTime),
            min: 5,
            max: 60,
        },
        {
            paramId: "sessions-per-block",
            paramName: "Sessions Per Block",
            paramValue: globalState.sessionspPerBlock,
            min: 2,
            max: 6,
        },
        {
            paramId: "amount-of-blocks",
            paramName: "Amount Of Blocks",
            paramValue: globalState.amountOfBlocks,
            min: 1,
            max: 4,
        },
    ]

    const allUserSettingsParams = userStateData.map((param, index) => (
        <UserSettingsParam
        key={index} 
        paramId={param.paramId} 
        paramName={param.paramName}
        paramValue={param.paramValue}
        min={param.min}
        max={param.max}
    />
    ))

    return (
        <div className="user-settings" data-testid="user-settings">
            <form 
                className='user-settings__form'
                data-testid='user-settings__form'
            >
                {allUserSettingsParams}
            </form>
        </div>
    )
}

export default UserSettings;