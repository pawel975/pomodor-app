import {render, screen} from '@testing-library/react';
import Clock from '../Clock/Clock';
import SessionAndBlockCounter from './SessionAndBlockCounter';

describe('<SessionAndBlockCounter/> should', () => {
    
    test('be rendered properly', () => {
        render(<SessionAndBlockCounter globalState={{}}/>)
        const sessionAndBlockCounterComponent = screen.getByTestId("session-and-block-counter");
        expect(sessionAndBlockCounterComponent).toBeInTheDocument();
    });

    test('update session counter when short break is over', () => {
        render(<Clock 
            remainBreakTime={0}
            setGlobalState={jest.fn()}
            // setRemainBreakTime={setRemainBreakTime}
            globalState={{currentSession: 1, maxSession: 2}}
        />)
        const currentSession = screen.getByTestId("current-session");
        expect(currentSession).toHaveTextContent(/2/);
    });

});