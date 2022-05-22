import {render, screen} from "@testing-library/react";
import App from "../App/App";
import RulesInfoBtn from "./RulesInfoBtn";
import userEvent from '@testing-library/user-event';

describe('<RulesInfoBtn/> should', () => {
    
    test('be rendered properly', () => {
        
        render(<RulesInfoBtn/>)
        const rulesInfoBtn = screen.getByTestId("rules-info-nav-btn");
        expect(rulesInfoBtn).toBeInTheDocument();

    });

    test('open Rules Info tab when Rules Info button is clicked', async () => {
        render(<App/>)

        const user = userEvent.setup()
        const rulesInfoBtn = screen.getByRole("button", {name: /Rules Info/i});

        await user.click(rulesInfoBtn);
        
        const modal = screen.getByTestId('modal');
        expect(modal).toBeVisible();

    })
    
});