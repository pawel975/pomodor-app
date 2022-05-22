import { getFromLocalStorage, getLastWeek, saveToLocalStorage } from '../../helpers';
import UserStatisticsChart from '../UserStatisticsChart/UserStatisticsChart';
import './UserStatistics.scss';

const UserStatistics = () => {

    const lastWeek = getLastWeek();

    if (!getFromLocalStorage("statistics")) {
        const lastWeekRecords = [];

        lastWeek.forEach(dayDate => {
            lastWeekRecords.push({
                date: dayDate,
                minutesLearned: 0
            })
        })

        saveToLocalStorage("statistics", lastWeekRecords);
    } else {
        // TODO truncate statistics records of day more than 6 days ago
        const lastWeekeRecords = getFromLocalStorage("statistics");
        lastWeekeRecords.forEach(day => {
            if ()
        })
    }

    return (
        <div 
            className="user-statistics" 
            data-testid="user-statistics"
        >
            <UserStatisticsChart/>
        </div>
    )
}

export default UserStatistics;