import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,
} from 'chart.js';
import './StatisticsSectionChart.scss';
import { getFromLocalStorage } from '../../helpers';

const StatisticsSectionChart = () => {

    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

    // reversed statistics records so today's record is rightmost on chart
    const lastWeekLearningRecords = getFromLocalStorage("statistics").reverse();
    const lastWeekRecordsDays = lastWeekLearningRecords.map(record => record.date)
    const lastWeekRecordsSeconds = lastWeekLearningRecords.map(record => record.secondsLearned / 60)
    
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Learning Statistics',
            },
        }
    };
    
    const labels = lastWeekRecordsDays;
    
    const data = {
        labels,
        datasets: [
            {   
                label: 'Minutes learned',
                data: lastWeekRecordsSeconds,
                backgroundColor: '#ff52c2',
            },
        ],
    };
    
    return (
        <div 
            className="statistics-section-chart"
            data-testid="statistics-section-chart"
        >
            <Bar options={options} data={data} />
        </div>
    )
}

export default StatisticsSectionChart;

