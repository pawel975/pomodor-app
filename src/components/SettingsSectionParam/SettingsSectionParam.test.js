import {render, screen, fireEvent} from '@testing-library/react';
import SettingsSectionParam from './SettingsSectionParam';

describe('<SettingsSectionParam/> should', () => {
    
    test('be rendered properly', () => {
        render(<SettingsSectionParam/>)
        const settingsParamComponent = screen.getByTestId("settings-section__param-container");
        expect(settingsParamComponent).toBeInTheDocument();
    });

    test("get max value from props", () => {
        render(
            <SettingsSectionParam 
                max={100}
                paramValue={50}
            />
        )
        const slider = screen.getByRole("slider");
        expect(slider).toHaveAttribute("max", "100")
    })

    test("get min value from props", () => {
        render(
            <SettingsSectionParam 
                min={1}
                paramValue={50}
            />
        )
        const slider = screen.getByRole("slider");
        expect(slider).toHaveAttribute("min", "1")
    })

    test("change param value based on slider value", () => {
        
        const paramId = "learning-time"
        const spanId = "learning-time__formatted-value-container"
         
        render(
            <SettingsSectionParam
                setTempStateToSaveToGlobal={jest.fn()}
                paramId={paramId}
                type="time"
            />
        )

        const sliderInput = screen.getByRole('slider');
        fireEvent.change(sliderInput, {target: {value: 85}})

        const paramContainer = screen.getByTestId(spanId)
        expect(paramContainer).toHaveTextContent("1 h 25 min")
    })

});