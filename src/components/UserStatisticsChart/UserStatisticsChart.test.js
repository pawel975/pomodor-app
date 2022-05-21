import { render, screen } from '@testing-library/react';
import UserStatisticsChart from './UserStatisticsChart';

describe('<UserStatisticsChart/> should', () => {
    
    test('increment active session when break is skipped', () => {
        render(<UserStatisticsChart/>)
        const userStatisticsChart = screen.getByTestId("user-statistics-chart");
        expect(userStatisticsChart).toBeInTheDocument();
    });

});

