import { render, screen} from "@testing-library/react";
import React from "react";
import { act } from 'react-dom/test-utils';
import App from "../App/App";
import userEvent from '@testing-library/user-event';
import { configureStore } from "@reduxjs/toolkit";
import allReducers from "../../reducers";
import { Provider } from "react-redux";

describe("<Clock/> component should", () => {

    test('be rendered properly', () => {

        const store = configureStore(
            {
            reducer: allReducers, 
            preloadedState: {remainLearnTime: 0}
            })

        const MockApp = () => {
            return(
            <Provider store={store}>
                <App/>
            </Provider>
            )
        }

        render(<MockApp/>)

        const clockComponent = screen.getByTestId('clock');
        expect(clockComponent).toBeInTheDocument();
    });

    test("reset it's timer value to break initial value if it has ended learning session", async () => {

        const user = userEvent.setup({delay: null});
        jest.useFakeTimers();

        // Fake store with 0 remain time (Should switch from 0 to 5:00)
        const store = configureStore(
            {
                reducer: allReducers, 
                preloadedState: {remainLearnTime: 0}
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
        await user.click(startPauseBtn)

        act(() => {
            jest.runAllTimers();
        })

        const timeContainer = screen.getByTestId("time-container");
        expect(timeContainer).toHaveTextContent(/^5:00$/i)
        jest.useRealTimers();
    })

    test('switch to long break when last session break is active', async () => {

        const user = userEvent.setup({delay: null});

        const store = configureStore({reducer: allReducers})

        const MockApp = () => {
            return(
                <Provider store={store}>
                    <App/>
                </Provider>
            )
        }

        render(<MockApp/>)

        const startPauseBtn = screen.getByTestId("start-pause-btn");
        const skipBtn = screen.getByText(/Skip/i);

        await user.dblClick(startPauseBtn)
        await user.dblClick(skipBtn);
        await user.dblClick(skipBtn);
        await user.dblClick(skipBtn);
        await user.click(skipBtn);

        const timeContainer = screen.getByTestId("time-container");
        expect(timeContainer).toHaveTextContent(/^15:00$/i)
        jest.useRealTimers();

    })
    
})

