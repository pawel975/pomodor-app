import StatisticsSectionChart from '../StatisticsSectionChart/StatisticsSectionChart';
import './StatisticsSection.scss';

const StatisticsSection = () => {

    return (
        <div 
            className="statistics-section" 
            data-testid="statistics-section"
        >
            <StatisticsSectionChart/>
        </div>
    )
}

export default StatisticsSection;