import {render, screen, fireEvent} from '../../testUtils';
import Modal from './Modal';
import App from '../App/App';
import userEvent from "@testing-library/user-event";

describe("<Modal/> should", () => {

    test("contain close button", () => {
        render(<Modal/>)
        const modalCloseBtn = screen.getByRole('button', {name: /close modal/i});
        expect(modalCloseBtn).toBeInTheDocument();
    })

    test("not be rendered when app is initialize", () => {
        render(<App/>)
        const modal = screen.queryByTestId("modal");
        expect(modal).not.toBeInTheDocument();
    })

    test("be closed when close button is clicked", () => {

        render(<App/>)

        const settingsBtn = screen.getByRole("button", {name: /settings/i});
        fireEvent.click(settingsBtn);

        const modal = screen.getByTestId("modal");

        const modalCloseBtn = screen.getByRole('button', {name: /close modal/i});
        fireEvent.click(modalCloseBtn);

        expect(modal).not.toBeInTheDocument();
    })

    test("lighten up choosed modal tab when clicked", () => {
        render(<App/>)

        const settingsBtn = screen.getByTestId("settings-nav-btn");
        fireEvent.click(settingsBtn);

        const settingsTab = screen.getByTestId("modal__settings-tab");
        const statisticsTab = screen.getByTestId("modal__statistics-tab");

        fireEvent.click(statisticsTab);

        expect(settingsTab).toHaveAttribute("aria-pressed", "false")
        expect(statisticsTab).toHaveAttribute("aria-pressed", "true")
    })

    test("contain all required tabs", () => {
        render(<Modal/>)
        const settingsTab = screen.getByRole("button", {name: /settings/i});
        const statisticsTab = screen.getByRole("button", {name: /statistics/i});
        const rulesInfoTab = screen.getByRole("button", {name: /rules info/i});
        const appearanceTab = screen.getByRole("button", {name: /appearance/i});
        expect(settingsTab).toBeInTheDocument();
        expect(statisticsTab).toBeInTheDocument();
        expect(rulesInfoTab).toBeInTheDocument();
        expect(appearanceTab).toBeInTheDocument();
    })

    test("should show 'Appearance Section' content when clicking on 'Appearance' tab", async () => {
        render(<App/>)
        const user = userEvent.setup();
        
        const appearanceSectionBtn = screen.getByTestId("appearance-section-nav-btn");
        await user.click(appearanceSectionBtn);

        const appearanceSectionTab = screen.getByTestId("modal__appearance-section-tab");
        await user.click(appearanceSectionTab);

        const appearanceSection = screen.getByRole("heading", {name: /theme/i});
        expect(appearanceSection).toBeInTheDocument();
    })
})