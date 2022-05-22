import './RulesInfoBtn.scss';
import {BsFillInfoCircleFill as RulesInfoBtnIcon} from 'react-icons/bs';

const RulesInfoBtn = ({handleModalOpen}) => {

    return (
        <button 
            onClick={handleModalOpen} 
            id="rules-info-nav-btn" 
            data-testid="rules-info-nav-btn"
            className='nav-option-btn'
        >
            <span className="sr-only">Rules Info</span>
            <RulesInfoBtnIcon className='nav-option-icon'/>
        </button>
    )
}

export default RulesInfoBtn;