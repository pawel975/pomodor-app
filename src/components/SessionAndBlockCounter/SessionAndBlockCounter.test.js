import {render, screen} from '../../testUtils';
import { useState } from 'react';
import SessionAndBlockCounter from './SessionAndBlockCounter';

describe('<SessionAndBlockCounter/> should', () => {

    test('be rendered properly', () => {
        
        render(<SessionAndBlockCounter globalState={{}}/>)
        const sessionAndBlockCounterComponent = screen.getByTestId("session-and-block-counter");
        expect(sessionAndBlockCounterComponent).toBeInTheDocument();
    });

    test('update session counter when short break is over', async () => {

        const MockApp = () => {

            const [globalState, setGlobalState] = useState({
                currentSession: 1,
                maxSession: 2
            })

            return (
                <SessionAndBlockCounter 
                    setGlobalState={setGlobalState}
                    remainBreakTime={0}
                    globalState={globalState}
                />
            )
        }

        render(<MockApp/>)

        const currentSession = screen.getByTestId("current-session");
        expect(currentSession).toHaveTextContent(/2/);
    });

});