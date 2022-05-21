import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,
} from 'chart.js';
import './UserStatisticsChart.scss';

const UserStatisticsChart = () => {
    
    ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
    );
    
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
      },
    };
    
    const labels = ['1 May', '2 May', '3 May', '4 May', '5 May', '6 May', '7 May'];
    
    const data = {
      labels,
      datasets: [
        {   
          label: 'Learned time',
          data: [4,6,8,3,2,1,2],
          backgroundColor: '#ff52c2',
        },
      ],
    };
    
    return (
        <div 
            className="user-statistics-chart"
            data-testid="user-statistics-chart"
        >
            <Bar options={options} data={data} />
        </div>
    )
}

export default UserStatisticsChart;

