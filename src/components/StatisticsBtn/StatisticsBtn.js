import './StatisticsBtn.scss';
import {ImStatsDots as StatisticsBtnIcon} from 'react-icons/im';

const StatisticsBtn = ({handleModalOpen}) => {

    return (
        <button onClick={handleModalOpen} id="statistics-btn" className='nav-option-btn'>
            <span className="sr-only">Statistics</span>
            <StatisticsBtnIcon className='nav-option-icon'/>
        </button>
    )
}

export default StatisticsBtn;