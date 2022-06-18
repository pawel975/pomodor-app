import {render, screen, fireEvent} from '../../testUtils';
import App from '../App/App';
import StatisticsBtn from './StatisticsBtn';

describe('<StatisticsBtn/> should', () => {
    
    test('be rendered properly', () => {
        render(<StatisticsBtn/>)
        const StatisticsComponent = screen.getByRole("button", {name: /Statistics/i})
        expect(StatisticsComponent).toBeInTheDocument();    
    });

    test('open Statistics modal when Statistics button is clicked', () => {
        render(<App/>)
        const StatisticsBtn = screen.getByRole("button", {name: /Statistics/i});
        fireEvent.click(StatisticsBtn);
        const modal = screen.getByTestId('modal');
        expect(modal).toBeVisible();

    })

});