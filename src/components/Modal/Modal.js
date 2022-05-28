import './Modal.scss';
import {IoMdClose as CloseIcon} from 'react-icons/io' 

const Modal = ({setIsModalOpen, content, activeModalContentBtnId, setActiveModalContentBtnId}) => {

    const handleModalClose = () => {
        setIsModalOpen(false);
    }

    const handleChoosedTabLighten = (e) => {
        switch(e.target.id) {
            case "modal__settings-tab":
                setActiveModalContentBtnId("settings-nav-btn")
                break
            case "modal__statistics-tab":
                setActiveModalContentBtnId('statistics-nav-btn')
                break
            case "modal__rules-info-tab":
                setActiveModalContentBtnId('rules-info-nav-btn')
                break
            case "modal__appearance-section-tab":
                setActiveModalContentBtnId('appearance-section-nav-btn')
                break
            default:
                break
        }
    }

    return (
        <div className="modal" data-testid="modal">
            <div onClick={handleModalClose} className='modal__background'></div>
            <div className='modal__container'>
                <header>
                    <div className='modal__choose-tab-list' role='tablist'>

                        <button
                            onClick={handleChoosedTabLighten}
                            id="modal__settings-tab" 
                            data-testid="modal__settings-tab" 
                            aria-pressed={activeModalContentBtnId === 'settings-nav-btn' ? true : false}
                        >
                            Settings
                        </button>

                        <button 
                            onClick={handleChoosedTabLighten}
                            id="modal__statistics-tab" 
                            data-testid="modal__statistics-tab" 
                            aria-pressed={activeModalContentBtnId === 'statistics-nav-btn' ? true : false}
                        >
                            Statistics
                        </button>

                        <button 
                            onClick={handleChoosedTabLighten}
                            id="modal__rules-info-tab" 
                            data-testid="modal__rules-info-tab" 
                            aria-pressed={activeModalContentBtnId === 'rules-info-nav-btn' ? true : false}
                        >
                            Rules Info
                        </button>

                        <button 
                            onClick={handleChoosedTabLighten}
                            id="modal__appearance-section-tab" 
                            data-testid="modal__appearance-section-tab" 
                            aria-pressed={activeModalContentBtnId === 'appearance-section-nav-btn' ? true : false}
                        >
                            Appearance
                        </button>

                    </div>

                    <button onClick={handleModalClose} className='modal__close-btn'>
                        <span className='sr-only'>close modal</span>
                        <CloseIcon className='modal__close-btn-icon'/>
                    </button>

                </header>
                <div className='modal__content'>
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Modal;