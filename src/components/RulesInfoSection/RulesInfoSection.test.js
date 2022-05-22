import {render, screen} from "@testing-library/react";
import RulesInfoSection from "./RulesInfoSection";

describe('<RulesInfoSection/> should', () => {
    
    test('be rendered properly', () => {
        render(<RulesInfoSection/>);
        const rulesInfoSection = screen.getByTestId("rules-info-section");
        expect(rulesInfoSection).toBeInTheDocument();
    });

});