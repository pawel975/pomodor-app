import { Bar } from 'react-chartjs-2';

const UserStatisticsChart = () => {
    
    return (
        <div data-testid="user-statistics-chart">
            <Bar
                datasetIdKey='id'
                data={{
                    labels: ['Jun', 'Jul', 'Aug'],
                    datasets: [
                    {
                        id: 1,
                        label: '',
                        data: [5, 6, 7],
                    },
                    {
                        id: 2,
                        label: '',
                        data: [3, 2, 1],
                    },
                    ],
                }}
            />
        </div>
    )
}

export default UserStatisticsChart;

