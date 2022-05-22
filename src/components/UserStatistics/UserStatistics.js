import UserStatisticsChart from '../UserStatisticsChart/UserStatisticsChart';
import './UserStatistics.scss';

const UserStatistics = () => {

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