import {FaPalette as AppearanceSectionBtnIcon} from 'react-icons/fa';

const AppearanceSectionBtn = ({handleModalOpen}) => {

    return (
        <button 
            onClick={handleModalOpen} 
            id="appearance-section-nav-btn" 
            className='nav-option-btn'
            data-testid="appearance-section-nav-btn"
        >
            <span className="sr-only">Appearance</span>
            <AppearanceSectionBtnIcon className='nav-option-icon'/>
        </button>
    )
}

export default AppearanceSectionBtn;