import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App/App";
import AppearanceSectionBtn from "./AppearanceSectionBtn";

describe('<AppearanceSeciontBtn/> should', () => {
    
    test('be rendered properly', () => {
        render(<AppearanceSectionBtn/>);
        const appearanceSectionBtn = screen.getByTestId('appearance-section-nav-btn');
        expect(appearanceSectionBtn).toBeInTheDocument();

    });

    test("open modal on 'Appearance Section' tab when cliked", async () => {
        render(<App/>);

        const user = userEvent.setup();
        
        const appearanceSectionBtn = screen.getByTestId("appearance-section-nav-btn");
        
        await user.click(appearanceSectionBtn)

        const appearanceSectionHeaderText = screen.getByRole("heading", {name: "Theme"});
        expect(appearanceSectionHeaderText).toBeInTheDocument()
    })

});