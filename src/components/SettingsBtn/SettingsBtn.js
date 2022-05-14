import './SettingsBtn.scss';
import {IoMdSettings as SettingsBtnIcon} from 'react-icons/io';

const SettingsBtn = ({handleModalOpen}) => {

    return (
        <button onClick={handleModalOpen} id="settings-btn" className='nav-option-btn'>
            <span className="sr-only">Settings</span>
            <SettingsBtnIcon className='nav-option-icon'/>
        </button>
    )
}

export default SettingsBtn;