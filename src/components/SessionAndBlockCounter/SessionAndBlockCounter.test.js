import {render, screen} from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import allReducers from '../../reducers';
import { Provider } from 'react-redux';
import App from '../App/App';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('<SessionAndBlockCounter/> should', () => {

    test('be rendered properly', () => {

        const store = configureStore({reducer: allReducers, })

        const MockApp = () => {
            return(
                <Provider store={store}>
                    <App/>
                </Provider>
            )
        }
    
        render(<MockApp/>)
        const sessionAndBlockCounterComponent = screen.getByTestId("session-and-block-counter");
        expect(sessionAndBlockCounterComponent).toBeInTheDocument();
    });

    test('update session counter when short break is over', async () => {

        const user = userEvent.setup({delay: null});
        jest.useFakeTimers();

        const store = configureStore(
            {
                reducer: allReducers, 
                preloadedState: {remainBreakTime: 0}
            }
        )
    
        const MockApp = () => {
            return(
                <Provider store={store}>
                    <App/>
                </Provider>
            )
        }
    
        render(<MockApp/>)

        const startPauseBtn = screen.getByTestId("start-pause-btn");
        const skipBtn = screen.getByText(/skip/i);

        await user.dblClick(startPauseBtn);
        await user.click(skipBtn);
        await user.click(startPauseBtn);

        act(() => {
            jest.runAllTimers();
        })

        const currentSession = screen.getByTestId("current-session");
        expect(currentSession).toHaveTextContent(/2/);
        jest.useRealTimers();
    });

});