import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { sleep } from '../../helpers';
import App from '../App/App';
import Clock from './Clock';

describe("<Clock/> component should", () => {

  test('be rendered properly', () => {
    render(<Clock />);
    const clockComponent = screen.getByTestId('clock');
    expect(clockComponent).toBeInTheDocument();
  });

  test("reset it's timer value to break initial value if it has ended learning session", async () => {
    render (
        <App>
            <Clock 
                isLearnPhaseActive={true}
                isTimerRun={true}
            />
        </App>
    )

    const timeContainer = screen.getByTestId("time-container");
    await act(() => sleep(1000));
    expect(timeContainer).toHaveTextContent(/^25:00$/i)
})

})

