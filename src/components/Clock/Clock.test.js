import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { sleep } from '../../helpers';
import App from '../App/App';
import Timer from '../Timer/Timer';
import Clock from './Clock';

describe("<Clock/> component should", () => {

  test('be rendered properly', () => {
    render(<Clock globalState={{}}/>);
    const clockComponent = screen.getByTestId('clock');
    expect(clockComponent).toBeInTheDocument();
  });

  test("reset it's timer value to break initial value if it has ended learning session", async () => {
    
    let globalState={
      isLearningPhaseActive: true,
      isTimerRun: true,
    }
    let remainLearnTime = 0
    let remainBreakTime= 300
    
    render (
        <Clock 
          globalState={globalState} 
          remainBreakTime={remainBreakTime} 
          remainLearnTime={remainLearnTime}
          setRemainBreakTime={jest.fn()}
          setRemainLearnTime={jest.fn()}
        />
    )

    await act(() => sleep(1000));
    const timeContainer = screen.getByTestId("time-container");
    expect(timeContainer).toHaveTextContent(/^5:00$/i)
})

})

