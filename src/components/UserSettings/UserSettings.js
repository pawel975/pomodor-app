import './UserSettings.scss';

const UserSettings = () => {
    return (
        <div className="user-settings" data-testid="user-settings">
            <form className='user-settings__form'>
                <label htmlFor='learning-time'>Learning Time</label>
                <input type="range" className='user-settings__slider'></input>
            </form>
        </div>
    )
}

export default UserSettings;