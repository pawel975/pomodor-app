import { render, screen} from "../../testUtils";
import React from "react";
import { act } from 'react-dom/test-utils';
import { sleep } from '../../helpers';
import App from "../App/App";
import userEvent from '@testing-library/user-event';

describe("<Clock/> component should", () => {

  test('be rendered properly', () => {

    render(<App/>);
    const clockComponent = screen.getByTestId('clock');
    expect(clockComponent).toBeInTheDocument();
  });

  test("reset it's timer value to break initial value if it has ended learning session", async () => {
    
    const user = userEvent.setup({delay: null});
    jest.useFakeTimers();

    render(<App/>)
    
    const startPauseBtn = screen.getByTestId("start-pause-btn");
    await user.click(startPauseBtn)
    act(() => {
      jest.advanceTimersByTime(15000)
      jest.runAllTimers();
    })

    const timeContainer = screen.queryByTestId("time-container");
    expect(timeContainer).toHaveTextContent(/^5:00$/i)
    jest.useRealTimers();
  })
  
})

