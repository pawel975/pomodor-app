import {render, screen, fireEvent} from '@testing-library/react';
import UserSettingsParam from './UserSettingsParam';

describe('<UserSettingsParam/> should', () => {
    
    test('be rendered properly', () => {
        render(<UserSettingsParam/>)
        const settingsParamComponent = screen.getByTestId("user-settings__param-container");
        expect(settingsParamComponent).toBeInTheDocument();
    });

    test("get max value from props", () => {
        render(
            <UserSettingsParam 
                max={100}
                paramValue={50}
            />
        )
        const slider = screen.getByRole("slider");
        expect(slider).toHaveAttribute("max", "100")
    })

    test("get min value from props", () => {
        render(
            <UserSettingsParam 
                min={1}
                paramValue={50}
            />
        )
        const slider = screen.getByRole("slider");
        expect(slider).toHaveAttribute("min", "1")
    })

    test("change param value based on slider value", () => {
        
        const paramId = "learning-time"
        
        render(
            <UserSettingsParam
                paramId={paramId}
            />
        )

        const sliderInput = screen.getByRole('slider');
        fireEvent.change(sliderInput, {target: {value: 85}})

        const paramContainer = screen.getByTestId(paramId)
        expect(paramContainer).toHaveTextContent("1 h 25 min")
    })

});