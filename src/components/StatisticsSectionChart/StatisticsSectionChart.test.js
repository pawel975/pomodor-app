import { render, screen} from "../../testUtils";
import App from '../App/App';
import userEvent from '@testing-library/user-event';

describe('<UserStatisticsChart/> should', () => {
    
    test('be rendered properly', async () => {
        render(<App/>)

        const user = userEvent.setup();
        const statisticsBtn = screen.getByTestId("statistics-nav-btn");
        
        await user.click(statisticsBtn)

        const userStatisticsChart = screen.getByTestId("statistics-section-chart");
        expect(userStatisticsChart).toBeInTheDocument();
    });

});

