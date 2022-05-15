import {render, screen} from '@testing-library/react';
import UserStatistics from './UserStatistics';

describe('<UserStatistics/> should', () => {
    
    test('be rendered properly', () => {
        render(<UserStatistics/>)
        const userStatisticsComponent = screen.getByTestId("user-statistics")
        expect(userStatisticsComponent).toBeInTheDocument();
    });
});