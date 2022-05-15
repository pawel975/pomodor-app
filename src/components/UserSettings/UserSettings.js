import UserSettingsParam from '../UserSettingsParam/UserSettingsParam';
import './UserSettings.scss';

const UserSettings = () => {

    return (
        <div className="user-settings" data-testid="user-settings">
            <form className='user-settings__form'>
                <UserSettingsParam 
                    paramId={"learning-time"} 
                    paramName={"Learning Time"}
                    min={1}
                    max={100}
                    paramValue={50}
                />
            </form>
        </div>
    )
}

export default UserSettings;