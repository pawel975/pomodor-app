import {render, screen} from '@testing-library/react';
import App from '../App/App';
import SessionAndBlockCounter from './SessionAndBlockCounter';

describe('<SessionAndBlockCounter/> should', () => {
    
    test('be rendered properly', () => {
        render(<SessionAndBlockCounter globalState={{}}/>)
        const sessionAndBlockCounterComponent = screen.getByTestId("session-and-block-counter");
        expect(sessionAndBlockCounterComponent).toBeInTheDocument();
    });

    test('update session counter when short break is over', () => {
        render(<App/>)
        const currentSession = screen.getByTestId("current-session");
        expect(currentSession).toHaveTextContent(/2/);
    });

});